import React, {Component} from 'react';
// import { Redirect } from 'react-router';
import axios from "axios";
// import { Link } from 'react-router-dom';
import '../Login/Login.css';


class ResetPassword extends Component {

  constructor() {
    super();

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
        let details = {};
        details["password"] = "";
        details["confirmpassword"] = "";

        const config = {
          header: {
            "Content-Type": "application/json",
          },
        };

        try {
          const {data} = await axios.post(
            "https://tconectapi.herokuapp.com/api/auth/resetpassword",
            config,
            {
              "password" : details["password"],
            }
          );

          localStorage.setItem("authToken", data.token);
          
        } catch(err) {
          alert(err);
        }
      }

  }

  validateForm() {

    let details = this.state.details;
    let errors = {};
    let validity = true;

    if (!details["password"]) {
      validity = false;
      errors["password"] = "*Please enter a Password";
    }

    if (typeof details["password"] !== "undefined") {
      if (!(details["password"].length > 6)) {
        validity = false;
        errors["password"] = "*Please enter more than 6 characters";
      }
    }

    if (!details["confirmpassword"]) {
        validity = false;
        errors["confirmpassword"] = "*Please enter your Confirm Password";
      }
  
      if (typeof details["confirmpassword"] !== "undefined") {
        if (!(details["password"] === details["confirmpassword"])) {
          validity = false;
          errors["confirmpassword"] = "*Passwords do not match";
        }
      }

    this.setState({
      errors: errors
    });
    return validity;

  }


render() {
  return (

   <div className="forgotpassword">

     <div className="container">

        <form className="form" method="post" name="Forgot-Password" onSubmit= {this.submitForm}>

            <h2>Change Password</h2>

            <div className="control">
                <label htmlFor = "password">Enter New Password</label>
                <input type="password" 
                name = "password" 
                value={this.state.details.password} 
                placeholder="Enter Password" 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.password}</small>
            </div>

            <div className="control">
                <label htmlFor = "confirmpassword">Confirm New Password</label>
                <input type="password" 
                name = "confirmpassword" 
                value={this.state.details.confirmpassword} 
                placeholder="Enter Your Confirm Password" 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.confirmpassword}</small>
            </div>

            <input type="submit" className="button3"  value="Change Password" />
        </form>
    </div>
  </div>

    );
}

}


export default ResetPassword;