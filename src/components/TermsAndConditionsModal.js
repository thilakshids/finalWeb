import React from "react"
// import React, { Component } from 'react';
import {Modal,Button} from "react-bootstrap"

export default function TermsAndConditionsModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Terms and conditions
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Terms and conditions</h4>
          <p>
           
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }