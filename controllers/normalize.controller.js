import{normalizeService} from '../services/normalize.service.js';

export async function normalizeController(req,res,next){
    try{
        const {text,profile} = req.body;
        
        const result = await normalizeService(text,profile);
        res.status(200).json(result)
    }catch(error){
         next(error);
    }
}