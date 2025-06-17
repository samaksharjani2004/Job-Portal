import moongose from "mongoose";

const connectDB= async()=>{
    try {
        await moongose.connect(process.env.MONGO_URI);
        console.log('mongo DB connected successfully');
        
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;