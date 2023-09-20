const User = require('../models/User')

module.exports = (req, res, next) => {
  User.findById(req.session.userId)
    .then((user) => {
      console.log(`Show us: ${req.session.userId}`)
      if(!user ) return res.redirect('/')
      next()
    })
    .catch((error) => { return res.redirect('/') })
}
