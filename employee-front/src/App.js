import logo from './logo.svg';
import Employee from './pages/employee/employee';
import Home from './pages/home/home';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div style={{padding:"60px"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
