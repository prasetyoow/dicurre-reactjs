import React from "react"
import Imgdb from "../assets/img/phone-double.png"
import { Row, Col, Form } from "react-bootstrap"
import {FiLock} from "react-icons/fi"
import {useNavigate} from "react-router-dom"
import { Helmet } from "react-helmet"
import {Formik} from "formik"
import * as Yup from "yup"

const newPassSchema = Yup.object().shape({
  password: Yup.string().min(8).required('Required'),
  newpassword: Yup.string().min(8).required('Required')
})

const AuthValid = ({errors, handleSubmit, handleChange}) => {
  return (
    <Form noValidate onSubmit={handleSubmit} className="d-flex flex-column gap-5" >
      
        <Form.Group  className ="mb-3 input-group" controlId="formatBasicPassword">
          <span className ="input-group-text icon-login">
            <FiLock size={24}  />
          </span>
        <Form.Control name="password" className="input-login" onChange={handleChange} type="password" placeholder="Create new password" isInvalid={!!errors.password} />
        <Form.Control.Feedback type="invalid">Password must be at least 8 characters</Form.Control.Feedback>
        </Form.Group>
      
        <Form.Group className="mb-3 input-group" controlId="formatBasicPassword">
          <span className ="input-group-text icon-login">
            <FiLock size={24}  />
          </span>
          <Form.Control name="newpassword" className="input-login" onChange={handleChange} type="password" placeholder="Repeat new password" isInvalid={!!errors.newpassword} />
          <Form.Control.Feedback type="invalid">Password does not match</Form.Control.Feedback>
        </Form.Group> 

        <div className ="d-grid mt-5">
              <button className ="btn btn-primary btn-lg fw-bold button-login">Reset Password</button>
        </div>

    </Form>
  )
} 

function ResetPassword() {

  const navigate = useNavigate()
    const createNewPass = (user) => {
    if (user.newpassword === user.password) {
      navigate('/Login')
    } else {
      window.alert('Password does not match')
    }
  }

  return (
    <>
    <Helmet>
      <title>Reset Password</title>
    </Helmet>
      <Row className="min-vh-100 mw-100" >  
        <Col className="d-flex flex-column gap-5 background-auth" >
          <div className="d-flex flex-column align-items-center">
              <div>
                  <div className="d-flex justify-content-start">
                    <span className="fs-2 fw-bold logo-mobile">Zwallet</span>
                  </div>
                  <div className="bg-phone">
                    <img src={Imgdb} alt="phone-db" />
                  </div>
              </div>

              <div className ="d-flex flex-column gap-5 text-content">
                <span className ="fs-3 fw-bold bg-phone">App that Covering Banking Needs.</span>
                <p className ="fw-normal bg-phone">Zwallet is an application that focussing in banking needs for all users <br/> in the world. Always updated and always following world trends. <br/> 5000+ users registered in Zwallet everyday with worldwide <br/> users coverage. </p>
              </div>
            </div>
        </Col>
        <Col className="px-5 auth-from-wraper d-flex flex-column gap-5">
          <h3 className="text-start fs-3 fw-bold">Did You Forgot Your Password? <br/> Don't Worry, You Can Reset Your <br/> Password In a Minutes.</h3>
          <p className="text-start fw-normal text-muted">To reset your password, you must type your e-mail and we <br/> will send a link to your email and you will be directed to the <br/> reset password screens.</p>

          <Formik initialValues={{password: '', newpassword: ''}} validationSchema={newPassSchema} onSubmit={createNewPass}>
            {(props) =><AuthValid {...props} />}
          </Formik>

          {/* <div className="input-group flex-nowrap">
            <span className="input-group-text icon-login">
              <FiLock size={24} />
            </span>
            <input type="email" className="form-control input-login" placeholder="Create new password"/>
          </div>

          <div className="input-group flex-nowrap">
            <span className="input-group-text icon-login">
             <FiLock size={24} />
            </span>
            <input type="email" className="form-control input-login" placeholder="Create new password"/>
          </div> */}

          {/* <Link to="/Login" className="text-decoration-none">
            <div className="d-grid mt-5">
              <button className="btn btn-primary btn-lg fw-bold button-login">Reset Password</button>
            </div>
          </Link> */}
        </Col>
      </Row>
    </>
  )
}

export default ResetPassword