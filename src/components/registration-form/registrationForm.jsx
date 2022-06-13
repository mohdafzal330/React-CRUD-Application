import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';


function RegistrationForm (props) {
    const [formObject,setFormObject] = useState(props.formObject);
    const save = (event)=>{
        event.preventDefault();
        if(formObject.password!==formObject.cnfPassword){
            alert('Password should match');return;
        }
        props.register(formObject);
        setFormObject({id:0,name:'',email:'',dob:'',contact:'',password:'',cnfPassword:''});
    }
    const handleChange = ({target:element}) => {
       var obj = { ...formObject };
       obj[element.id] = element.value;
       setFormObject(obj);
    }
    useEffect(()=>{
        setFormObject(props.formObject);
    },[props.formObject])
    return (
        <div>
            <label>Registration From</label> <hr />
            <form onSubmit={save}>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="name">Name</label><br />
                        <input type="text" id="name" value={formObject.name} onChange={handleChange}/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="email">Email</label><br />
                        <input type="text" id="email" value={formObject.email} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="dob">Date for birth</label><br />
                        <input type="date" id="dob" value={formObject.dob} onChange={handleChange}/>
                    </div>
                    <div className="col-6 mt-2">
                        <label htmlFor="contact">Contact</label><br />
                        <input type="text" id="contact"  value={formObject.contact} onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-6">
                        <label htmlFor="password">Password</label><br />
                        <input type="password" id="password" value={formObject.password} onChange={handleChange}/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="cnfPassword">Confirm Password</label><br />
                        <input type="password" id="cnfPassword" value={formObject.cnfPassword} onChange={handleChange}/>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-12 mt-2">
                        <input type="submit" className="btn btn-primary" value="SAVE" />
                    </div>
                    
                </div>

            </form>
        </div>
    );
}

export default RegistrationForm;