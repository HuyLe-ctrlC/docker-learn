const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const db = require('./app/models/connecDB');
db();
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routes/user.route')(app);

app.listen(port, () => {
    console.log(`app run at http://127.0.0.1:${port}`);
});
