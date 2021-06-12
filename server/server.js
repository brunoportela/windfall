const express = require('express');
const app = express();
const cors = require('cors');
const api = require('./routes/api');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initial Page Request
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.use(express.static("client"));

app.use('/api', api);

// error handler
const defaultErr = {
  log: 'Express error handler caught unknown middleware error',
  status: 400,
  message: { err: 'An error occurred' },
};

app.use((req, res, next) => {
  res.status(404).send('Nothing to see here.');
});

// global error handler
app.use((err, req, res, next) => {
  const errorObj = Object.assign(defaultErr, err);
  res.status(errorObj.status).json(errorObj.message);
});

// listen to port 3000
app.listen(3000, () => console.log('Server Running'));