import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role ,setRole] =useState('Software engineer');
  return (
    <div className="App">

      <input type='text' onChange={(e) =>setRole(e.target.value)}/>
        <div className='flex flex-wrap justify-center'>
        <p>
        <Employee name ="Joshua" role ={role} img="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </p>
        <p>
        <Employee name ="Joshua" role ={role} img="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </p>
        <p>
        <Employee name ="Joshua" role ={role} img="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </p>
        <p>
        <Employee name ="Joshua" role ={role} img="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </p>
        <p>
        <Employee name ="Joshua" role ={role} img="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </p>
        <p>
        <Employee name ="Joshua" role ={role} img="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </p>
        <p>
        <Employee name ="Joshua" role ={role} img="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </p>
        </div>
      
    </div>
  );
}

export default App;
