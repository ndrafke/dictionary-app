import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

const options = {
    method: 'GET',
    url: `https://wordsapiv1.p.rapidapi.com`,
    headers: {
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    'x-rapidapi-key': '47b41b8d27mshbe69129491e3e82p1feba9jsnc57a7f91450a'
    }
};

app.get('/words', async (req, res) => {
    try{
        console.log(req.params);
        const {word} = req.params;
        console.log(word);
        const response = await axios.request(options)
        res.json(response.data)  
    }
    catch(err){
        console.log(err)
    }
    
    res.send("Welcome to the Dictionary App Server!")
})

app.listen(PORT, () => {
    console.log("Connected to " + PORT)
});