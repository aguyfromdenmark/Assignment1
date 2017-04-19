const express = require('express');

const router = new express.Router();

router.get('/details', (req, res) => {
  res.status(200).json({
    message: "Hello from server API! I just copy pasted an example to make it work, I don't really know why it works, but fuck that :D"
  });
});


module.exports = router;