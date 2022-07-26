import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/CSS/dashboard.css'
import '../assets/CSS/login.css'
import '../assets/CSS/style.css'
import { Link } from 'react-router-dom';

function ConfirmPIN() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" size="lg" onClick={handleShow}>
        Confirm
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation PIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column p-5 m-5">
            <div className="d-flex justify-content-center flex-row gap-3 pin-wrap">
                
                 <div className="d-flex align-items-center pin-border">
                    <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
                 </div>
                            
                <div className="d-flex align-items-center pin-border">
                    <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
                </div>
                            
                <div className="d-flex align-items-center pin-border">
                    <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
                </div>
                            
                <div className="d-flex align-items-center pin-border">
                    <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
                </div>
                            
                <div className="d-flex align-items-center pin-border">
                    <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
                </div>
                            
                <div className="d-flex align-items-center pin-border">
                    <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
                </div>
                          
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/StatusFailed" >
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          </Link>
          <Link to="/StatusSuccess" >
          <Button variant="success" className="fw-bold button-login" onClick={handleClose}>
            Confirm
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmPIN