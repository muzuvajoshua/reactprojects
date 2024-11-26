import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role ,setRole] =useState('Software engineer');
  const [employees, setEmployee] = useState([
    {
      name:"Joshua",
      role:"Software Engineer",
      img:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      name:"Joshua",
      role:"Software Engineer",
      img:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
    },
    {
      name:"Joshua",
      role:"Software Engineer",
      img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg"
    },
    {
      name:"Joshua",
      role:"Software Engineer",
      img:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    },
    {
      name:"Joshua",
      role:"Software Engineer",
      img:"https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg"
    },
    {
      name:"Joshua",
      role:"Software Engineer",
      img:"https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg"
    }
  ]);
  return (
    <div className="App">

      <input type='text' onChange={(e) =>setRole(e.target.value)}/>
        <div className='flex flex-wrap justify-center'>
        {employees.map((employee)=> {
          return (<Employee
          key ={uuidv4()}
          name ={employee.name}
          role={employee.role}
          img={employee.img}
          />
          );

        })}
        </div>
      
    </div>
  );
}

export default App;
