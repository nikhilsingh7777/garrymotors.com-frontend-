const axios=require('axios');
require("dotenv").config();
const newRequest=axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_URL|| 'https://garrymotorsllc.onrender.com/api/car',
    withCredentials:true,
});
module.exports=newRequest;