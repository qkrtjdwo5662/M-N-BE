const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const cookie = require('cookie-parser');
const session = require('express-session');
// const helmet = require('helmet');

// const http = require('http');

const app = express();

// const server = http.createServer(app);
// const io = require('socket.io')(server, { cors: { origin: '*' } });

// io.on('connection', (socket) => {
//   // front -> back
//   socket.on('send message', (front_message) => {
//     console.log(front_message);
//     //back -> front
//     const msg = 'state 변경 감지';
//     io.emit('receive message', msg);
//   });
//   socket.on('disconnect', function () {
//     console.log('user disconnected: ', socket.id);
//   });
// });
const passportConfig = require('./passport');
// passportConfig(app);

const { PORT } = process.env;
app.set('view engine', 'ejs');
// app.use(helmet());
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(cookie());
// app.use(
//   session({
//     secret: 'secret',
//   }),
// );
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//라우터
const homeRouter = require('./routes/home');

const tokenRouter = require('./routes/token');

const userRouter = require('./routes/userRouter');

app.use('/', homeRouter);
app.use('/user', userRouter);
app.use('/token', tokenRouter);

const workspaceRouter = require('./routes/workspace');

app.use('/', homeRouter);
app.use('/workspace', workspaceRouter);

app.listen(PORT, () => {
  console.log(`포트번호 ${PORT}번 실행`);
});
