const express = require('express');
const hbs = require('hbs');
const PORT = process.env.PORT || 3000;

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/users', (req, res, next) => {
  const users = [
    {
      name: 'Carlos',
      email: 'carlos@example.org',
      age: 28,
      isAdmin: true
    },
    {
      name: 'María',
      email: 'maria@example.org',
      age: 30,
      isAdmin: false
    }
  ];

  res.render('users', {
    users: users
  });
})

app.listen(PORT, () => {
  console.info(`App listen at ${PORT} port`);
});