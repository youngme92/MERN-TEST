const express = require('express');
const app = express();
// const cors = require('cors'); 기본세팅에서 지워짐
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

// app.use(cors()); 기본세팅에서 지워짐
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.json({username: 'youngme'})
})

app.listen(port, () => {
    console.log(`express is running on ${port}`)
})