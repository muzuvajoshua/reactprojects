import './App.css';
import Employees from './pages/Employees';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
 return (
  <>
  <Header>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Employees />}/>
    </Routes>
    </BrowserRouter>
  </Header>
  </>
  );
}

export default App;
