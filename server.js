import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;
// const whitelist = ['https://lfrigodesouza.net', 'https://www.lfrigodesouza.net'];

// if (process.env.NODE_ENV === 'production') {
//   const corsOptions = {
//     origin(origin, callback) {
//       if (whitelist.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//   };
//   app.use(cors(corsOptions));
// } else {
app.use(cors());
// }

app.get('/blog/content', async (req, res) => res.send(
  await fetch('https://blog.lfrigodesouza.net/content.json')
    .then((response) => response.json())
    .then((data) => data),
));

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
