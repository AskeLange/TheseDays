

// Fields
const express = require('express');
const server = express();
const port = 3000;

// Site
server.use(express.static(
  'app'
));

// Listens, def. port; 3000.
server.listen( port, () => {
  console.log ( `Server listening on port: ${port}.` )
});