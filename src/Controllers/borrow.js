const borrowModel = require("../Models/borrow.js");

module.exports = {
  postBorrow: (req, res) => {
    const body = {
      ...req.body,
      rent_at: new Date(),
      return_at: new Date()
    };

    borrowModel
      .postBorrow(body)
      .then(response => res.json(response))
      .catch(error => console.log(error));
  }
};