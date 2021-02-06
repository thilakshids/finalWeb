import React from "react";
import "./Contactform.css";
import emailjs from "emailjs-com";
import Typical from 'react-typical';
import {FaPhone} from "react-icons/fa";
import {MdEmail,MdLocationOn} from "react-icons/md";
function Contactform() {
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
    <div>
      <div className="containes">
        {/* <h4 className='ts'>Contact us for any inquaries</h4> */}
        <Typical
           className='t6'
        steps={['Contact us for any inquiry......', 100]}
        loop={Infinity}
        wrapper="p"
      />
        <h3 className='t11'> <FaPhone size='3rem' color='black'/></h3>
        <h2 className='v2'> +94 71 658 2773</h2>
        <h2 className='v3'> +94 71 151 3790</h2>
         <h3 className='t2'><MdEmail size='3rem' color='black'/></h3>
         <h2 className='v4'> teamfixit@gmail.com</h2>
       <h3 className='t3'> < MdLocationOn size='3rem' color='black'/></h3>
       <h2 className='v5'>Colombo,Sri Lanka</h2>
        <form onSubmit={sendEmail}>
        <div
                id="map-container"
                className="mapo"
                style={{ height: "400px" }}
            >
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.655771798677!2d79.90069131477294!3d6.9316829949917995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zNsKwNTUnNTQuMSJOIDc5wrA1NCcxMC40IkU!5e0!3m2!1sen!2slk!4v1611580240523!5m2!1sen!2slk"
                title="Vero IT Solutions on location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                />
            </div>
          <div className="tell">
          <label className='lb1'>Name</label>
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-contro1"
                placeholder="Name"
                name="name"
              />
            </div>
            <label className='lb2'>E-mail</label>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-contro2"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <label className='lb3'>Subject</label>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-contro3"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <label className='lb4'>Text</label>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-contro4"
                id=""
                cols="30"
                rows="8"
                placeholder="Type Here...."
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="bt"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>

  
    </div>
  );
}

export default Contactform;
