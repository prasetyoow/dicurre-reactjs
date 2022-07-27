import React from "react"
import Imgdb from "../assets/img/phone-double.png"
import { Row, Col, Form } from "react-bootstrap"
import {FiMail} from "react-icons/fi"
import {useNavigate} from "react-router-dom"
import { Helmet } from "react-helmet"
import { Formik } from "formik"
import * as Yup from "yup"

const forgotPassSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required('Required')
})

const AuthValid = ({errors, handleSubmit, handleChange}) => {
  return (
    <Form noValidate onSubmit={handleSubmit} className="d-flex flex-column gap-5" >
      
        <Form.Group  className ="mb-3 input-group" controlId="formatBasicEmail">
          <span className ="input-group-text icon-login">
            <FiMail size={24}  />
          </span>
        <Form.Control name="email" className="input-login" onChange={handleChange} type="email" placeholder="Enter your e-mail" isInvalid={!!errors.email} />
        <Form.Control.Feedback type="invalid">Invalid email format</Form.Control.Feedback>
        </Form.Group>

        <div className ="d-grid mt-5">
              <button className ="btn btn-primary btn-lg fw-bold button-login">Confirm</button>
        </div>

    </Form>
  )
} 

function ForgotPassword() {
  
  const navigate = useNavigate()
    const reqNewPass = (user) => {
    if (user.email === '') {
      window.alert('Please fill the form correctly')
    } else {
      navigate('/ResetPassword')
    }
  }

  return (

    <>
    <Helmet>
      <title>Forgot Password</title>
    </Helmet>
      <Row className="min-vh-100 mw-100" >  
        <Col className="d-flex flex-column gap-5 background-auth" >
          <div className="d-flex flex-column align-items-center">
              <div>
                  <div className="d-flex justify-content-start">
                    <span className="fs-2 fw-bold">Zwallet</span>
                  </div>
                  <div>
                    <img src={Imgdb} alt="phone-db" />
                  </div>
              </div>

              <div className ="d-flex flex-column gap-5 text-content">
                <span className ="fs-3 fw-bold">App that Covering Banking Needs.</span>
                <p className ="fw-normal">Zwallet is an application that focussing in banking needs for all users <br/> in the world. Always updated and always following world trends. <br/> 5000+ users registered in Zwallet everyday with worldwide <br/> users coverage. </p>
              </div>
            </div>
        </Col>
        <Col className="col-5 px-5 auth-from-wraper d-flex flex-column gap-5">
          <h3 className="text-start fs-3 fw-bold">Did You Forgot Your Password? <br/> Don't Worry, You Can Reset Your <br/> Password In a Minutes.</h3>
          <p className="text-start fw-normal text-muted">To reset your password, you must type your e-mail and we <br/> will send a link to your email and you will be directed to the <br/> reset password screens.</p>

        <Formik initialValues={{email: ''}} validationSchema={forgotPassSchema} onSubmit={reqNewPass}>
            {(props) =><AuthValid {...props} />}
        </Formik>

          {/* <div className="input-group flex-nowrap">
            <span className="input-group-text icon-login">
              <FiMail size={24}  />
            </span>
            <input type="email" className="form-control input-login" placeholder="Enter your e-mail"/>
          </div>

          <Link to="/ResetPassword" className="text-decoration-none" >
            <div className="d-grid mt-5">
              <button className="btn btn-primary btn-lg fw-bold button-login">Confirm</button>
            </div>
          </Link> */}
        </Col>
      </Row>
    </>
  )
}

export default ForgotPassword