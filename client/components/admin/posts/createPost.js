import React from 'react';
import { Modal, Button, Icon, Form, Input } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

class CreatePost extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };
  
  rteChange = (content, delta, source, editor) => {
    console.log(editor.getHTML()); // HTML/rich text
    console.log(editor.getText()); // plain text
    console.log(editor.getLength()); // number of characters
  }

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;

    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
      }
    };

    return (
      <div>
        <Icon type="plus-circle" style={{ fontSize: '50px', color: '#08c' }} onClick={this.showModal} /> 
        <Modal
          width='1300px'
          visible={visible}
          title="Title"
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleSubmit}>
              Submit
            </Button>,
          ]}
        >
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Title">
          {getFieldDecorator("title", {
            rules: [
              {
                required: true,
                message: "Please input your Title!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        
        </Form>
        <ReactQuill onChange={this.rteChange}/>
      
        </Modal>
      </div>
    );
  }
}

const WrappedForm = Form.create({ name: 'create-post' })(CreatePost);

export default WrappedForm;