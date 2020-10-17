const jwt = require('jsonwebtoken');

// ===== CHECK TOKEN

let checkToken = (request, response, next) => {
    
    let token = request.get('Authorization');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
      
        // ERROR
        if(err){
            return response.status(401).json({
                ok: false,
                error: {
                    message: 'Invalid token'
                }
            })
        }

        request.user = decoded.user;
        next();

    })
}

module.exports = {
    checkToken
}