import db from './../models';

const postController = {};

postController.get = (req,res) => {
  res.json({
    message: 'Welcome to the API!'
  });
};

postController.post = (req,res) => {
  const {
    title,
    text,
    link,
    userId // get from encrypted json web token
  } = req.body;

  const post = db.Post({
    title,
    text,
    link,
    _creator: userId
  });

  post.save().then((newPost) => {
    return res.status(200).json({
      success: true,
      data: newPost
    });
  }).catch((err) => {
    return res.status(500).json({
      message: err
    });
  });
};

postController.getAll = (req, res) => {
  db.Post.find({}).then((posts) => {
    return res.status(200).json({
      success: true,
      data: posts
    });
  }).catch((err) => {
    return res.status(500).json({
      message: err
    });
  });
};

export default postController;
