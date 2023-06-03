const express = require('express');
const app = express();
const PORT = 3001; 
const cors = require('cors');
const posts = require('./data');


app.use(express.json());
app.use(cors());

app.get('/api/posts', (req, res) => {
    res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
