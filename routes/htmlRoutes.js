// dependencies
const express = require('express');

// instantiate express router
const router = express.Router();

router.get('/', (req, res) => {
	res.send('success!');
});

module.exports = router;
