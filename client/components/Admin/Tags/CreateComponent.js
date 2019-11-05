import React from 'react';
import { Form, Input, Button, Upload, Icon, message } from 'antd';
import { postTag } from '../../../api/admin/tags';
import Router from 'next/router';
import Link from 'next/link';


class CreateComponent extends React.Component {
  state = {
    loading: false,
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        try {
          await postTag(values);
          Router.push('/admin/tag/index');
        } catch (error) {
          message.error('Server Error!');
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

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
          })(<Input />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout} >
          <Link href="/admin/tag/index" as={`/admin/tag/index`}>
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