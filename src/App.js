import React, { createContext, useEffect, useState } from 'react';
import './App.css';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login, { getCurrentUser } from './components/Login/Login/Login';

import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Orders from './components/ClientProfile/Orders/Orders';
import ServiceLists from './components/ClientProfile/ServiceLists/ServiceLists';
import Review from './components/ClientProfile/Review/Review';
import ServiceListAdmin from './components/AdminPanel/ServiceListAdmin/ServiceListAdmin';
import AddService from './components/AdminPanel/AddService/AddService';
import MakeAdmin from './components/AdminPanel/MakeAdmin/MakeAdmin';



export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [serviceTitle, setServiceTitle] = useState({});


  useEffect( () => {
    getCurrentUser()
    .then(res => setLoggedInUser(res))
  },[])
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, serviceTitle, setServiceTitle }}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/orders">
            <Orders/>
          </PrivateRoute>
          
          <Route path="/serviceList">
            <ServiceLists/>
          </Route>
          <Route path="/review">
            <Review/>
          </Route>
          <Route path="/serviceAdmin">
              <ServiceListAdmin/>
          </Route>
          <Route path="/addServices">
            <AddService/>
          </Route>
          <Route path="/makeAdmin">
              <MakeAdmin/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
