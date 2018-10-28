const axios = require("axios");
const router = require("express").Router();
// API 267b354dc75a9e88aa471a923444a3db
router.get("/recipes", (req, res) => {
  axios
    .get("https://www.food2fork.com/api/search", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
