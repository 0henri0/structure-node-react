import React from 'react';
import { Form, Input, Button, Upload, Icon, message } from 'antd';
import { editCategory, getDetailCategory } from '../../../api/admin/categories';
import Router from 'next/router';
import Link from 'next/link';

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

class EditComponent extends React.Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    this.fetch();
  }

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
          values.image = values.image.file.originFileObj;
          var formData = new FormData();
          formData.append('name', values.name);
          formData.append('image', values.image);

          await editCategory(Router.query.id, formData);
          Router.push('/admin/categories/index');
        } catch (error) {
          message.error('Server Error!');
        }
      }
    });
  };

  fetch = () => {
   getDetailCategory(Router.query.id)
      .then(res => {
        this.setState({
          name: res.data.data.name,
        });
      })
      .catch(error => {
        return error;
      });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { name } = this.state;
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
        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please input name Category!',
              },
            ],
            initialValue: name,
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Image">
          {getFieldDecorator('image', {
            rules: [
              {
                required: true,
                message: 'Please input Image Category!',
              },
            ],
          })(<Upload
            name="image"
            listType="picture-card"
            className="image-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="image" style={{ width: '100%' }} /> : uploadButton}
          </Upload>)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout} >
          <Link href="/admin/category/index" as={`/admin/category/index`}>
              <a><Button type="danger" htmlType="submit" style={{marginRight: '10px' }}>Cancel</Button></a>
          </Link>
          <Button type="omitted" htmlType="submit" style={{backgroundColor: '#7FFF00' }}>
            Edit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedEditForm = Form.create({ name: 'edit' })(EditComponent);

export default WrappedEditForm;