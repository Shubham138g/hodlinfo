import mongoose from "mongoose";

// const tickerSchema = new mongoose.Schema({
//     name: String,
//     last: Number,
//     buy: Number,
//     sell: Number,
//     volume: Number,
//     base_unit: String,
// });

// const Ticker = mongoose.model('Ticker', tickerSchema);

// export default Ticker;

// models/Ticker.js


const TickerSchema = new mongoose.Schema({
  symbol: String,
  base_unit: String,
  quote_unit: String,
  low: String,
  high: String,
  last: String,
  type: String,
  open: String,
  volume: String,
  sell: String,
  buy: String,
  at: Number,
  name: String
});

const Ticker = mongoose.model('Ticker', TickerSchema);

export default Ticker;
