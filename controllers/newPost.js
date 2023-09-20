module.exports = (req, res) =>{
  if(req.session.userId) {
    console.log(`Show us: ${req.session.userId}`)
    return res.render('create')
  }
  
  console.log(`Show us: ${req.session.userId}`)
  res.redirect('/auth/login')
}
