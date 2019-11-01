import { Modal, Button } from 'antd';
import FormCreate from './FormCreate';
import { connect } from 'react-redux';
import * as actions from '../../../../modules/admin/actions'
class ModelCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: props.visible};
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({visible: nextProps.visible});
    console.log(this.state.visible);
  }

  render() {
    const { handleCancel } = this.props;
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={handleCancel}
        >
        <FormCreate />
        </Modal>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const {statusModelCreate} = state.adminStore
  return {
    visible: statusModelCreate
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    handleCancel: () => {
      dispatch(actions.setStatusCreate());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelCreate);