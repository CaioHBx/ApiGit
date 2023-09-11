const express = require('express');
const routes  = require('./routes');
const cors    = require('cors');

require('./database');

const app  = express();
const port = process.env.PORT || 4005 || 3306;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.info(`Server started on port ${port}`);
});
