// dependencies
const express = require('express');
const express = require('express-handlebars');
const htmlRoutes = require('./routes/htmlRoutes');
const connection = require('./db');

//instantiate express
const app = express();

// allow heroku to inject port
const PORT = process.env.PORT || 8080;

// set up express to send static files
app.use(express.static('public'));

// set up express with handlebars
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// set up express to handle POST payloads
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', htmlRoutes);

app.listen(PORT, () => {
	console.log(`server listening at PORT: ${PORT}`);
});
