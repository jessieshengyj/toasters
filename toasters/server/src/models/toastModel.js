const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ToastSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    toasterId: {
      type: String,
      required: [true, 'Please add a toaster'],
    },
    toasteeId: {
      type: String,
      required: [true, 'Please add a toastee'],
    },
    arcteryxProduct: {
        type: String,
        required: [true, 'Please specify an arcteryx product']
    },
    content: {
        type: String
    },
    likes: {
      type: Number
    }
  },
  { timestamps: true },
);

module.exports = mongoose.model('Toast', ToastSchema);
