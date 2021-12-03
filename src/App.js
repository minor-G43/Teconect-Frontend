import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Private from './components/Private';
import PrivateRoute from "./components/routing/PrivateRoute";
import Login from './components/Login/Login2';
import Register from './components/Register/Register2';
import TestUser from './components/TestUser/TestUser';
import Project from './components/Project/Project';
import Friends from './components/Friends/Friends';
import Projects from './components/Projects/Projects';
import TestProfile from './components/TestProfile/TestProfile';
import ForgotPassword from './components/ForgotPassword/ForgotPassword2';
import Requests from './components/Requests/Requests';
import ResetPassword from './components/ResetPassword/ResetPassword2';

const App = () => {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <PrivateRoute exact path="/" component={Private} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/users' component={TestUser} />
        <Route path='/userprofile' component={TestProfile} />
        <Route path='/createproject' component={Project} />
        <Route path='/projects' component={Projects} />
        <Route path='/requests' component={Requests} />
        <Route path='/friends' component={Friends} />
        <Route path='/forgotpassword' component={ForgotPassword} />
        <Route path='/resetpassword' component={ResetPassword} />
        <Redirect to="/" />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
