import mongoose from 'mongoose';

const apiKeySchema = new mongoose.Schema({

    key:{
        type:String,
        required:true,
        unique:true,
    },
    owner:{
        type:String,
        required:true,
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    usageCount:{
        type:Number,
        default:0,
    },
    lastUsedAt:{
        type:Date,
    },
    rateLimit:{
        type:Number,
        default:100
    },
},{
    timestamps:true,
});

export default mongoose.model('apiKey',apiKeySchema);