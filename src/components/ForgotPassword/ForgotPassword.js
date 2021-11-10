import React, {Component} from 'react';
// import { Redirect } from 'react-router';
import axios from "axios";
// import { Link } from 'react-router-dom';
import '../Login/Login.css';


class ForgotPassword extends Component {

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
        let details = {};
        details["emailid"] = "";

        const config = {
          header: {
            "Content-Type": "application/json",
          },
        };

        try {
          const {data} = await axios.post(
            "https://tconectapi.herokuapp.com/api/auth/forgotpassword",
            config,
            {
              "email" : details["emailid"],
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

    if (!details["emailid"]) {
      validity = false;
      errors["emailid"] = "*Please enter your Email ID";
    }

    if (typeof details["emailid"] !== "undefined") {

      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(details["emailid"])) {
        validity = false;
        errors["emailid"] = "*Please enter valid Email ID";
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

            <h2>Reset Password</h2>

            <div className="control">
                <label htmlFor = "email">Email</label>
                <input type="text" 
                name = "emailid" 
                value={this.state.details.emailid}  
                placeholder="Enter Email" 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.emailid}</small>
            </div>

            <input type="submit" className="button3"  value="Reset Password" />
        </form>
    </div>
  </div>

    );
}

}


export default ForgotPassword;