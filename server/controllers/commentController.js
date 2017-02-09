import db from './../models';

const commentController = {};

commentController.get = (req,res) => {
  res.json({
    message: 'Welcome to the API!'
  });
};

commentController.post = (req,res) => {
  const {
    text,
    userId, // get from encrypted json web token
    postId
  } = req.body;

  const comment = db.Comment({
    text,
    _creator: userId,
    _post: postId
  });

  comment.save().then((newComment) => {
    db.Post.findByIdAndUpdate(
        postId,
        { $push: {'_comments': newComment._id} }
      ).then((existingPost) => {
        return res.status(200).json({
          success: true,
          data: newComment,
          existingPost
        });
      }).catch((err) => {
        return res.status(500).json({
          message: err
        });
    }).catch((err) => {
      return res.status(500).json({
      message: err
      });
    });
  });
};

commentController.getAll = (req, res) => {
  db.Comment.find({}).then((comments) => {
    return res.status(200).json({
      success: true,
      data: comments
    });
  }).catch((err) => {
    return res.status(500).json({
      message: err
    });
  });
};

export default commentController;
