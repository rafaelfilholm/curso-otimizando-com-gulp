let express = require('express');
let app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log(`Server is running in port ${port}`));