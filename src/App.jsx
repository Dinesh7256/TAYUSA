import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import Feed from './Components/Feed/Feed';
import Cards from './Components/Cards/Cards';
import PlayVideo from './Components/PlayVideo/PlayVideo';
import Login from './Pages/login/Login';
import Shorts from './Components/Shorts/Shorts';
import Saved from './Components/Saved/Saved';
import YourAccount from './Components/YourAccount/YourAccount';
import Content1 from './Components/Content/Content1';

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/home' element={<Feed />} />
          <Route path='home/video/20/4521' element={<PlayVideo />} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/shorts' element={<Shorts />} />
          <Route path='/content' element={<Content1 />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/Your Account' element={<YourAccount />} />
        
          
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
