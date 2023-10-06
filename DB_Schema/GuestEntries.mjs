import mongoose from "mongoose";

export default mongoose.model('guestdata',new mongoose.Schema({
    name:String,
    number:Number
}))