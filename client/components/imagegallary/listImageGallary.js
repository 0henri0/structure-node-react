import React from 'react';
import ImageGallary from './imageGallary';
import Carousel, { ModalGateway, Modal } from 'react-images';

const images = [
  { src: 'static/img/imagegallary/1.jpg' },
  { src: 'static/img/imagegallary/2.jpg' },
  { src: 'static/img/imagegallary/3.jpg' },
  { src: 'static/img/imagegallary/4.jpg' },
  { src: 'static/img/imagegallary/5.jpg' },
  { src: 'static/img/imagegallary/6.jpg' },
  { src: ' static/img/elements/g1.jpg' },
  { src: ' static/img/elements/g2.jpg' },
  { src: ' static/img/elements/g3.jpg' },
  { src: ' static/img/elements/g4.jpg' },
  { src: ' static/img/elements/g5.jpg' },
  { src: ' static/img/elements/g6.jpg' },
  { src: ' static/img/elements/g7.jpg' },
  { src: ' static/img/elements/g8.jpg' },
];

class ListImageGallary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      selectedIndex: 0
    };
  }
  toggleModal = (index) => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen, selectedIndex: index });
  }
  render() {
    const { selectedIndex } = this.state;
    return (
      <div className="section-top-border">
        <h3 className="title_color" style={{ textAlign: 'center' }}>Image Gallery</h3>
        <div className="row gallery-item">
          {images.map((image, index) => {
            return <ImageGallary key={index} src={image.src} onClick={() => this.toggleModal(index)} />;
          })}

          <ModalGateway>
            {this.state.modalIsOpen ? (
              <Modal onClose={this.toggleModal}
                styles={{
                  blanket: base => ({
                    ...base,
                  }),
                  dialog: base => ({
                    ...base,
                    maxWidth: '100%',
                  }),
                }}>
                <Carousel views={images}
                  currentIndex={selectedIndex}
                  styles={{

                    headerClose: base => ({
                      ...base,
                      color: '#666',
                      ':hover': { color: '#DE350B' },
                    }),
                    view: base => ({
                      ...base,
                      with: 480,
                      overflow: 'hidden',
                    }),
                  }} />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
    );
  }
}

export default ListImageGallary;
