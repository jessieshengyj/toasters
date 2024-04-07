const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    firstName: {
      type: String,
      required: [true, 'Please add a toaster']
    },
    lastName: {
      type: String,
      required: [true, 'Please add a toastee'],
    },
    occupation: {
        type: String
    },
    company: {
        type: String
    },
    username: {
        type: String,
        required: [true, 'Username is required']

    },
    password: {
        type: String,
        required: [true, 'Username is required']
    },
    phone: {
      type: String,
      required: true
    }
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);