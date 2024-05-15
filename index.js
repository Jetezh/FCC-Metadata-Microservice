require('dotenv').config();
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get("/api/fileanalyse", (req, res) => {
  const { upfile } = req.body;
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
