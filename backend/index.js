import express from 'express'
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import cors from 'cors';
import Routes from './routes/Route.js';
import axios from 'axios';
import Ticker from './model/TickersModel.js';

const app=express();
dotenv.config(); 
const PORT=process.env.PORT;

Connection(); //calling database connection function from db.js

//middelweres
app.use('/', Routes);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const fetchData=async()=>{
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const data = response.data;
        const firstTenItems = Object.entries(data).slice(0, 10).map(([key, value]) => ({
          symbol: key,
          base_unit: value.base_unit,
          quote_unit: value.quote_unit,
          low: value.low,
          high: value.high,
          last: value.last,
          type: value.type,
          open: value.open,
          volume: value.volume,
          sell: value.sell,
          buy: value.buy,
          at: value.at,
          name: value.name
        }));
        
        // Clear existing data
        await Ticker.deleteMany({});
    
        // Save to MongoDB
        await Ticker.insertMany(firstTenItems);
    
        
      } catch (error) {
        console.error(`error while fetcing data`);
        
      }
}


setInterval(fetchData, 10000);
//fetch the data from the api
fetchData();


//fetch top ten data from the Ticker collection
app.get('/top10', async (req, res) => {
    try {
        const top10Tickers = await Ticker.find().sort({ volume: -1 }).limit(10);
        res.json(top10Tickers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});


//for run the server
app.listen(PORT,(err)=>{
    if(err){
        console.log("error in server",+err);
    }
    else{
        console.log(`server is running on port no.${PORT}`);
    }
})