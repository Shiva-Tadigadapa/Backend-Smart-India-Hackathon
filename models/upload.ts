import mongoose, { Schema } from "mongoose";

const uploadSchema = new Schema(
  {
    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: "users",`
    // },
    fullName: {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
      required: true,
    },
    DOB: {
      type: String,
      required: true,
    },
    PhNo: {
      type: String,
      required: true,
    },
    issueDate: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    Caption: {
      type: String,
      required: true,
    },
    State: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Upload = mongoose.model("user", uploadSchema);

export default Upload;
