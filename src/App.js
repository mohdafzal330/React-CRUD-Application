import './App.css';
import RegistrationForm from './components/registration-form/registrationForm';
import RegistrationData from './components/registration-data/registrationData';
import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import {getRegistrations,makeRegistration} from './services/registrationService';

let count = 0;
let arr = [];
getRegistrations().then((response)=>{
  console.log(response);
  arr = response.data;
});
function App() {
  const [data,setData] = useState(arr);
  const [formObject,setFormData] = useState({id:0,name:'',email:'',dob:'',contact:'',password:'',cnfPassword:''});
  const register = (obj) => {
    const registrations = [...data];
    if(obj.id>0){
      let idx = data.findIndex((reg)=>reg.id===obj.id);
      registrations[idx] = obj;
    } else{
      obj.id = ++count;
      registrations.push(obj);
    }
    setData(registrations);   
    makeRegistration(obj);
  }
  const edit = (obj) =>{
    setFormData({...obj});
  }
  return (
    <BrowserRouter>
    <div>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-8'>
           <h3> CRUD Application</h3>
           <Link to='/register'>Registrations</Link>
           <Link to='/show' className='m-4'>Show all registrations</Link>
          </div>
         <hr/>
        </div>
        <div className='row'>          
            <Routes>
              <Route path='register' element={<RegistrationForm formObject={formObject} register={register}/>}></Route>
              <Route path='show' element={<RegistrationData registrations={data} edit={edit}/>}></Route>
              <Route path='*' element={<RegistrationForm formObject={formObject} register={register}/>}></Route>
            </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
