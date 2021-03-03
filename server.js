const express = require('express');
const exphbs = require("express-handlebars")
const app = express();
const PORT = process.env.PORT || 8080;

const models = require('./models');
const sequelize = require("./config/connection")
app.engine("handlebars",exphbs )
app.set("view engine", "handlebars")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('public'));


const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)



sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
