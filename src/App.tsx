//import { createContext, useState, useEffect } from 'react';

//import {Button} from './components/Button';
import { Home } from './pages/Home';
import './styles/global.scss';
import {NewRoom} from './pages/NewRoom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import firebase from 'firebase';
//import { auth } from './services/firebase';

import {AuthContextProvider} from './contexts/AuthContexts';
import { Room } from './pages/Room';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
    
  );
}

export default App;
