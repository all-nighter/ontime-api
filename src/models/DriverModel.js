import mongoose from "mongoose";
// import validator from "validator";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const driverSchema = new Schema({
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

driverSchema.pre("save", function (next) {
  const driver = this;

  if (this.isModified("password") || this.isNew) {
    /**
     * 랜덤값을 생성해서 password와 함께 해싱
     */
    bcrypt.genSalt(10, (saltError, salt) => {
      if (saltError) return next(saltError);

      bcrypt.hash(driver.password, salt, (hashError, hash) => {
        if (hashError) {
          return next(hashError);
        }
        driver.password = hash;
        next();
      });
    });
  }
});

driverSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};

driverSchema.statics.verify = async function (email, password) {
  const driver = await this.findOne({ email });
  const isVerified = bcrypt.compareSync(password, driver.password);
  return isVerified;
};

export const Driver = mongoose.model("Driver", driverSchema);
