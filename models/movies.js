const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema(
  {
    name: {
      //required
      type: String,
      required: [true, "Please provide the movie name"],
      maxlength: 50,
    },
    description: {
      type: String,
      maxlength: 60,
    },
    status: {
      type: String,
      enum: ["pending", "watched"],
      default: "pending",
    },
    createdBy: {
      //required
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MoviesSchema);
