import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import path from 'path';

const app = express();
//mongoose connection

mongoose.connect('mongodb://localhost/crmdb', { useMongoClient: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//serving static file
app.use(express.static('public'));

routes(app);
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Testing');
});

app.listen(PORT, () => {
  `Serving Running at Port ${PORT}`;
});
