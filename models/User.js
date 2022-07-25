const { Schema, model } = require("mongoose");

const validateEmail = (email) => {
  const re = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: "You need to enter a username",
      trim: true,
      unique: true, // username must be unique
    },
    email: {
      type: String,
      required: "Email address is required",
      unique: true, // Must match a valid email address
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/,
      "Please fill a valid email address",
    ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false,
  }
);

// retrieves the length of the user's friends array field on query.
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
