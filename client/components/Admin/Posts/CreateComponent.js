import React from 'react';
import { Form, Input, Button, Upload, Icon, message, Row, Col } from 'antd';
import { postPost } from '../../../api/admin/posts';
import Router from 'next/router';
import Link from 'next/link';
import QuillNoSSRWrapper from '../../Common/QuillNoSSRWrapper';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class CreateComponent extends React.Component {
  state = {
    loading: false,
    textInput: ''
  };

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
          values.image_title = values.image_title.file.originFileObj;
          var formData = new FormData();
          formData.append('title', values.title);
          formData.append('image_title', values.image_title);
          formData.append('content', this.state.textInput);
          console.log(formData);
          await postPost(formData);
          // Router.push('/admin/category/index');
        } catch (error) {
          console.log(error);
          message.error('Server Error!');
        }
      }
    });
  };

  handleChangeInputArea = (textInput) => {
    this.setState({ textInput })
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;

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
        <Row>
          <Col xs={{span: 24}} sm={{ span: 4 }} style={{textAlign: 'right'}} ><b>Content:</b></Col>
          <Col xs={{span: 24}} sm={{ span: 12 }}><QuillNoSSRWrapper handleChangeInputArea={this.handleChangeInputArea}/></Col>
        </Row>
        <Form.Item {...tailFormItemLayout} >
          <Link href="/admin/category/index" as={`/admin/category/index`}>
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

const WrappedRegistrationForm = Form.create({ name: 'register' })(CreateComponent);

export default WrappedRegistrationForm;