import mongoose from 'mongoose';

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const voteSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  postId: {
    type: String,
    required: false
  },
  CommentId: {
    type: String,
    required: true
  },
  isUpvote: {
    type: Boolean,
    required: true
  }
});

//encription logic
//

const Vote = mongoose.model('Vote', voteSchema);
export default Vote;
