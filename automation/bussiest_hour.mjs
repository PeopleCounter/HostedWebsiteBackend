import Count from "../DB_Schema/Count.mjs"

function calculate_busiest_hour(){

    let date = new Date()
    let date_month = String(date.getDate())+"-"+String(date.getMonth())

    
    let initial_entry = 0
    let initial_exit = 0

    let busiest_in = 0
    let busiest_out = 0

    let busiest_hour = null
    let update = null

    setInterval(
        async()=>{

            let res = await(Count.findOne({date:date_month}))
            let cur_in = res.in
            let cur_out = res.out

            let flow_in = cur_in - initial_entry
            let flow_out = cur_out - initial_exit
            
            if(flow_in > busiest_in || flow_out > busiest_out){

                busiest_in = flow_in
                busiest_out = flow_out
                let date2 = new Date()
                busiest_hour = date2.getHours()
                update = await Count.updateOne({date:{$eq:date_month}},{busiest_hour:String(busiest_hour)})
                
            }

            initial_entry = cur_in
            initial_exit = cur_out

        },1000*3600
    )
}

export default calculate_busiest_hour