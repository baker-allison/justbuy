
const User = require('../models/User.js')
    
// exports.getUser = async (req, res) => {
//   console.log('current user: ', req.user);
//   if (req.user) {
//     res.json({ user: req.user });
//   } else {
//     res.json({ user: null });z
//   };
// }



exports.checkAlreadyRegistered = async (req, res, next) => {
  const { username } = req.body;
  const registered = await User.find({ username });
  if (registered[0] && registered[0]._id) {
    res.json({ error: `Sorry, already a user with the username: ${username}` });
    return;
  }
  next();
}
