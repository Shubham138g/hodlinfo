import Ticker from '../model/TickersModel.js';
 

export const getuser = async (req , res) => {
    try{
        const getUser = await Ticker.find({});
        res.status(201).json(getUser);
    }catch(e){
        res.status(404).json(e);
    }
} 
