// 先安装依赖的express，opn包
var express = require('express');
var app = express(); 
var opn = require('opn'); 

app.listen(3000, function () { 
  opn('http://localhost:3000/api-doc');
  console.log('App listening on port 3000!');
});

app.use('/api-doc', express.static('public'));