const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
   const bearerHeader = req.headers['authorization']
   if(typeof bearerHeader !== 'undefined'){
       const bearerToken = bearerHeader.split(' ')[1];
       req.token = bearerToken;
       next()
   }else{
        res.send('Invalid or inexistent token, please register to generate your authorization token')
   }
}