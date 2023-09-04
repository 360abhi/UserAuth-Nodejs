const jwt = require('jsonwebtoken');

function authenticateToken(req,res,next){
    //Verify JWT token
    if (true) {
        req.user = /* Decoded user data from the token */
        next();
      } else {
        return res.status(403).json({ message: 'Invalid token' });
      }
}

module.exports = authenticateToken;