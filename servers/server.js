const express = require('express');
const mongoose = require("mongoose");
const app = express();
// const cors = require('cors'); 기본세팅에서 지워짐
const bodyParser = require('body-parser');
const PORT = process.env.PORT ? process.env.PORT : 3000

// mongoose setting
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/react-express",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// app.use(cors()); 기본세팅에서 지워짐
// bodyParser setting
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

// app.get('/api', (req, res) => {
//     res.json({username: 'youngme'})
// })
app.get('/', (req, res) => {
    res.status(200).json({
        message:"sopt 서버 여러분 안녕하세요~,sopt-Media에 좋아요와 댓글 부탁드립니다!!(꾸벅)",
    })
})


app.listen(PORT, process.env.IP, function(){
    console.log("connceted!!")
})