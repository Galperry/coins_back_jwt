const jwt = require('jsonwebtoken')


exports.generateAccessToken = function (userData){
    return jwt.sign(userData, process.env.TOKEN_SECRET, { expiresIn: '2d' })
}
