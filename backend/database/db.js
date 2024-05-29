import mongoose from "mongoose";
import Ticker from "../model/TickersModel.js";

const Connection = async () => {
    const URL = process.env.URL;
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("database connected successfully");
    } catch (error) {
        console.log("error while running database", +error);
    }
}
export default Connection;