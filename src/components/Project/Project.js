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
          header: {
            "Content-Type": "application/json",
          },
        };

        try {
          // console.log(this.state.details);
          const data = await axios.post(
            `https://tconectapi.herokuapp.com/api/auth/createproject/${localStorage.getItem("authToken")}`,
            {
              "pname" : this.state.details["pname"],
              "project" : this.state.details["project"],
              "description" : this.state.details["description"],
              "tags" : this.state.details["tags"]
            },
            config
          );
          // console.log(data);
          alert("Project details submitted!")
          this.state.details["pname"] = "";
          this.state.details["project"] = "";
          this.state.details["description"] = "";
          this.state.details["tags"] = "";
        } catch (error) {
          console.log(error);
          this.state.details["pname"] = "";
          this.state.details["project"] = "";
          this.state.details["description"] = "";
          this.state.details["tags"] = "";
        }
      }

  }

  validateForm() {

    let details = this.state.details;
    let errors = {};
    let validity = true;

    if (!details["pname"]) {
      validity = false;
      errors["pname"] = "*Please enter your Project Name";
    }

    if (typeof details["pname"] !== "undefined") {
      if (!(details["pname"].length > 4)) {
        validity = false;
        errors["pname"] = "*Please enter more than 3 characters";
      }
    }

    if (!details["description"]) {
        validity = false;
        errors["description"] = "*Please enter your Project Name";
      }
  
      if (typeof details["description"] !== "undefined") {
        if (!(details["description"].length > 4)) {
          validity = false;
          errors["description"] = "*Please enter more than 3 characters";
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

   <div className="project">

     <div className="container2">

        <form className="form" method="post" name="Project-Form" onSubmit= {async (e) => await this.submitForm(e)}>

            <h2>Project Information</h2>
            
            <div className="control">
                <label htmlFor = "pname">Project Name</label>
                <input type="text" 
                name = "pname" 
                value={this.state.details.pname} 
                placeholder="Enter Your Project Name" 
                onChange={this.handleChange} />
                <small className="errorMsg">{this.state.errors.pname}</small>
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
                <label htmlFor = "description">Description About Project</label>
                <input type="text" 
                name = "description" 
                value={this.state.details.description} 
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