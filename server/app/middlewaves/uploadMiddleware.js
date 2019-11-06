const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/images');
  },
  filename: (req, file, callback) => {
    let filename = `${Date.now()}-${file.originalname}`;
    callback(null, filename);
  }
});

let uploadFile = multer({storage: storage});
module.exports = uploadFile;