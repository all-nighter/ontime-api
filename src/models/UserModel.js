import mongoose from "mongoose";
// import validator from "validator";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    // validate: (email) => {
    //   if (!validator.isEmail(email)) throw new Error("Invalid email");
    // },
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: true,
    // validate: (phoneNumber) => {
    //   if (!phoneNumber.match(/^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/))
    //     throw new Error("Invalid PhoneNumber");
    // },
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

userSchema.statics.findByEmail = async function (email) {
  const user = await this.findOne({ email });
  return user;
};

userSchema.statics.verify = async function (email, password) {
  const user = await this.findOne({ email });
  const isVerified = bcrypt.compareSync(password, user.password);
  return isVerified;
};

export const User = mongoose.model("User", userSchema);
