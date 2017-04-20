const express = require('express');

const router = new express.Router();

router.get('/details', (req, res) => {
  res.status(200).json({
    message: 
    [
      { "id": "001", "name": "Simon", "rank": "9001" },
      { "id": "002", "name": "Andreas", "rank": "42" },
      { "id": "003", "name": "Rasmus", "rank": "how do you connect to the database?" }
    ]
  });
});


module.exports = router;