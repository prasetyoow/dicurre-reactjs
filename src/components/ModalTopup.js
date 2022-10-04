import React, {useState} from "react";
import { Button, Form, Modal } from "react-bootstrap";
import {FiPlus} from 'react-icons/fi'
import * as Yup from 'yup'
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";

// redux
import { topUp } from "../redux/asyncActions/transactions";
import { resetmsg } from "../redux/reducers/transactions";

const topUpSchema = Yup.object().shape({
  amount: Yup.number().min(20000, "Minimum Transfer is IDR 20.000").required("Please fill the amount")
})

const TopUpValid = ({errors, handleSubmit, handleChange}) =>  {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Form noValidate onSubmit={handleSubmit} className="d-flex flex-column gap-5">
        <Form.Group  className ="mb-3 mx-5 input-group justify-content-center w-50">
          <Form.Control name="amount" className="input-login" onChange={handleChange} type="number" placeholder="Enter your amount" isInvalid={!!errors.amount} />
          <Form.Control.Feedback type="invalid">{errors.amount}</Form.Control.Feedback>
        </Form.Group>

        <div className="d-grid justify-content-end">
          <Button type="submit" className="btn btn-primary btn-lg fw-bold button-login" onClick={handleClose}>Submit</Button>
        </div>
      </Form>
   
    </>
  )
}

function TopUpModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [amount, setAmount] = React.useState('');
  const notes = 'Top up';
  const time = new Date();
  const token = useSelector(state => state.auth.token);
  const successMsg = useSelector(state => state.transactions.successMsg);

  const onTopUp = () => {
    const request = {amount, notes, time};
    dispatch(topUp(request));
  }
  React.useEffect(() => {
    if (successMsg) {
      dispatch(resetmsg());
      setShow(false);
    }
  }, [dispatch, token, successMsg]);
  return (
    <>
      <div className="d-flex gap-2 icon-balance" onClick={handleShow}>
          <FiPlus size={24} />
          <span>Top Up</span>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="d-flex justify-content-center align-items-center border-0" closeButton>
          <Modal.Title className="text-center justify-content-start fw-bold">Topup</Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex flex-column gap-5">
          <span>Enter the amount of money, and click <br/> submit</span>

          <Formik
            initialValues={{amount: ''}} 
            validationSchema={topUpSchema} onSubmit={onTopUp}>
            {(props) =><TopUpValid {...props} />}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default TopUpModal