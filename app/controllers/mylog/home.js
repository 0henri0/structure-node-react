
const postService = require('../../services/postService');

exports.index = async (req, res) => {
   try {
    let postHome = await postService.postHome(req);
      console.log(postHome);
     res.status(200).json(postHome);
   } catch (err) {
    console.log(err);
    res.status(500).json(err);
   }
}
