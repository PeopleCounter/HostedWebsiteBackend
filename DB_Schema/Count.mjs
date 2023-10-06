import mongoose from "mongoose";
export default mongoose.model('Count',new mongoose.Schema({
    date:String,
    in:Number,
    out:Number,
    busiest_hour:String,
    student:Number,
    teacher:Number,
    unknown:Number
}))