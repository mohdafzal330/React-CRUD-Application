import './App.css';
import RegistrationForm from './components/registration-form/registrationForm';
import RegistrationData from './components/registration-data/registrationData';
import { useState } from 'react';

let count = 0;
function App() {
  const [data,setData] = useState([]);
  const [formObject,setFormData] = useState({id:0,name:'',email:'',dob:'',contact:'',password:'',cnfPassword:''});
  const register = (obj) => {
    const registrations = [...data];
    if(obj.id>0){
      let idx = data.findIndex((reg)=>reg.id==obj.id);
      registrations[idx] = obj;
    } else{
      obj.id = ++count;
      registrations.push(obj);
    }
    setData(registrations);   
  }
  const edit = (obj) =>{
    setFormData({...obj});
  }
  return (
    <div>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-8'>
           <h3> CRUD Application</h3>
          </div>
         <hr/>
        </div>
        <div className='row'>
          <div className='col-5'>
            <RegistrationForm formObject={formObject} register={register}/>
          </div>
          <div className='col-7'>
            <RegistrationData registrations={data} edit={edit}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
