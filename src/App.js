import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/Layout/NavigationBar';
// import Notifications from './Components/HomePage/Notifications';
import Home from './Components/HomePage/Home';
import LogIn from './Components/Auth/LogIn';
import LogOut from './Components/Auth/LogOut';
import Register from './Components/Auth/Register';
// import Feeds from './Components/HomePage/Feeds';
// import AllPosts from './Components/HomePage/AllPosts';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <h1>Hello World!</h1>
      <Switch>
        <Route path="/" exact component={Home}/>        
        <Route path="/notregistered" exact component={Register}/>
        <Route path="/login">
          <LogIn/>
          <LogOut/>
        </Route>
      
      
      </Switch>

    </Router>
     /* <div className="App">
       <NavigationBar/>
       <h1>Hello World!</h1>
      <Feeds/>
       <AllPosts/>
       <Notifications />

       <LogIn/>
       <LogOut/>
       <Register/>
     </div> */
  );
}

export default App;
