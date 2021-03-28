let Auth = require("../models/Auth")
let bcrypt = require('bcrypt')
const saltRounds = 10


exports.createNewUser = function(req,res){

    let username = req.body.username
    let password = req.body.password

    if (req.body.password) {
            bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                if (err)
                    console.log(err)
                    
                password = hash

                const user = {
                    username,
                    pass: password
                }

                const {pass,...other} = user

                const token = Auth.generateAccessToken(other)

                return res.json({
                    token
                })

            })
    }

}