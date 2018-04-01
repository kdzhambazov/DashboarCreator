const path = require("path");
let express = require('express');

let app = express();
app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.resolve(__dirname, "../")));
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.render('index.html');
});

app.listen(app.get('port'), function() {
    "use strict";
    console.log("Server listening on port: ", app.get('port'));
});
