import db from './../models';

const userController = {};

userController.get = (req,res) => {
  res.json({
    message: 'Welcome to the API!'
  });
};

userController.post = (req, res) => {
  const {username, password} = req.body;

  //Validation

  const user = new db.User({
    username,
    password
  });

  user.save().then((newUser) => {
    res.status(200).json({
      success: true,
      date: newUser
    });
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });
}

export default userController;
