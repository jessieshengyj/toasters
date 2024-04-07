import logo from './logo.svg';
import './App.css';
import SidePanel from "./components/SidePanel";
import Login from './pages/login';
import SignUp from './pages/signup';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const token = localStorage.getItem('jwt');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={token ? <div className="App"><SidePanel /></div> : <Navigate to='/login' />} />
        <Route path="/login" element={<div className="App"><Login /></div>} />
        <Route path="/signup" element={<div className="App"><SignUp /></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
