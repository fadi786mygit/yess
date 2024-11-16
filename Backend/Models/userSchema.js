const mongoose = require ("mongoose");

const userSchema = mongoose.Schema({
    name:{ type:String},
    contact:{type:String},
    email:{type:String,required:true},
    cnic:{type:String},
    startupName:{type:String},
    startupCategory: {type:String},
    noofteammembers:{type:String},
    teamMembersNames:{type:String},
    instituteName:{type:String},
    departmentName:{type:String},
    reason:{type:String}
    
    }
)
module.exports = mongoose.model('MyUser', userSchema)