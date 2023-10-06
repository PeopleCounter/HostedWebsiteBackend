import mongoose from "mongoose";

const schema = mongoose.model("Login",new mongoose.Schema({Name:String,Password:String,Email:String}))
export default schema