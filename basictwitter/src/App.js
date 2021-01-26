import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React, {useState} from 'react';
import Home from './component/Home'
import Login from './component/Login'
import Welcome from './component/Welcome'
import ProtectedRoute from './component/ProtectedRoute'


function App() {
  ////user will be saved in session, hence dont need callback
  // const [username, setUsername] = useState("");

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Welcome/>
        </Route>
        <Route path='/login'>
          <Login/>
          {/* <Login userCallback = {setUsername}/> */}
        </Route>
        {/*user will be saved in session, hence dont need to pass the user*/}
        <ProtectedRoute exact={true} path="/home" component={Home}/>        
        {/* <ProtectedRoute exact={true} path="/home" component={Home} user = {username}/> */}
        <Route path='*'>
          <Welcome/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
