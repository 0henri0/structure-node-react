const ImageGallary = ({ src, onClick }) => {
  return (
    <div className=' col-lg-4 col-md-6 col-xs-12 d-flex justify-content-center' onClick={onClick}>
      <img className ="single-gallery-image" src={ src } style = {{ width: '350px', height: '250px'}}/>
    </div>
  );
};

export default ImageGallary;