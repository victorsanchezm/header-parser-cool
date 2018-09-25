var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function (req, res) {
  const sepSemi = /\s*;\s*/;
  const sepComa = /\s*,\s*/;
  
  let dataObject = {
    ip: req.headers['x-forwarded-for'].split(sepComa)[0],
    language: req.headers["accept-language"].split(sepSemi)[0],
    software: req.headers["user-agent"],
  };
  res.send(dataObject);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
