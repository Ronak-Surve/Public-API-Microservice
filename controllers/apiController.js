const mongoose = require("mongoose");
const config = require("../config");
const axios = require("axios");

main_service_url = "http://localhost:3000";

async function getProfile(req,res)  {

    const apiKey = req.params['apiKey'];
    console.log(apiKey);

    try{
        const response = await axios.get(`${main_service_url}/api/profile`,{
            headers : {'api-key' : apiKey}
           });
        return res.send(response.data);
    }
    catch(err)  {
        return res.send("Request failed");
    }
   
}

async function getCandidates(req,res)   {

    const apiKey = req.params['apiKey'];
    console.log(apiKey);

    try{
        const response = await axios.get(`${main_service_url}/api/candidate`,{
            headers : {'api-key' : apiKey}
        });
        return res.send(response.data);
    }
    catch(err)  {
        return res.send("Request failed");
    }

}

module.exports = {getProfile, getCandidates};