import React from 'react';
import { Avatar, Form, Input, Button, Upload, Icon, message, Radio, Select } from 'antd';
import { editPost, getDetailPost } from '../../../api/admin/posts';
import { getCategoriesAll } from '../../../api/admin/categories';
import { getTagsAll } from '../../../api/admin/tags';
import Router from 'next/router';
import Link from 'next/link';
import QuillNoSSRWrapper from '../../Common/QuillNoSSRWrapper';
import { getBase64, beforeUpload } from '../../../helpers/uploadImage';
import _ from 'lodash';


const { Option } = Select;

class EditComponent extends React.Component {
  state = {
    loading: false,
    textInput: 'abdcjkdlajskld',
    categoriesInitial: [],
    tagsInitial: [],
    postInitial: {}
  };

  editorRef = React.createRef();

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        try {
          var formData = new FormData();
          _.map(values, (value, key) => {
            if (Array.isArray(value)) {
              _.map(value, (item) => {
                formData.append(key + '[]', item)
              })

              return;
            }
            if (value['file']) {
              formData.append(key, value.file.originFileObj);

              return;
            }

            formData.append(key, value);
          })

          formData.append('content', this.state.textInput);

          await editPost(formData);
          Router.push('/admin/posts/index');
        } catch (error) {
          message.error('Server Error!');
        }
      }
    });
  };

  handleChangeInputArea = (textInput) => {
    // this.setState({ textInput })
  }

  fetch = () => {
    getCategoriesAll()
       .then(res => {
         this.setState({
           categoriesInitial: res.data.categories,
         });
       })
       .catch(error => {
         return error;
       });

    getTagsAll()
       .then(res => {
        this.setState({
          tagsInitial: res.data.tags,
        });
       })
       .catch(error => {
        return error;
      });

    getDetailPost(Router.query.id)
      .then(res => {
        this.editorRef.current.changeDefaultValue(res.data.content)
        this.setState({
          postInitial: res.data
        })
      })
      .catch(error => {
        return error;
      });

   };

  componentDidMount() {
    this.fetch();
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    const { imageUrl, textInput } = this.state;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 9,
        },
      },
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Title">
          {getFieldDecorator('title', {
            rules: [
              {
                required: true,
                message: 'Please input title Post!',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Draft">
          {getFieldDecorator('draft', {
            rules: [
              {
                required: true,
                message: 'Please select draft!',
              },
            ],
            initialValue: 1
          })(
            <Radio.Group>
              <Radio value={1}>Available</Radio>
              <Radio value={0}>Unavailable</Radio>
            </Radio.Group>
          )}
        </Form.Item>

        <Form.Item label="image_title">
          {getFieldDecorator('image_title', {
            rules: [
              {
                required: true,
                message: 'Please input image_title Post!',
              },
            ],
          })(<Upload
            name="image_title"
            listType="picture-card"
            className="image_title-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="image_title" style={{ width: '100%' }} /> : uploadButton}
          </Upload>)}
        </Form.Item>

        <Form.Item label="Content">
          <QuillNoSSRWrapper ref={ this.editorRef } value={this.state.textInput} handleChangeInputArea={this.handleChangeInputArea}/>
        </Form.Item>

        <Form.Item label="Category">
          {getFieldDecorator('category')(
            <Select>
              {this.state.categoriesInitial.map((value, key)=> {
                return (
                  <Option key={key} value={value._id}>
                  <span role="img" aria-label={value.name}>
                    <Avatar shape="square" size="small" src={value.image} />
                  </span>
                    {' ' + value.name}
                  </Option>
                )
              })}
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Tag">
          {getFieldDecorator('tags')(
            <Select  mode="multiple" placeholder="Please select">
              {this.state.tagsInitial.map((value, key)=> {
                return (
                  <Option key={key} value={value._id}>
                    {' ' + value.name}
                  </Option>
                )
              })}
            </Select>
          )}
        </Form.Item>

        <Form.Item {...tailFormItemLayout} >
          <Link href="/admin/posts/index" as={`/admin/posts/index`}>
              <a><Button type="danger" htmlType="submit" style={{marginRight: '10px' }}>Cancel</Button></a>
          </Link>
          <Button type="omitted" htmlType="submit" style={{backgroundColor: '#7FFF00' }}>
            Create
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'edit' })(EditComponent);

export default WrappedRegistrationForm;