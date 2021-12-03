import React, {Component} from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Login/Login.css';


class Project extends Component {

  constructor(props) {
    super(props);

    this.state = {
      details: {},
      errors: {},       
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

    if (this.validateForm() === true) {
        

        const config = {
          "title" : this.state.details["title"],
          "url" : this.state.details["url"],
          "des" : this.state.details["des"],
          "tags" : this.state.details["tags"]
        };

        try {
          console.log(this.state.details);
          const {data} = await axios.post(
            `https://tconectapi.herokuapp.com/api/auth/createproject/${localStorage.getItem("authToken")}`,
             config
          );
          console.log(data);
          alert("Project details submitted!");
        } catch (error) {
          console.log(error);
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

    if (!details["title"]) {
      validity = false;
      errors["title"] = "*Please enter your Project Name";
    }

    if (typeof details["title"] !== "undefined") {
      if (!(details["title"].length > 4)) {
        validity = false;
        errors["title"] = "*Please enter more than 3 characters";
      }
    }

    if (!details["des"]) {
        validity = false;
        errors["description"] = "*Please enter your Project Description";
      }
  
      if (typeof details["des"] !== "undefined") {
        if (!(details["des"].length > 4)) {
          validity = false;
          errors["des"] = "*Please enter more than 3 characters";
        }
      }

    if (!details["tags"]) {
      validity = false;
      errors["tags"] = "*Please enter the Technologies Used";
    }

    if (typeof details["tags"] !== "undefined") {
      if (!(details["tags"].length > 2)) {
        validity = false;
        errors["tags"] = "*Please enter more than 3 characters";
      }
    }

    if (!details["url"]) {
      validity = false;
      errors["url"] = "*Please enter Project URL";
    }

    if (typeof details["url"] !== "undefined") {

      let pattern = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
      if (!pattern.test(details["url"])) {
        validity = false;
        errors["url"] = "*Please enter a valid Project URL";
      }
    }

    this.setState({
      errors: errors
    });
    return validity;

  }


render() {
  return (

   <div className="project">

     <div className="container2">

        <form className="form" method="post" name="Project-Form" onSubmit= {(e) => this.submitForm(e)}>

            <h2>Project Information</h2>
            
            <div className="control">
                <label htmlFor = "title">Project Name</label>
                <input type="text" 
                name = "title" 
                value={this.state.details.title} 
                placeholder="Enter Your Project Name" 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.title}</small>
            </div>

            <div className="control">
                <label htmlFor = "url">Project URL</label>
                <input type="url" 
                name = "url" 
                value={this.state.details.url} 
                placeholder="Enter Your Project URL" 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.project}</small>
            </div>

            <div className="control">
                <label htmlFor = "des">Description About Project</label>
                <input type="text" 
                name = "des" 
                value={this.state.details.des} 
                placeholder="Enter Your Project Description" 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.description}</small>
            </div>
            
            <div className="control">
                <label htmlFor = "tags">Technologies Used</label>
                <input type="text" 
                name = "tags" 
                value={this.state.details.tags} 
                placeholder="Javascript, Python etc.." 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.tags}</small>
            </div>

            <input type="submit" className="button2"  value="Add Project" />
        </form>
    </div>
  </div>

    );
  }
}



export default Project;