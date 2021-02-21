const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'dist');

app.use(express.static('public'));
app.use(express.(json))



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})