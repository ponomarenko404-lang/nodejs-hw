import {model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, trim: true },
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true, min: (8) },
   avatar: {
       type: String,
      required: false,
      default: "https://ac.goit.global/fullstack/react/default-avatar.jpg",
},
  },

  {timestamps:true},
);

userSchema.methods.toJSON = function () {
  const object = this.toObject();
  delete object.password;
  return object;
};

userSchema.pre('save', function (next) {
  if (!this.username) {
    this.username = this.email;
  }

  next();
});

export const User = model('User', userSchema);

