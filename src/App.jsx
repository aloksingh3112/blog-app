import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Home from './components/home';
import Auth from './components/auth';

function App() {
  return (

   <Switch>
     <Route exact path="/">
       <Home/>
     </Route>
   <Route path='/login'>
      <Auth/>
   </Route>

   </Switch>
  );
}

export default App;
