import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import Welcome from './component/Welcome'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Welcome/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='*'>
          <Welcome/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
