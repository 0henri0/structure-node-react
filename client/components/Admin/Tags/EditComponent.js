import React from 'react';
import { Form, Input, Button, Upload, Icon, message } from 'antd';
import { editTag, getDetailTag } from '../../../api/admin/tags';
import Router from 'next/router';
import Link from 'next/link';

class EditComponent extends React.Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    this.fetch();
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        try {
          await editTag(Router.query.id, values);
          Router.push('/admin/tag/index');
        } catch (error) {
          message.error('Server Error!');
        }
      }
    });
  };

  fetch = () => {
   getDetailTag(Router.query.id)
      .then(res => {
        console.log(res);
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
                message: 'Please input name Tag!',
              },
            ],
            initialValue: name,
          })(<Input />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout} >
          <Link href="/admin/tag/index" as={`/admin/tag/index`}>
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