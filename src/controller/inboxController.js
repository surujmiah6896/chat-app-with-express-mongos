// get inbox page
function getInbox(req, res, next) {
  res.render("user/inbox");
}

module.exports = {
  getInbox,
};
