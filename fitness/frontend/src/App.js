import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import ProtectedRoute from './components/ProtectedRoute';

import Login from './components/Login';
import SignUp from './components/SignUp';
import DashBoard from './components/DashBoard'


function App() {

  // const isLoggedIn = localStorage.getItem('token');

  return (
    <div className="App">
      
      <Router>
          <nav>
            <Link exact to='/'>Home</Link>
            <Link exact to='/login'>Login</Link>
            <Link exact to='/sign-up'>Sign Up</Link>
            <Link exact to='/classes'>Classes</Link>
            <Link exact to='/logout'>Logout</Link>

          </nav>
        <Switch>
        <header className="App-header">
        {/* <ProtectedRoute exact path="/protected" component={InstructorDashboard} /> */}  

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/sign-up">
                <SignUp />
            </Route>

            <Route path="/dashboard">
                <DashBoard />
            </Route>


            {/* <Route exact path="/">
                <Homepage />
            </Route> */}
        </header>
        
    
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
