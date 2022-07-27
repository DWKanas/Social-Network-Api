const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thoughts');

const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      email:{
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please put a vaild email address",],
      },
      thoughts: [thoughtSchema],
      friends: [userSchema],
    },
    {
        toJSON: {
           virtuals: true,
        },
    }
);

userSchema.virtual("friends").get(function (){
 return this.friends.length;
});

const User = model('user', userSchema);

module.export = User;