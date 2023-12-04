import axios from "axios";

async function getYoutubeData(text){
    return await axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBfCV4Oe4AAwQ1zoXNqiYlVHAZ3GbHU4Jw&type=video&q='+text);    
}
async function getYoutubeDataA(text){
    return await axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&key=AIzaSyBfCV4Oe4AAwQ1zoXNqiYlVHAZ3GbHU4Jw&type=video&q='+text);    
}

async function getRegistrations(){
    return await axios.get('http://localhost:3000/registrations');    
}
async function makeRegistration(reg){
    if(reg.id>0){
        return await axios.put('http://localhost:3000/registrations/'+reg.id,reg);       
    }
    return await axios.post('http://localhost:3000/registrations',reg);    
}

export {getRegistrations,makeRegistration, getYoutubeDataA};