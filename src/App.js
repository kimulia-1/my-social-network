import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';

  const App = (props) => {
    return (
    <BrowserRouter>
      <div className= 'app-wrapper'>
        <Header />
        <Navbar state={props.state.dialogsPage} />
          <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => <Dialogs
              dialogsPage={props.state.dialogsPage}
              dispatch={props.dispatch} />} />
            <Route path='/profile' render={() => <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch} />} />
            <Route path = '/news' render = {() => <News />} />
            <Route path='/music' render = {() => <Music />} />
            <Route path = '/setting' render = {() => <Setting />} />
        </div>
      </div>  
    </BrowserRouter>
  );
}

export default App;
