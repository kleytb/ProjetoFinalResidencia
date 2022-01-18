import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../src/pages/Home/Home.jsx'
import SigninScreen from '../src/pages/Signin';
import RegisterScreen from '../src/pages/Register';
import About from './pages/About/index.jsx';

import Func from './pages/Func/index.jsx';
import Teams from './pages/Teams';
import Members from './pages/Members'; 
import CreatP from './pages/CreateP/CreateP';
import Profile from './pages/Profile';
import Timeline from './components/Timeline';
import Projetos from './pages/Projects/index.js';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/teams" element={<Teams />} />;
            <Route path='/signin' element={<SigninScreen />}></Route>
            <Route path='/register' element={<RegisterScreen />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/func' element={<Func />}></Route>
            <Route path='/members' element={<Members />} />
            <Route path="/project" element={<CreatP />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/time" element={<Timeline />} />
            <Route path='projects' element={<Projetos />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
