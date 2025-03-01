const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const sequelize = require('./config/database');
const Course = require('./models/Course');

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});