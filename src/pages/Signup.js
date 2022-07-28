import React from "react"
import Imgdb from "../assets/img/phone-double.png"
import { Form, Row, Col } from "react-bootstrap"
import {FiUser, FiMail, FiLock} from "react-icons/fi"
import {Link, useNavigate} from "react-router-dom"
import {Formik} from "formik"
import * as Yup from "yup"
import { Helmet } from "react-helmet"

const signUpSchema = Yup.object().shape({
  username: Yup.string().min(6).required('Required'),
  email: Yup.string().email('Invalid email address format').required('Required'),
  password: Yup.string().min(8).required('Required')
})

const AuthValid = ({errors, handleSubmit, handleChange}) => {
  return (
    <Form noValidate onSubmit={handleSubmit} className="d-flex flex-column gap-5" >

        <Form.Group  className ="mb-3 input-group" controlId="formatBasicUsername">
          <span className ="input-group-text icon-login">
            <FiUser size={24}  />
          </span>
        <Form.Control name="username" className="input-login" onChange={handleChange} type="username" placeholder="Enter your username" isInvalid={!!errors.username} />
        <Form.Control.Feedback type="invalid">Username must be at least 6 characters</Form.Control.Feedback>
        </Form.Group>
      
        <Form.Group  className ="mb-3 input-group" controlId="formatBasicEmail">
          <span className ="input-group-text icon-login">
            <FiMail size={24}  />
          </span>
        <Form.Control name="email" className="input-login" onChange={handleChange} type="email" placeholder="Enter your e-mail" isInvalid={!!errors.email} />
        <Form.Control.Feedback type="invalid">Invalid email format</Form.Control.Feedback>
        </Form.Group>
      
        <Form.Group className="mb-3 input-group" controlId="formatBasicPassword">
          <span className ="input-group-text icon-login">
            <FiLock size={24}  />
          </span>
          <Form.Control name="password" className="input-login" onChange={handleChange} type="password" placeholder="Enter your password" isInvalid={!!errors.password} />
          <Form.Control.Feedback type="invalid">Password must be at least 8 characters</Form.Control.Feedback>
        </Form.Group>

        <div className="d-grid mt-5">
              <button className="btn btn-primary btn-lg fw-bold button-login">Sign Up</button>
        </div>

        {/* <div className="text-center">
            Don't have an account? Let's <Link to="/Login" className="fw-bold text-decoration-none text">Login</Link>
        </div> */}

    </Form>
  )
} 

function Signup () {

  const navigate = useNavigate()
    const signUpReq = (user) => {
    if (user.email === '' && user.username === '' && user.password === '') {
      window.alert('Please fill the form correctly')
    } else {
      navigate('/CreatePIN')
    }
  }

  return (
    <>
    <Helmet>
      <title>Sign Up</title>
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
          <h3 className="text-start fs-3 fw-bold">Start Accessing Banking Needs <br/> With All Devices and All Platforms <br/> With 30.000+ Users</h3>
          <p className="text-start fw-normal text-muted">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you are Desktop, laptop, mobile phone? <br/> we cover all of that for you!</p>

          {/* <div className="input-group flex-nowrap">
            <span className="input-group-text icon-login">
              <FiUser size={24} />
            </span>
            <input type="text" className="form-control input-login" placeholder="Enter your username"/>
          </div>

          <div className="input-group flex-nowrap">
            <span className="input-group-text icon-login">
              <FiMail size={24}  />
            </span>
            <input type="email" className="form-control input-login" placeholder="Enter your e-mail"/>
          </div>

          <div className="input-group flex-nowrap">
            <span className="input-group-text icon-login">
              <FiLock size={24} />
            </span>
            <input type="password" className="form-control input-login" placeholder="Enter your password"/>
          </div> */}

          <Formik initialValues={{username: '', email: '', password: ''}} validationSchema={signUpSchema} onSubmit={signUpReq}>
            {(props) =><AuthValid {...props} />}
          </Formik>

          {/* <Link to="/CreatePin" className="text-decoration-none"> */}
            {/* <div className="d-grid mt-5">
              <button className="btn btn-primary btn-lg fw-bold button-login">Sign Up</button>
            </div> */}
          {/* </Link> */}
          

          <div className="text-center">
            Don't have an account? Let's <Link to="/Login" className="fw-bold text-decoration-none text">Login</Link>
          </div>

        </Col>
      </Row>
    </>
  )
}

export default Signup