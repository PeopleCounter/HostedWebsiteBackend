import dotenv from "dotenv"
import mongoose from 'mongoose'
dotenv.config()
const connection = mongoose.connect(String(process.env.ATLAS_URI),{
    dbName : "peoplecounter"

}).then(console.log("DB Connected !!")).catch("Db not connected :(")

export default  connection 



