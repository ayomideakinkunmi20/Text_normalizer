import joi from 'joi';

const normalizeSchema = joi.object({
    text:joi.string().min(1).max(5000).required(),
    profile:joi.string().valid('default','chatMessage','address').optional(),
});
export function validateNormalizeRequest(req,res,next){
    const{error} = normalizeSchema.validate(req.body);

    if(error){
        return res.status(400).json({error:error.details[0].message});
    }

    next();
}