
import {model,Schema} from "mongoose"

const userSchema=new Schema({
    name:String,
    email:String,
    password:{type:String ,required:true},

    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
    },
})
const User = model("Users",userSchema)
export default User