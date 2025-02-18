const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ToastSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    toasterId: {
      type: String,
      required: [true, "Please add a toaster"],
    },
    toasteeId: {
      type: String,
      default: "",
    },
    arcteryxProduct: {
      type: String,
    },
    arcteryxStore: {
      type: String,
    },
    content: {
      type: String,
    },
    likes: {
      type: [String],
      default: [],
    },
    viewed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Toast", ToastSchema);
