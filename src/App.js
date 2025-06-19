import LogoPage from './pages/LogoPage/LogoPage';
import './App.css';
import SignIn from './pages/SignIn/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import Favorite from './pages/Favorite/Favorite';
import Sell from './pages/Sell/Sell';
import Settings from './pages/Settings/Settings';
import Chat from './pages/Chat/Chat';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogoPage/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/home" element={<Layout><Home /></Layout>} />
          <Route path="/favorites" element={<Layout><Favorite/></Layout>} />
          <Route path="/sell" element={<Layout><Sell /></Layout>} />
          <Route path="/messages" element={<Layout><Chat /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
