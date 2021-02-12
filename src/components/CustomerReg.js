import React,{Component} from 'react';
import { Card, ListGroup } from 'react-bootstrap';
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
import './CustomerReg.css';
import TermsAndConditionsModal from './TermsAndConditionsModal';


class CustomerReg extends Component {

    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };
    
  
     login = event => {
    //  console.log(this.state.fields);
     fetch('http://192.168.8.147:8000/customer/',{
         method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state.fields)
      })
      .then( data => data.json())
      .then(
        data => {
          this.props.customerCustomerReg(data.token);
        }
      )
      .catch( error => console.error(error))
   }
       
    
    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["email"] = "";
          fields["mobile"] = "";
          fields["password"] = "";
          fields["address"] ="";
          fields["account"] ="";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "*Please enter your email-ID.";
      }

      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["mobile"]) {
        formIsValid = false;
        errors["mobile"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobile"] !== "undefined") {
        if (!fields["mobile"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobile"] = "*Please enter valid mobile no.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }

      
      if (!fields["address"]) {
        formIsValid = false;
        errors["address"] = "*Please enter your Address.";
      }

      if (typeof fields["address"] !== "undefined") {
        if (!fields["address"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["address"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["account"]) {
        formIsValid = false;
        errors["account"] = "*Please enter your account number.";
      }

      if (typeof fields["account"] !== "undefined") {
        if (!fields["account"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["account"] = "*Please enter valid account number.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
     <Card className="cos">
     <Card className="main-registration-container">
     <Card className="regi">
        {/* <h3> Register Here</h3> */}
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Name:</label>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
        <label>Email:</label>
        <input type="text" name="email" value={this.state.fields.email} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.email}</div>
        <label>Mobile No:</label>
        <input type="text" name="mobile" value={this.state.fields.mobile} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobile}</div>
        <label>Password:</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <label>Address:</label>
        <input type="text" name="address" value={this.state.fields.address} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.address}</div>
        <label>Account Number:</label>
        <input type="text" name="account" value={this.state.fields.account} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.account}</div>
        <label>
                {/* <input
                  name="acceptedTerms"
                  type="checkbox"
                  onChange={(e) =>
                    this.setState({
                      isAccepted: e.target.checked,
                    })
                  }
                  required
                /> */}
                I accept the{" "}
                <a 
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer"
                  }}
                  onClick={() => this.setState({ isTCModalVisible: true })}>
                  terms of service
                </a>
                <TermsAndConditionsModal
                  show={this.state.isTCModalVisible}
                  onHide={() => this.setState({ isTCModalVisible: false })}
                />
              </label>
              <input type="submit" className="button" value="Register" />
            </form>
          </Card>
        </Card>
      </Card>
    );
  }
}

export default CustomerReg;
