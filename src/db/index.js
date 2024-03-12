import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"


const connectDB = async () => {
    try { 
        const connectionInstance = await mongoose.connect 
        (`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST:${connectionInstance.connection.host}`); 

    } catch (error) {
        console.log("MONGO conection error", error);
        process.exit(1)
    }

}
export default connectDB



/*
const app =  express() 
( async () => {
    try {
        mongoose.connect(`(${process.env.MONGODB_URL}/${DB_NAME})`)
        app.on("error",(error) => {
            console.error("Error:",error)
        throw err
        })
        
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch(error) {
        console.error("Error:",error)
        throw err
    }
})() 
*/

