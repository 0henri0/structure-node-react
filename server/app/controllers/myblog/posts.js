
const Post = require('../../models/post');
const { getDomain } = require('../../support/helpers');
const postService = require('../../services/myblog/postService');
const logError = require('../../logger/logError');
const mongoose = require('mongoose');

exports.detail = async function (req, res) {
  try {
    const post = await Post.findById(req.params.id);
    post.image_title = getDomain(req) + post.image_title;

    return res.status(200).json(post);
  } catch (err) {
    //write Log error
    logError.error(err);

    return res.status(500).json(err);
  }
};

exports.lastestPosts = async function(req, res) {
  try {
    const posts = await postService.getListPost(req);

    return res.status(200).json(posts);
  } catch (err) {
    //write Log error
    logError.error(err);

    return res.status(500).json(err);
  }
}

exports.popularPosts = async function(req, res) {
  try {
    const posts = await postService.getListPopularPost(req);

    return res.status(200).json(posts);
  } catch (err) {
    //write Log error
    logError.error(err);

    return res.status(500).json(err);
  }
}

exports.getComment = async function(req, res) {
  try {
    const comments  = await Post.aggregate([ 
      { $match : { _id : mongoose.Types.ObjectId(req.params.idPost) } } ,
      { $unwind: '$comments' },
      { $lookup : {
        from : 'users',
        localField: 'comments.userId',
        foreignField: '_id',
        as: 'users'
      }},
      { '$group': {
        '_id': '$_id',
        'comments': { '$push': '$$ROOT'},
      }},
      { $project : { 'comments.comments.body' : 1,'comments.comments.createdAt' : 1, 'comments.users._id' : 1 , 'comments.users.username' : 1, 'comments.users.avatar' : 1 } }
    ]);
    let data = {};
    let result = [];
   
    comments[0]['comments'].map(comment => {
      data.content = comment.comments.body;
      data.avatar = comment.users[0].avatar;
      data.datetime = comment.comments.createdAt;
      data.author = comment.users[0].username;
      result.push({...data});
    });
    
    return res.status(200).json(result);
  } catch (err) {
    //write Log error
    logError.error(err);

    return res.status(500).json(err);
  }
}

exports.postComment = async function(req, res) {
  try {
    let comment = {
      userId: req.body.userId,
      body: req.body.body
    };
    console.log(comment);
    let post = await Post.findById(req.params.idPost);
    post.comments.push({...comment});
    post.save();

    return res.status(200).json(post.comments);
  } catch (err) {
    //write Log error
    logError.error(err);

    return res.status(500).json(err);
  };
}

exports.postRate = async function(req, res) {
  try {

    let rate = {
      userId: req.signedCookies.userInfo._id,
      rate: req.body.rate
    };

    let post = await Post.findById(req.params.idPost);
    post.rates.push({...rate});
    post.save();

    return res.status(200).json(post.rates);
  } catch (err) {
    //write Log error
    logError.error(err);

    return res.status(500).json(err);
  }
}

exports.search = async function(req, res) {
  try {
    let posts = await Post.find({'title' : new RegExp(req.query.key, 'i')});

    return res.status(200).json(posts);
     
  } catch (error) {
    //write Log error
    logError.error(error);

    return res.status(500).json(error);
  }
}

exports.getPostByCategory = async function(req, res) {
  try {
    let posts = await Post.find({ category: { '_id' : req.params.id } });

    return res.status(200).json(posts);
     
  } catch (error) {
    //write Log error
    logError.error(error);

    return res.status(500).json(error);
  }
}

exports.getPostByTag = async function(req, res) {
  try {
    let posts = await Post.find({ tags: { '_id' : req.params.id } });

    return res.status(200).json(posts);
     
  } catch (error) {
    //write Log error
    logError.error(error);

    return res.status(500).json(error);
  }
}