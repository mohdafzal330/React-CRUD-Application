import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';


function RegistrationForm (props) {
    let navigator = useNavigate();
    const [formObject,setFormObject] = useState(props.formObject);
    const save = (event)=>{
        event.preventDefault();
        if(formObject.password!==formObject.cnfPassword){
            alert('Password should match');return;
        }
        props.register(formObject);
        setFormObject({id:0,name:'',email:'',dob:'',contact:'',password:'',cnfPassword:''});
        setTimeout(()=>{

            navigator('/show');
        }, 1500)
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
            <h1>Discover your Earning potential</h1> <hr /> <br />
            <label htmlFor="">
                Turn your Youtube expertise into a lucrative income through resource sharing
            </label>
            <form onSubmit={save}>
                <br />
                <div className="row">
                    <div className="col-8">
                        <input required className="form-control" type="text" placeholder="Enter video url" id="name" value={formObject.name} onChange={handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-2">
                        <input type="submit" className="btn btn-primary" value="SEARCH" />
                    </div>
                    
                </div>

            </form>
        </div>
    );
}

export default RegistrationForm;