const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) =>{
  const { username, password } = req.body;
  console.log(req.body)
  req.session.message = [];
  User.findOne({ username: username })
    .then((user) => {
      if(user) {
               console.log(req.session.message)
        bcrypt.compare(password, user.password, (error, same) => {
          if(same) {
            req.session.userId = user._id
            res.redirect('/')
          }
          else {
          	if(password === "") req.session.message[1] = "Provide password"
          	else { req.session.message[1] = "Password incorrect"
          	}
            res.redirect('/auth/login')
          }
        })
      }
      else {
      if (username ==="" && password ==="") {
          		req.session.message = ["Provide username" , "Provide password"]
          		}
      	else if (username ==="") req.session.message[0] = "Provide username"
        else req.session.message[0] = "Username incorrect"

        res.redirect('/auth/login')
      }

    })
}

