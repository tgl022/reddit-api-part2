import mongoose from 'mongoose';

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, 'Username must be a t least 5 characters']
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be a t least 8 characters']
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

//encription logic
//

const User = mongoose.model('User', userSchema);
export default User;
