import React,{useState} from "react";
import Createlist from "./Creatlist";

function Createform()
{
    const [name,setname]=useState('');
    const [designation,setdesig]=useState('');
    const [users, setUsers] = useState([]); 
    function changename(e)
    {
        setname(e.target.value);
    }
    function changedesig(e)
    {
        setdesig(e.target.value);
    }
    function adduser(e)
    {
        e.preventDefault();
        if(name.trim()!='' || designation.trim()!='')
        setUsers((users)=>[...users,{name, designation}]);
        setname('');
        setdesig('');
        console.log(users);
    }
    console.log(users)
    return (
    <>
    <form className="form">
     <div className="form__group field">
    <input type="input" className="form__field" placeholder="Name" required="" onChange={changename}/>
    <label htmlFor="name" className="form__label">Name</label>
    </div>
     <div className="form__group field">
    <input type="input" className="form__field" placeholder="Designation" required="" onChange={changedesig}/>
    <label htmlFor="Designation" className="form__label">Designation</label>
    </div>
    <button className="btn" onClick={adduser}>submit</button>
    </form>
    <hr />
    <Createlist users={users} />
    </>
    )
}
export default Createform;