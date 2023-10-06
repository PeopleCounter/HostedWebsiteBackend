import connection from "../db/mongodb.mjs";
import Count from "../DB_Schema/Count.mjs";

async function CreateDocument()
{
    let date = new Date()
    let date_month = String(date.getDate())+"-"+String(date.getMonth())

    let res = await Count.findOne({date:date_month})
    if(!res)
    {
        let update = Count.insertMany({date:date_month,in:0,out:0,busiest_hour:"",student:0,teacher:0,unknown:0})
    }
}

export default CreateDocument