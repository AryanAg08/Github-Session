import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from './Events'

function App() {

  const [members, setMembers] = useState(() => {
    const savedMembers = localStorage.getItem('members');
    return savedMembers ? JSON.parse(savedMembers) : [];
  });
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");


  function deleteMember(index) {
    const updateMembers = members.filter((_, i) => i !== index)
    setMembers(updateMembers);
  }

  const addMember = (e) => {
    e.preventDefault();
    const newMember = {
      name: name,
      designation: designation
    };
    setMembers([...members, newMember])
    setName('');
    setDesignation('');
  }
  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members))
  }, [members])

  return (
    <>
      <input type="text" placeholder='Member Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder='Designation' value={designation} onChange={(e) => setDesignation(e.target.value)} />
      <button onClick={addMember}>Add</button>

      <ul>
        {members.map((member, index) => (
          <li key={index} onDoubleClick={() => deleteMember(index)}>
            {member.name} - {member.designation}
          </li>
        ))}
      </ul>

      <h2>Upcoming Events</h2>
      <Events />
    </>
  )
}

export default App
