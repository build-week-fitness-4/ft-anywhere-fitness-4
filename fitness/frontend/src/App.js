import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ProtectedRoute from './components/ProtectedRoute';

import InstructorLogin from './components/InstructorLogin';
import InstructorSignUp from './components/InstructorSignUp';




function App() {

  // const isLoggedIn = localStorage.getItem('token');

  return (
    <div className="App">
      <Router>
        {/* <Switch> */}
        <header className="App-header">
        {/* <ProtectedRoute exact path="/protected" component={InstructorDashoboard} /> */}  

            <Route path="/instructor-login">
                <InstructorLogin />
            </Route>

            <Route path="/sign-up">
                <InstructorSignUp />
            </Route>


            {/* <Route exact path="/">
                <Homepage />
            </Route> */}
        </header>
        
    
        {/* </Switch> */}
      </Router>
    </div>
    
  );
}

export default App;
