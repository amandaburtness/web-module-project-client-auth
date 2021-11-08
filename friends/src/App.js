import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import axios from 'axios'

function App() {

  const logout = () => {
    axios.post("http://localhost:5000/api/logout")
    .then(res => {
      localStorage.removeItem("token")
      window.location.href="/login"
    })
    .catch(err => {
      console.log(err)
    })
  };


  return (
    <Router>
      <div className="App">
        
        <Link to="/login">Log In</Link>

        <Link to="/" onClick={logout}>Log Out</Link>

        <Link to="/protected">Find More Friends!</Link>

        <Routes>
          
          <PrivateRoute path="/protected" component={FriendsList}>
            <FriendsList />
          </PrivateRoute>
         
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
