import mongoose from 'mongoose';

const normalizationLogSchema = new mongoose.Schema({

    originalText:{
    type:String,
    required:true,
    maxLength:5000,
    },
    normalizedText:{
        type:String,
        required:true,
        maxLength:5000,
    },
    profile:{
        type:String,
        enum:['default','chatMessage','address'],
        default:'default',
    },
    rulesApplied:{
        type:[String],

    },
    clientId:{
        type:String,
    },
    
},{
    timestamps:true,
});

export default mongoose.model('NormalizationLog',normalizationLogSchema)