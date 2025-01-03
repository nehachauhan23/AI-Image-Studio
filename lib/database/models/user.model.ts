import { model, models, Schema } from "mongoose"


const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    unique: true
  },
  photo: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true,
    unique: true
  },
  lastName: {
    type: String,
    required: true,
    unique: true
  },
  planId: {
    type: String,
    // required: true
  },
  creditBalance: {
    type: Number,
    default: 10
  }
})

const User = models?.User || model('User', UserSchema);

export default User;
