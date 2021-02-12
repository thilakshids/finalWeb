import React, { Component } from "react";
import "./Online.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Online extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      
      
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrap">
        <div className="form-wrap">
          <h1 className="oni">Payment Information</h1>
          
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firName">
              <label className="lbl" htmlFor="firstName">First Name</label>
              <input
                placeholder="First Name"
                type="text"
                name="firstName"
                className="xcs"
              />
            </div>
            <div className="lasName">
              <label className="lbl" htmlFor="lastName">Last Name</label>
              
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                className="xcs"
              />
            </div>
          
            <div className="carnumber">
              <label className="lbl" htmlFor="card number">Card Number</label>
              &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
              <input
                placeholder="card number"
                type="text"
                name="card number"
                className="xcs"
              />
            </div>

            <div className="exdate">
              <label className="lbl" htmlFor="exp date">Expiration Date</label>
              &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;
             
             
              <input
                placeholder="exp date"
                type="text"
                name="expiration date"
                className="xcs"
              />
              
            </div>
            
             
            <div className="securitcode">
              <label  className="lbl" htmlFor="security code">Security code</label>
              &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
              <input
                placeholder="security code"
                type="text"
                name="Security code"
                className="xcs"
              />
            </div>

            <div className="cartype">
              <label  className="lbl" htmlFor="card type">cvv Number</label>
              &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
              
              <input
                placeholder="card type"
                type="drop box"
                name="Card type"
                className="xcs"
                
              />
            </div>
            <div className="paymentype">
              <label  className="lbl" htmlFor="payment type">Payment Type</label>
              &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;
              <input
                placeholder="payment type"
                type="text"
                name="Payment type"
                className="xcs"
              />
            </div>
          </form>

          <div className="save"><center>
              <button>Save &nbsp;&nbsp;&nbsp;</button></center> 
        
            </div>
        </div>
      </div>
    );
  }
}

export default Online;
