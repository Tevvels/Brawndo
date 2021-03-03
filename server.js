const express = require('express');
const exphbs = require('express-handlebars');
const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');

// sets up express app
const app = express();
const PORT = process.env.PORT || 8080;

// require models for syncing
const db = require('./models');

const sequelize = require('./config/connection');
app.engine('handlebars', exphbs);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

htmlRoutes(app);
apiRoutes(app);

db.sequelize.sync().then(() => {
	app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
