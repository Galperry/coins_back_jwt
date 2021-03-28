const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SECRET
}

// const strategy = new JwtStrategy(options, function(err, userData){
//     if(err){
//         console.log(err)
//         return res.status(403).send({message: 'bad token, not allowed'})
//     }
//         req.user = userData
//         next()
//     }
// )

module.exports = (passport) => {
    passport.use(strategy)
}
