import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import ProtectedRoute from './components/ProtectedRoute';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Logout from './components/Logout';
import FitClass from './components/FitClass';
import EditClassForm from './components/AddClassForm'
import AddClassForm from './components/AddClassForm';
import Homepage from './components/Homepage';


function App(props) {

  // const isLoggedIn = localStorage.getItem('token');
  const [fitClasses, setFitClasses] = useState([]);

  const deleteClass = (id)=> {
    setFitClasses(fitClasses.filter(fitClass => (fitClass.id !== id)))
  }

  return (
    <div className="App">
      
      <Router>
          <nav>
            <Link exact to='/homepage'>Home</Link>
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

            <Route path="/logout">
                <Logout />
            </Route>

            <Route path="/classes/:id">
              <EditClassForm setFitClasses={setFitClasses}/>
            </Route>

            <Route path="/classes/add">
                <AddClassForm setFitClasses={setFitClasses}/>
            </Route>

            <Route path="/classes/:id">
              <FitClass deleteClass={deleteClass}/>
            </Route>

             <Route exact path="/">
                <Homepage />
            </Route> 
        </header>
        
    
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
