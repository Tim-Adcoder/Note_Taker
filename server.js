const express = require('express'); 
const path = require('path');
const fs = require('fs');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');


const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


// express will handle 
// hit save it will do a network request from frontend
// write something handle api/notes request
//  landing home page with a link to note page
// db.json refer to persistence class
//psot request in api/ntoes 






app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);