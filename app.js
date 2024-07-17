import express from 'express';

import createHomepageTemplate from './views/index.js';
import createBookListTemplate from './views/bookList.js';
import BOOKS_DATA from './data/data.js';
import createBookTemplate from './views/book.js';
// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});
app.get('/books', (req, res) => {
  res.send(createBookListTemplate());
});
app.post('/books', (req, res) => {
  console.log(req.body);
  const {title, author} = req.body;
  //ajouter un livre
  const id=Math.random().toString()
  BOOKS_DATA.push({id,title,author});
  res.send(createBookTemplate({id,title,author}));
});

const port = 4000;
// listen to port
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});