import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Private from './components/Private';
import PrivateRoute from "./components/routing/PrivateRoute";
import Login from './components/Login/Login2';
import Register from './components/Register/Register2';
import Users from './components/Users/Users';
import ForgotPassword from './components/ForgotPassword/ForgotPassword2';

const App = () => {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <PrivateRoute exact path="/" component={Private} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/users' component={Users} />
        <Route path='/forgotpassword' component={ForgotPassword} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
