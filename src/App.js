import LogoPage from './pages/LogoPage/LogoPage';
import './App.css';
import SignIn from './pages/SignIn/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import Favourite from './pages/Favourite/Favourite';
import Sell from './pages/Sell/Sell';
import Settings from './pages/Settings/Settings';
import Chat from './pages/Chat/Chat';
import Layout from './components/Layout/Layout';
import Account from './pages/Account/Account';
import Notification from './pages/Notification/Notification';
import AnimatedNavigation from './components/AnimatedNavigation/AnimatedNavigation';
import EditAccount from './pages/EditAccount/EditAccount';
import Help from './pages/Help/Help';
import AllCars from './pages/AllCars/AllCars';
import CarDetail from './pages/CarDetail/CarDetail';
import MyPosts from './pages/MyPosts/MyPosts';
import PostInfo from './pages/PostInfo/PostInfo';
import Filter from './pages/Filter/Filter';

function App() {
  return (
    <BrowserRouter>
      <AnimatedNavigation> {/* Move this outside Routes */}
        <Routes>
          <Route path="/" element={<LogoPage/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/home" element={<Layout><Home /></Layout>} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/cars" element={<AllCars />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/favourites" element={<Layout><Favourite/></Layout>} />
          <Route path="/sell" element={<Layout><Sell /></Layout>} />
          <Route path="/messages" element={<Layout><Chat /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          <Route path="/account" element={<Layout><Account /></Layout>} />
          <Route path="/edit" element={<Layout><EditAccount /></Layout>} />
          <Route path="/help" element={<Layout><Help /></Layout>} />
          <Route path="/my-posts" element={<Layout><MyPosts /></Layout>} />
          <Route path="/post-info/:id" element={<Layout><PostInfo /></Layout>} />
          <Route path="/filter" element={<Layout><Filter /></Layout>} />
        </Routes>
      </AnimatedNavigation>
    </BrowserRouter>
  );
}

export default App;