import mongoose, { mongo } from "mongoose"

const hospitalHourSchema = new mongoose.Schema({
    hours:{
        type: Number,
        default: 0
    }
})

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    experienInYears:{
        type: Number,
        default: 0
    },
    worksInHospital:[{
        hospital: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        },
        hours: hospitalHourSchema
    }]
}, {timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorSchema) 