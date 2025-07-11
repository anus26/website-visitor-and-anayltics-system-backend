import mongoose from "mongoose";

const  visiterSchema=new mongoose.Schema({
    ip:String,
    browser:String,
    device:String,
    visitedAt:{
        type:Date,
        default:Date.now
    }

})
const Visiter=mongoose.model('visiter',visiterSchema)
export default Visiter