const multer = require('multer');
const diskStorage = {
  dest: 'public/uploads/images',
  filename: (req, file, callback) => {
    let filename = `${Date.now()}-${file.originalname}`;
    callback(null, filename);
  }
};

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  }
});

let uploadFile = multer({storage: diskStorage});
module.exports = uploadFile;