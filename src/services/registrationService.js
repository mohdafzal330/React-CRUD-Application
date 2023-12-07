import axios from "axios";

async function getYoutubeData(text){
    let d = await axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBfCV4Oe4AAwQ1zoXNqiYlVHAZ3GbHU4Jw&type=video&q='+text);    
    let ids = '';
    d.data.items.map((video,i)=>{
        ids += video.id.videoId + ((i==d.data.items.length-1) ? '' : ',');
        console.log(ids);
    })
    return axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&key=AIzaSyBfCV4Oe4AAwQ1zoXNqiYlVHAZ3GbHU4Jw&id='+ids);
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

export {getRegistrations,makeRegistration, getYoutubeData};