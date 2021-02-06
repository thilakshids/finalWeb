import React from "react";
import "./Careerform.css";
import emailjs from "emailjs-com";
import Typical from 'react-typical';

function Careerform() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n7s41nj",
        "template_52vh0i8",
        e.target,
        "user_0CkBOOqUFQejwCtTN1HVs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (

    <div className="containers">
      {/* <h4 className='t5'>Join with Vero IT Solution and gain high satisfaction</h4> */}
      <Typical
        className='t5'
        steps={['Join with Vero IT Solutions and get a new experience with us', 100]}
        loop={Infinity}
        wrapper="p"
      />

      <form onSubmit={sendEmail}>
        <div className="telo">
          <label className='lbl1'>Name</label>
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control1"
              placeholder="Enter your name"
              name="name"
            />
          </div>
          <label className='lbl2'>E-mail</label>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="email"
              className="form-control2"
              placeholder="Enter your e-mail"
              name="email"
            />
          </div>
          <label className='lbl3'>Position</label>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control3"
              placeholder="Position"
              name="subject"
            />
          </div>
          <label className='lbl4'>Profile</label>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              className="form-control4"
              id=""
              cols="30"
              rows="8"
              placeholder="Profile"
              name="message"
            ></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <input
              type="submit"
              className="btno"
              value="Send Message"
            ></input>
          </div>
        </div>
      </form>
    </div>



  );
}

export default Careerform;
