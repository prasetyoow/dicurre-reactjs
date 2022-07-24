import React from "react"
import Imgdb from "../assets/img/phone-double.png"
import { Row, Col } from "react-bootstrap"
import {FiMail, FiLock} from "react-icons/fi"
import {Link} from "react-router-dom"

function Login() {
  return (
    <>
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
        <Col className ="px-5 auth-from-wraper d-flex flex-column gap-5">
          <h3 className ="text-start fs-3 fw-bold">Start Accessing Banking Needs <br/> With All Devices and All Platforms <br/> With 30.000+ Users</h3>
          <p className ="text-start fw-normal text-muted">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you are Desktop, laptop, mobile phone? <br/> we cover all of that for you!</p>

          <div className ="input-group flex-nowrap">
            <span className ="input-group-text icon-login">
              <FiMail size={24}  />
            </span>
            <input type="email" className ="form-control input-login" placeholder="Enter your e-mail" />
          </div>

          <div className ="input-group flex-nowrap">
            <span className ="input-group-text icon-login">
              <FiLock size={24} />
            </span>
            <input type="password" className ="form-control input-login" placeholder="Enter your password" />
          </div>

          <div className ="text-end">
            <Link to="/ForgotPassword" className ="link-dark text-decoration-none">Forgot Password?</Link>
          </div>

          <a className ="text-decoration-none" href="/home.html">
            <div className ="d-grid mt-5">
              <button className ="btn btn-primary btn-lg fw-bold button-login">Login</button>
            </div>
          </a>
          

          <div className ="text-center">
            Don't have an account? Let's <Link to="/Signup" className ="fw-bold text-decoration-none text">Sign up</Link>
          </div>

        </Col>
      </Row>
    </> 
  )
}

export default Login