import React from "react"
import Imgdb from "../assets/img/phone-double.png"
import { Row, Col, Form, Alert} from "react-bootstrap"
import {FiMail, FiLock} from "react-icons/fi"
import { Helmet } from "react-helmet"
import {Link, useNavigate} from "react-router-dom"
import {Formik} from "formik"
import { login } from "../redux/asyncActions/auth";
import * as Yup from "yup"
import { useSelector, useDispatch } from "react-redux"

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required('Required'),
  password: Yup.string().min(8).required('Required')
})

const AuthValid = ({errors, handleSubmit, handleChange}) => {
  const successMsg = useSelector((state) => state.auth.successMsg);
  const errorMsg = useSelector((state) => state.auth.errorMsg);

  return (
    <Form noValidate onSubmit={handleSubmit} className="d-flex flex-column gap-5" >
      {successMsg && <Alert variant="success">{successMsg}</Alert>}
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
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
          <Form.Control.Feedback type="invalid">Invalid password</Form.Control.Feedback>
        </Form.Group>

        <div className ="text-end">
            <Link to="/ForgotPassword" className ="link-dark text-decoration-none">Forgot Password?</Link>
        </div> 

        <div className ="d-grid mt-5">
              <button type="submit" className="btn btn-primary btn-lg fw-bold button-login">Login</button>
        </div>

        <div className ="text-center">
            Don't have an account? Let's <Link to="/Signup" className ="fw-bold text-decoration-none text">Sign up</Link>
        </div>

    </Form>
  )
} 

function Login() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const navigate = useNavigate();
  
  const onLogin = (value) => {
    const data = {email: value.email, password: value.password}
    dispatch(login(data))
    }

  React.useEffect(() => {
    if (token) {
      navigate("/Dashboard");
    }
  }, [navigate, token]);

  return (
    <>
    <Helmet>
      <title>Login</title>
    </Helmet>
      <Row className="min-vh-100 mw-100">  
        <Col className="d-flex flex-column gap-5 background-auth">
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
        <Col className ="px-5 auth-from-wraper d-flex flex-column gap-5">
          <h3 className ="text-start fs-3 fw-bold">Start Accessing Banking Needs <br/> With All Devices and All Platforms <br/> With 30.000+ Users</h3>
          <p className ="text-start fw-normal text-muted">Transfering money is eassier than ever, you can access <br/> Dicurre wherever you are Desktop, laptop, mobile phone? <br/> we cover all of that for you!</p>

          <Formik initialValues={{email: '', password: ''}} validationSchema={loginSchema} onSubmit={onLogin}>
            {(props) =><AuthValid {...props} />}
          </Formik>

        </Col>
      </Row>
    </> 
  )
}

export default Login