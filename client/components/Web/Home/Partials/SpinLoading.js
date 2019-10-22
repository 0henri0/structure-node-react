import { ButtonToolbar,Spinner, Button } from 'react-bootstrap';
const SpinLoading = ({status, fetchMoreData}) => {
  if (status) {
    return (
      <div>
        <Spinner animation="grow" variant="success" />
      </div>
      )
  } else {
    return (
      <div>
        <Button variant="outline-success" onClick= {fetchMoreData}>Xem Thêm </Button>
      </div>
      )
  }
}

export default SpinLoading;
