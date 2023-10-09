import dotenv from "dotenv"
import mongoose from 'mongoose'
dotenv.config()
const connection = await mongoose.connect(String(process.env.ATLAS_URI),{
    dbName : "peoplecounter"
}).then(console.log("DB Connected !!")).catch("Db not connected :(")

console.log(connection)

export default  connection 



