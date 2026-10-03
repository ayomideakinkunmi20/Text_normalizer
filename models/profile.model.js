import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    rules:{
        type:[String],
        required:true,
    },
    isDefault:{
        type:Boolean,
        default:false,
    },
},{
    timestamps:true,
});

export default mongoose.model('profile',profileSchema);