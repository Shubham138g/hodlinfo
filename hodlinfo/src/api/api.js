import axios from 'axios';

const URL = "http://localhost:8000";


export const getUser = async () => {
    try{
    return await axios.get(`${URL}/top10`) ;
    }catch(e){
      console.log("erroe in axios----"+e);
    }
}
