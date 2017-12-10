import * as express from 'express';
import * as http from 'http';
import * as root from 'app-root-path';
import * as mongoose from 'mongoose';
import *as bodyParser from 'body-parser';
import { routes } from './router';

const mongoURL = 'mongodb://localhost/blackandwhite';
mongoose.connect(mongoURL, {useMongoClient: true});

const app = express();
app.set('views', `${root}/server/views`);
app.set('view engine', 'ejs');
app.use(bodyParser.json({type: '*/*'}));

app.use('/css', express.static('public/assets/css'));
app.use('/js', express.static('public/assets/js'));
app.use('/react', express.static('node_modules/react/umd'));
app.use('/reactDom', express.static('node_modules/react-dom/umd'));
app.use('/CMS', express.static('dist/assets'));
routes(app);

const port = process.env.port || 3000;
const server = http.createServer(app);
server.listen(port);
console.log('server is listening on port ' + port);