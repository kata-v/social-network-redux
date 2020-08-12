import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/Layout/NavigationBar';
// import Notifications from './Components/HomePage/Notifications';
import Home from './Components/HomePage/Home';
import LogIn from './Components/Auth/LogIn';
import LogOut from './Components/Auth/LogOut';
import Register from './Components/Auth/Register';
import NonRegisteredUserLinks from './Components/Layout/NonRegisteredUserLinks';
// import Feeds from './Components/HomePage/Feeds';
// import AllPosts from './Components/HomePage/AllPosts';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <h1>Hello World!</h1>
      <Switch>
        <Route exact path="/" exact component={Home}/>        
        <Route path="/notregistered" exact component={NonRegisteredUserLinks}/>
        <Route path="/login" exact component={LogIn}/>
        <Route path="/logout" exact component={LogOut}/>
         
      
      
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
