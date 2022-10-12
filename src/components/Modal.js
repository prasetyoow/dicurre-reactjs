import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/CSS/dashboard.css'
import '../assets/CSS/login.css'
import '../assets/CSS/style.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { transfer } from '../redux/asyncActions/transactions';
import { getimage, resetmsg } from '../redux/reducers/transactions';


function ConfirmPIN() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);
  const successMsg = useSelector(state => state.transactions.successMsg);
  const errorMsg = useSelector(state => state.transactions.errorMsg);
  const amount = useSelector(state => state.transactions.amount);
  const image = useSelector(state => state.transactions.image);
  const notes = useSelector(state => state.transactions.notes);
  const receiver_id = useSelector(state => state.transactions.receiver);
  const time = new Date();
  const type_id = 1;

  const onChangePin = value => {
    value.preventDefault();
    const pin = `${value.target.pin1.value}${value.target.pin2.value}${value.target.pin3.value}${value.target.pin4.value}${value.target.pin5.value}${value.target.pin6.value}`
    console.log(pin)
    const request = {
      amount,
      receiver_id,
      notes,
      time,
      type_id,
      pin
    }
    console.log(request)
    dispatch(transfer({token, request}))
    dispatch(getimage(image))
  }

  React.useEffect(() => {
    dispatch(resetmsg());
    if (successMsg) {
      navigate('/StatusSuccess');
    } else if (errorMsg) {
     console.log(errorMsg);
      navigate('/StatusFailed');
    }
  }, [successMsg, errorMsg, navigate, dispatch]);

  return (
    <>
      <Button className="fw-bold button-login" size="lg" onClick={handleShow}>
        Confirm
      </Button>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation PIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
            <Form noValidate onSubmit={onChangePin} className="d-flex flex-column justify-content-center" >
              <div className="d-flex flex-row justify-content-center gap-3">
                <div className="d-flex align-items-center pin-border">
                  <input name="pin1" type="number" className="pin-num text-center" maxLength="1" min="0" max="9" />
                </div>
                <div className="d-flex align-items-center pin-border">
                  <input name="pin2" type="number" className="pin-num text-center" maxLength="1" min="0" max="9" />
                </div> 

                <div className="d-flex align-items-center pin-border">
                  <input name="pin3" type="number" className="pin-num text-center" maxLength="1" min="0" max="9" />
                </div> 

                <div className="d-flex align-items-center pin-border">
                  <input name="pin4" type="number" className="pin-num text-center" maxLength="1" min="0" max="9" />
                </div> 

                <div className="d-flex align-items-center pin-border">
                  <input name="pin5" type="number" className="pin-num text-center" maxLength="1" min="0" max="9" />
                </div> 

                <div className="d-flex align-items-center pin-border">
                  <input name="pin6" type="number" className="pin-num text-center" maxLength="1" min="0" max="9" />
                </div>
              </div>        

              <div className="d-flex mt-4 justify-content-end gap-2">               
                  <Button variant="danger" onClick={handleClose}>Cancel</Button>
                  <Button variant="success" type="submit">Confirm</Button>                    
              </div>   
            </Form>           
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ConfirmPIN