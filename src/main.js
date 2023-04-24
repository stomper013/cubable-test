const express = require('express');
const bodyParser = require('body-parser');

const { 
  env: { port },
} = require('./configs')

const BoardRoute = require('./routes/board.route');
const UserRoute = require('./routes/user.route');
const ColumRoute = require('./routes/colum.route');
const RowRoute = require('./routes/row.route');
const FieldRoute = require('./routes/fieldItem.route');

const app = express();
app.use(bodyParser.json());

app.post('/ping', (req, res) => res.end("pong!"))

app.use('/user', UserRoute)
app.use('/board', BoardRoute)
app.use('/colum', ColumRoute)
app.use('/row', RowRoute)
app.use('/fieldItem', FieldRoute)

app.listen(port, () => console.log(`Server listening on port ${port}`));