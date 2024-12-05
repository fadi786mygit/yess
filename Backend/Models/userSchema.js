const mongoose = require ("mongoose");

const userSchema = mongoose.Schema({
    name:{ type:String},
    contact:{type:Number},
    email:{type:String,required:true},
    cnic:{type:Number},
    startupName:{type:String},
    startupCategory: {type:String},
    noofteammembers:{type:Number},
    teamMembersNames:{type:String},
    instituteName:{type:String},
    departmentName:{type:String},
    reason:{type:String}
    
    }
)
module.exports = mongoose.model('users', userSchema)