import React from "react"
import Imgdb from "../assets/img/phone-double.png"
import { Row, Col, Form, Alert } from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import { Helmet } from "react-helmet"
import { Formik } from "formik"
import * as Yup from 'yup'

// redux
import { useDispatch, useSelector } from "react-redux"
import { createpin } from "../redux/asyncActions/auth"

const pinSchema = Yup.object().shape({
  pin1: Yup.number().required('Required'),
  pin2: Yup.number().required('Required'),
  pin3: Yup.number().required('Required'),
  pin4: Yup.number().required('Required'),
  pin5: Yup.number().required('Required'),
  pin6: Yup.number().required('Required'),
})

const AuthValid = ({errors, handleSubmit, handleChange}) => {
  return (
    <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
      <div className="d-flex justify-content-center w-auto mx-auto flex-row gap-4 pin-wrap">
        <Form.Group className="d-flex align-items-center pin-border">
          <Form.Control className="pin-num text-center" onChange={handleChange} isInvalid={!!errors.pin1} name="pin1" maxLength="1" min="0" max="9" />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="d-flex align-items-center pin-border">
          <Form.Control className="pin-num text-center" onChange={handleChange} isInvalid={!!errors.pin2} name="pin2" maxLength="1" min="0" max="9" />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="d-flex align-items-center pin-border">
          <Form.Control className="pin-num text-center" onChange={handleChange} isInvalid={!!errors.pin3} name="pin3" maxLength="1" min="0" max="9" />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="d-flex align-items-center pin-border">
          <Form.Control className="pin-num text-center" onChange={handleChange} isInvalid={!!errors.pin4} name="pin4" maxLength="1" min="0" max="9" />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="d-flex align-items-center pin-border">
          <Form.Control className="pin-num text-center" onChange={handleChange} isInvalid={!!errors.pin5} name="pin5" maxLength="1" min="0" max="9" />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
      
        <Form.Group className="d-flex align-items-center pin-border">
          <Form.Control className="pin-num text-center" onChange={handleChange} isInvalid={!!errors.pin6} name="pin6" maxLength="1" min="0" max="9" />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
      </div>
    
      <div className="d-grid mt-5">
        <button type="submit" className="btn btn-primary btn-lg fw-bold button-login">Confirm</button>
      </div>
    </Form>
  )
}
 
function CreatePin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token)
  const email = useSelector(state =>  state.auth.email)
  const errorMsg = useSelector(state => state.auth.errorMsg)

  const onCreatePin = (value) => {
    if (value.pin1 === '' || value.pin2 === '' || value.pin3 === '' || value.pin4 === '' || value.pin5 === '' || value.pin6 === '') {
      window.alert('Create Pin Failed')
    } else {
      const request = {email: email, pin: value.pin1 + value.pin2 + value.pin3 + value.pin4 + value.pin5 + value.pin6}
      console.log(request);
      dispatch(createpin(request))
      navigate('/CreatePinSuccess')
    }
  }
  React.useEffect(() => {
    if (token) {
      navigate("/Dashboard");
    }
  }, [navigate, token]);
  return (
    <>
    <Helmet>
      <title>Create PIN</title>
    </Helmet>
      <Row className="min-vh-100 mw-100" >  
        <Col className="d-flex flex-column gap-5 background-auth" >
          <div className="d-flex flex-column align-items-center">
              <div>
                  <div className="d-flex justify-content-start">
                    <span className="fs-2 fw-bold logo-mobile">Dicurre</span>
                  </div>
                  <div className="bg-phone">
                    <img src={Imgdb} alt="phone-db" />
                  </div>
              </div>

              <div className ="d-flex flex-column gap-5 text-content">
                <span className ="fs-3 fw-bold bg-phone">App that Covering Banking Needs.</span>
                <p className ="fw-normal bg-phone">Dicurre is an application that focussing in banking needs for all users <br/> in the world. Always updated and always following world trends. <br/> 5000+ users registered in Dicurre everyday with worldwide <br/> users coverage. </p>
              </div>
            </div>
        </Col>
          <Col className="px-5 auth-from-wraper d-flex flex-column gap-5">
              <h3 className="text-start fs-3 fw-bold">Secure Your Account, Your Wallet, <br/> and Your Data With 6 Digits PIN <br/> That You Created Yourself.</h3>
              <p className="text-start fw-normal text-muted">Create 6 digits pin to secure all your money and your data in <br/> Dicurre app. Keep it secret and don't tell anyone about your <br/> Dicurre account password and the PIN.</p>

              {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
              <Formik onSubmit={onCreatePin} initialValues={{pin1: '', pin2: '', pin3: '', pin4: '', pin5: '', pin6: '', }} validationSchema={pinSchema}>
              {(props)=><AuthValid {...props}/>}
              </Formik>
          </Col>
        </Row>
    </>
  )
}

export default CreatePin