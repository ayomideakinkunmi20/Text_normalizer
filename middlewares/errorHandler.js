export function errorHandler(err,req,res,next){
    console.error(err.stack);

    const statusCode = err.statusCode ||500;
    const message = err.message ||'something went wrong';

    res.status(statusCode).json({error:message});
}