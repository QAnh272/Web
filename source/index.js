const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const route = require("./routes");
const db = require("./config/db");
const overrideMethods = require("method-override");
const sortMiddleware = require("./app/middleware/sortMiddleware");


db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use(
    express.urlencoded({
        extended: true, // extended
    })
);
app.use(express.json());

app.use(overrideMethods('_method'));

// app.use(morgan('combined'))

app.use(sortMiddleware);

app.engine(
    "handlebars",
    handlebars.engine({
        helpers: require("./app/helper/handlebars")
    }),
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources", "views"));

route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
