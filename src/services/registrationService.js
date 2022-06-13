import axios from "axios";

async function getRegistrations(){
    return await axios.get('http://localhost:3000/registrations');    
}
async function makeRegistration(reg){
    if(reg.id>0){
        return await axios.put('http://localhost:3000/registrations/'+reg.id,reg);       
    }
    return await axios.post('http://localhost:3000/registrations',reg);    
}

export {getRegistrations,makeRegistration};