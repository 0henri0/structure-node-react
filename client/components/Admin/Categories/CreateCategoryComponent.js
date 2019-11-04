import React from 'react';
import { Form, Input, Button, Upload, Icon, message } from 'antd';
import { postCategory } from '../../../api/admin/categories';

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

class CreateCategoryComponent extends React.Component {
  state = {
    loading: false,
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
        values.avatar = values.avatar.file.originFileObj;
        var formData = new FormData();
        formData.append('name', values.name);
        formData.append('avatar', values.avatar);
        await postCategory(formData)
      }
    });
  };


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
        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please input name Category!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Avatar">
          {getFieldDecorator('avatar', {
            rules: [
              {
                required: true,
                message: 'Please input name Avatar Category!',
              },
            ],
          })(<Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout} >
          <Button type="danger" htmlType="submit" style={{marginRight: '10px' }}>
            Cancel
          </Button>
          <Button type="omitted" htmlType="submit" style={{backgroundColor: '#7FFF00' }}>
            Create
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(CreateCategoryComponent);

export default WrappedRegistrationForm;