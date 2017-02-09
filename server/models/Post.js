import mongoose from 'mongoose';

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
  },
  text: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  _creator: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  _comments: [{
    type: Schema.ObjectId,
    ref: 'Comment'
  }]
});

const autoPopulate = function(next) {
  this.populate({
    path: '_creator',
    select: 'username createdAt, -_id'
  }).populate({
    path: '_comments',
    select: '-_id -_post -__v',
    match: {'isDeleted': false}
  });
  next();
}

postSchema.pre('find', autoPopulate);

//encription logic
//

const Post = mongoose.model('Post', postSchema);
export default Post;
