import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const whitelist = ['https://lfrigodesouza.net', 'https://www.lfrigodesouza.net'];
const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));

app.get('/blog/content', async (req, res) => res.send(
  await fetch('https://blog.lfrigodesouza.net/content.json')
    .then((response) => response.json())
    .then((data) => data),
));

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
