import React, {Component} from 'react';
import axios from "axios";
import { Link, Redirect } from 'react-router-dom';
import './Login.css';


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      details: {},
      errors: {},       
      redirect: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);

  };

  handleChange(e) {
    let details = this.state.details;
    details[e.target.name] = e.target.value;
    this.setState({
      details
    });

  }

  async submitForm(e) {
    e.preventDefault();

    if (this.validateForm()) {

      //   if (localStorage.getItem("authToken")!=null && localStorage.getItem("authToken")!="") {
      //     // history.push("/");
      //     const loginToken = await axios.post(`https://tconectapi.herokuapp.com/api/auth/login/${data.token}`);
      //     if(loginToken.success==true) {
      //       // localStorage.setItem("authToken", data.token);
      //       <Redirect to='/users' />
      //   }
      // }

        const config = {
            "email"  : this.state.details["email"],
            "password" : this.state.details["password"]
        };

        try {
          // console.log(config);
          const {data} = await axios.post(
            "https://tconectapi.herokuapp.com/api/auth/login",
            config
          );
          console.log(data);
          if(data.token) {
            localStorage.setItem("authToken", data.token);  
          }

          alert("Login successful");
          this.setState({
            redirect: true
          });
        } catch(err) {
          alert(err);
        }
 
      }
      this.setState({
        details: {}
      });

  }

  validateForm() {

    let details = this.state.details;
    let errors = {};
    let validity = true;

    if (!details["email"]) {
      validity = false;
      errors["email"] = "*Please enter your Email ID";
    }

    if (typeof details["email"] !== "undefined") {

      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(details["email"])) {
        validity = false;
        errors["email"] = "*Please enter valid Email ID";
      }
    }

    if (!details["password"]) {
      validity = false;
      errors["password"] = "*Please enter your Password";
    }

    if (typeof details["password"] !== "undefined") {
      if (!(details["password"].length > 6)) {
        validity = false;
        errors["password"] = "*Please enter more than 6 characters";
      }
    }

    this.setState({
      errors: errors
    });
    return validity;

  }


render() {
  return (

   <div className="login">

     <div className="container">

        <form className="form" method="post" name="Login-Form" onSubmit= {(e) => this.submitForm(e)}>

            <h2>Teconect Login</h2>

            <div className="control">
                <label htmlFor = "email">Email</label>
                <input type="text" 
                name = "email" 
                value={this.state.details.email}  
                placeholder="Enter Email" 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.email}</small>
            </div>

            <div className="control">
                <label htmlFor = "password">Password</label>
                <input type="password" 
                name = "password" 
                value={this.state.details.password} 
                placeholder="Enter Password" 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.password}</small>
            </div>

            <div className="control">
              <span>Don't have an Account?  <Link to='/register' className="register-link">Register</Link></span>
            </div>

            <div className="control">
              <span><Link to='/forgotpassword' className="forgot-link">Forgot Password?</Link></span>
            </div>

            <input type="submit" className="button"  value="Login" />
        </form>
        {this.state.redirect===true ? <Redirect to="/users" /> : ''}
    </div>
  </div>

    );
}

}


export default Login;