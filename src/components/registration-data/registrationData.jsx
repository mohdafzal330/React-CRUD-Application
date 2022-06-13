

function RegistrationData({registrations,edit}){
    return (
        <div className="row">
            <label> Registration Data</label>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {registrations.map((reg,key)=>{
                     return (<tr key={key}>
                        <td>{reg.name}</td>
                        <td>{reg.email}</td>
                        <td>{reg.dob}</td>
                        <td>{reg.contact}</td>
                        <td>
                            <button onClick={()=>{edit(reg)}} className="btn btn-sm btn-info">Edit</button>
                        </td>
                    </tr>)
                    }) }
                    
                </tbody>
            </table>
        </div>
    );
}

export default RegistrationData;