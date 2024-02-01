const {Schema, model} = require("mongoose")
const InfoSchema = new Schema(
    {
        service:{
            type:String,
            required:true
        },
        resource:{
            type:String,
            required:true
        },
        customer:{
            type:String,
            required:true
        },
        vin:{
            type:String,
            required:true
        },
        placas:{
            type:String,
            required:true
        },
        modelo:{
            type:String,
            required:true
        },
        comments:{
            type:String,
            required:true
        }
    }
)

const InfoModel = model(
    "Info",
    InfoSchema
)

module.exports = InfoModel