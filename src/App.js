import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';
// import {v4 as uuidv4} from 'uuid';

function App() {
  const [role ,setRole] =useState('Software engineer');
  const [employees, setEmployee] = useState([
    {
      id:1,
      name:"Joshua",
      role:"Software Engineer",
      img:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      id:2,
      name:"Joshua",
      role:"Software Engineer",
      img:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
    },
    {
      id:3,
      name:"Joshua",
      role:"Software Engineer",
      img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg"
    },
    {
      id:4,
      name:"Joshua",
      role:"Software Engineer",
      img:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    },
    {
      id:5,
      name:"Joshua",
      role:"Software Engineer",
      img:"https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg"
    },
    {
      id:6,
      name:"Joshua",
      role:"Software Engineer",
      img:"https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg"
    }
  ]);

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) =>{
      if(id === employee.id){
        return{...employee, name:newName, role:newRole}

      }
      return employee;

    });
    setEmployee(updatedEmployees)
   
  }
  return (
    <div className="App">

      <input type='text' onChange={(e) =>setRole(e.target.value)}/>
        <div className='flex flex-wrap justify-center'>
        {employees.map((employee)=> {
          return (<Employee
          key ={employee.id}
          id={employee.id}
          name ={employee.name}
          role={employee.role}
          img={employee.img}
          updateEmployee={updateEmployee}
          />
          );

        })}
        </div>
      
    </div>
  );
}

export default App;
