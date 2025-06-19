import LogoPage from './pages/LogoPage/LogoPage';
import './App.css';
import SignIn from './pages/SignIn/SignIn';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogoPage/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
