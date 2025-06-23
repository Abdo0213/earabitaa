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
import Account from './pages/Account/Account';
import AnimatedNavigation from './components/AnimatedNavigation/AnimatedNavigation';

function App() {
  return (
    <BrowserRouter>
      <AnimatedNavigation> {/* Move this outside Routes */}
        <Routes>
          <Route path="/" element={<LogoPage/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/home" element={<Layout><Home /></Layout>} />
          <Route path="/favorites" element={<Layout><Favorite/></Layout>} />
          <Route path="/sell" element={<Layout><Sell /></Layout>} />
          <Route path="/messages" element={<Layout><Chat /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          <Route path="/account" element={<Layout><Account /></Layout>} />
        </Routes>
      </AnimatedNavigation>
    </BrowserRouter>
  );
}

export default App;