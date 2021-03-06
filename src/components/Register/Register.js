import React, {Component} from 'react';
import axios from 'axios';
import isGitUrl from 'is-git-url';
import { Link, Redirect } from 'react-router-dom';
import '../Login/Login.css';


class Register extends Component {

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

    // let history = this.props;

    if (this.validateForm()) {


          const config = {
              "username" : this.state.details["username"],
              "email"  : this.state.details["emailid"],
              "password" : this.state.details["password"],
              "PhoneNo" : this.state.details["phoneno"],
              "github" : this.state.details["github"],
              "techstack" : this.state.details["techstack"],
              "tags" : this.state.details["tags"],
              "project" : this.state.details["project"],
              "description" : this.state.details["description"]
            
          };
          
          // console.log(config.body);
          axios
          .post(
            "https://tconectapi.herokuapp.com/api/auth/register",
            config
          )
          .then(res => {
            console.log(res.data);
            localStorage.setItem("authToken", res.data.token);
          })
          .catch (error => console.log(error))
          
  
          // if(data.success === true) {
          //   const loginToken = await axios.post(`https://tconectapi.herokuapp.com/api/auth/login/${data.token}`);
          //   if(loginToken.success===true) {
          //     localStorage.setItem("authToken", data.token);
          //     <Redirect to='/users' />
          //   }
          // }
          alert("Registered Successfully");
          this.state.details["username"] = "";
          this.state.details["emailid"] = "";
          this.state.details["password"] = "";
          this.state.details["phoneno"] = "";
          this.state.details["github"] = "";
          this.state.details["techstack"] = "";
          this.state.details["tags"] = "";
          this.state.details["project"] = "";
          this.state.details["description"] = "";
    
          // history.push("/");
         

        // fetch("http://localhost:5000/api/auth/register" , {
        //   method : "post", 
        //   body :{
            // "username" : details["username"],
            // "username" : details["username"],
            // "email"  : details["emailid"],
            // "password" : details["password"],
            // "github" : details["github"],
            // "techsatck" : details["techstack"],
            // "tags" : details["tags"]
          // }
        // }).then(res=>{
        //   if(res.status === 200 || res.status  === 201){
        //     this.setState({details:details});
        //     alert("You have been logged in successfully!"); 
        //   }
        //   else{
        //     alert(res.statusText);
        //   }
        // }).catch( err =>{
        //   alert(err);
        // })
      }

  }

  validateForm() {

    let details = this.state.details;
    let errors = {};
    let validity = true;

    if (!details["username"]) {
      validity = false;
      errors["username"] = "*Please enter your Name";
    }

    if (typeof details["username"] !== "undefined") {
      if (!(details["username"].length > 3)) {
        validity = false;
        errors["username"] = "*Please enter more than 3 characters";
      }
    }

    if (!details["description"]) {
      validity = false;
      errors["description"] = "*Please enter Description";
    }

    if (typeof details["description"] !== "undefined") {
      if (!(details["description"].length > 3)) {
        validity = false;
        errors["description"] = "*Please enter more than 4 characters";
      }
    }

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

    if (!details["phoneno"]) {
      validity = false;
      errors["phoneno"] = "*Please enter Your Mobile No.";
    }

    if (typeof details["phoneno"] !== "undefined") {

      let pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(details["phoneno"])) {
        validity = false;
        errors["phone"] = "*Please enter only numbers";
      }
      else if(details["phoneno"].length !== 10){
        validity = false;
        errors["phoneno"] = "*Please enter a Valid Mobile no.";
    
      }
    }

    if (!details["github"]) {
      validity = false;
      errors["github"] = "*Please enter your Github account URL";
    }

    if (typeof details["github"] !== "undefined") {

      // let pattern = new RegExp(/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm);
      if (isGitUrl(details["github"])) {
        validity = false;
        errors["github"] = "*Please enter a valid Github account";
      }
    }

    if (!details["techstack"]) {
      validity = false;
      errors["techstack"] = "*Please select your Techstack";
    }

    if (!details["tags"]) {
      validity = false;
      errors["tags"] = "*Please enter your Preferred Technologies";
    }

    if (typeof details["tags"] !== "undefined") {
      if (!(details["tags"].length > 2)) {
        validity = false;
        errors["tags"] = "*Please enter more than 3 characters";
      }
    }

    if (!details["project"]) {
      validity = false;
      errors["project"] = "*Please enter Project URL";
    }

    if (typeof details["project"] !== "undefined") {

      let pattern = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
      if (!pattern.test(details["project"])) {
        validity = false;
        errors["project"] = "*Please enter a valid Project URL";
      }
    }

    this.setState({
      errors: errors
    });
    return validity;

  }


render() {
  return (

   <div className="register">

     <div className="container2">

        <form className="form" method="post" name="Register-Form" onSubmit= {this.submitForm}>

            <h2>Teconect Registration</h2>

            <div className="control">
                <label htmlFor = "username">Name</label>
                <input type="text" 
                name = "username" 
                value={this.state.details.name} 
                placeholder="Enter Your Name" 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.name}</small>
            </div>
            
            <div className="control">
                <label htmlFor = "description">Description</label>
                <input type="text" 
                name = "description" 
                value={this.state.details.description} 
                placeholder="Enter Your Description" 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.description}</small>
            </div>

            <div className="control">
                <label htmlFor = "email">Email</label>
                <input type="text" 
                name = "emailid" 
                value={this.state.details.emailid}  
                placeholder="Enter Your Email" 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.emailid}</small>
            </div>

            <div className="control">
                <label htmlFor = "password">Password</label>
                <input type="password" 
                name = "password" 
                value={this.state.details.password} 
                placeholder="Enter Your Password" 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.password}</small>
            </div>

            <div className="control">
                <label htmlFor = "confirmpassword">Confirm Password</label>
                <input type="password" 
                name = "confirmpassword" 
                value={this.state.details.confirmpassword} 
                placeholder="Enter Your Confirm Password" 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.confirmpassword}</small>
            </div>

            <div className="control">
                <label htmlFor = "phoneno">Mobile No.</label>
                <input type="number" 
                name = "phoneno" 
                value={this.state.details.phoneno} 
                placeholder="Enter Your Mobile No." 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.phoneno}</small>
            </div>

            {/* <div className="control">
                // // <label htmlFor = "linkedin">Linkedin Account URL</label>
                <input type="url" 
                // name = "linkedin" 
                // value={this.state.details.linkedin} 
                // placeholder="Enter Your Linkedin URL" 
                onChange={this.handleChange} />
                // <small className="errorMsg">{this.state.errors.linkedin}</small>
            </div> */}

            <div className="control">
                <label htmlFor = "github">Github Account URL</label>
                <input type="url" 
                name = "github" 
                value={this.state.details.github} 
                placeholder="Enter Your Github URL" 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.github}</small>
            </div>

            <div className="control">
                <label htmlFor = "techstack">Tech Stack</label>
                <input list="techstack" 
                name = "techstack" 
                value={this.state.details.techstack} 
                placeholder="Enter Your Techstack" 
                onChange={this.handleChange} />
                <datalist id="techstack">
                  <option value="Web Development" />
                  <option value="Machine Learning" />
                  <option value="AR/VR" />
                  <option value="Data Science" />
                  <option value="Blockchain" />
                  <option value="Cyber Security" />
                </datalist>
                <small className="errorMsg">{this.state.errors.techstack}</small>
            </div>
            
            <div className="control">
                <label htmlFor = "tags">Preferred Technologies</label>
                <input type="text" 
                name = "tags" 
                value={this.state.details.tags} 
                placeholder="Javascript, Python etc.." 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.tags}</small>
            </div>

            <div className="control">
                <label htmlFor = "project">Project URL</label>
                <input type="url" 
                name = "project" 
                value={this.state.details.project} 
                placeholder="Enter Your Project URL" 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.project}</small>
            </div>

            <div className="control">
              <span>Already have an Account?  <Link to='/login' className="register-link">Login</Link></span>
            </div>

            <input type="submit" className="button2"  value="Register" />
        </form>
    </div>
  </div>

    );
  }
}



export default Register;