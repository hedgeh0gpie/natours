const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// HOSTED DATABASE
mongoose.connect(DB).then(() => {
  console.log('DB connection successful!');
});

// LOCAL DATABASE
// mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
//   console.log('Local DB connection successful!');
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
