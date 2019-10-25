import React from 'react';
import { Router } from "@reach/router"

import { Login } from './Views/Login'
import { SignUp } from './Views/Signup';
import { Verification } from './Views/Verfication';
import { Home } from './Views/Home';
import { CreateFCG } from './Views/CreateFCG';
import { FCGs } from './Views/FCGs';
import { CreateFC } from './Views/CreateFC';
import { FCs } from './Views/FCs';


const App = () =>
  <Router>
    <Login path='/' />
    <Login path='login' />
    <SignUp path='signup' />
    <Verification path='verification' />
    <Home path='home' />
    <CreateFCG path="createfcg" />
    <CreateFC path="createfc" />
    <FCGs path="fcgroups" />
    <FCs path="fcards" />
  </Router>

export default App;
