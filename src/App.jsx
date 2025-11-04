import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import './App.css'
import { UserStorage } from './UserContext';
import User from './components/User/User';
import ProtectedRouter from './components/Helper/ProtectedRouter';
import Photo from './components/Photo/Photo';
import UserProfile from './components/User/UserProfile';
import NotFound from './components/NotFound';

const App = () => {
  return (
  <div className='App'>
    <HashRouter>
      <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login/*' element={<Login />} />
          <Route path='conta/*' 
                element={<ProtectedRouter><User /></ProtectedRouter>} />
          <Route path='foto/:id' element={<Photo />} />
          <Route path='perfil/:user' element={<UserProfile />} />
          <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
    </HashRouter>
  </div>)
};

export default App;
