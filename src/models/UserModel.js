import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    validate: (age) => {
      if (age < 0) throw new Error("Invalid age");
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: (email) => {
      if (!validator.isEmail(email)) throw new Error("Invalid email");
    },
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    /**
     * 랜덤값을 생성해서 password와 함께 해싱
     */
    bcrypt.genSalt(10, (saltError, salt) => {
      if (saltError) return next(saltError);

      bcrypt.hash(user.password, salt, (hashError, hash) => {
        if (hashError) {
          return next(hashError);
        }
        user.password = hash;
        next();
      });
    });
  }
});

userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};

export const User = mongoose.model("User", userSchema);
