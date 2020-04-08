// dependencies
const express = require('express');
const mysql = require('mysql');

// instantiate express router
const router = express.Router();

// connect to mysql
// let connection = mysql.createConnection({
// 	host: 'localhost',
// 	port: 3306,
// 	user: 'root',
// 	password: '',
// 	database: ''
// });
// connection.connect((err) => {
// 	if (err) throw err;
// 	console.log(`connected with ID: ${connection.threadId}`);
// });

router.get('/', (req, res) => {
	res.send('success!');
});

module.exports = router;
