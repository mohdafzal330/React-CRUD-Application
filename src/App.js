import './App.css';
import SearchForm from './components/registration-form/registrationForm';
import RegistrationData from './components/registration-data/registrationData';
import { useState } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import {getRegistrations,makeRegistration, getYoutubeDataA} from './services/registrationService';

let count = 0;
let arr = [];

// getYoutubeData().then((response)=>{
//   data = response.data;
//   console.log(data);
// });



function App() {
  const [data,setData] = useState(arr);
  const [formObject,setFormData] = useState({id:0,name:'',email:'',dob:'',contact:'',password:'',cnfPassword:''});
  const register = (obj) => {
    getYoutubeDataA(obj.name ?? 'anchors').then((response)=>{
      let youtubeResponse = response.data;
      console.log('Data by me', youtubeResponse.items);
      setData(youtubeResponse.items)
    });
  }
  return (
    <BrowserRouter>
    <div>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-8'>
           <h3> anchors</h3>
          </div>
         <hr/>
        </div>
        <div className='row'>          
            <Routes>
              <Route path='register' element={<SearchForm formObject={formObject} register={register}/>}></Route>
              <Route path='show' element={<RegistrationData videos={data}/>}></Route>
              <Route path='*' element={<SearchForm formObject={formObject} register={register}/>}></Route>
            </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
