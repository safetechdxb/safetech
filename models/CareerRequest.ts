import mongoose from "mongoose";
import { _email } from "zod/v4/core";

const careerRequestSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    nationality:{
        type:String,
        required:true
    },
    currentLocation:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    coverLetter:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    }
    
})


export default mongoose.models.CareerRequest || mongoose.model("CareerRequest", careerRequestSchema);