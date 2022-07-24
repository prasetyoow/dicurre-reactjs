import React from "react"
import Imgdb from "../assets/img/phone-double.png"
import { Row, Col } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiCheck} from 'react-icons/fi'

function CreatePinSucess() {
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
        <Col className="col-5 px-5 auth-from-wraper d-flex flex-column gap-5">
          <div className="d-flex justify-content-center align-items-center success-wrap">
            <FiCheck size={50} className="text-muted"/>
          </div>
          <h3 className="text-start fs-3 fw-bold">Your PIN Was Successfully Created</h3>
          <p className="text-start fw-normal text-muted">Your PIN was successfully created and you can now access <br/> all the features in Zwallet. Login to your new account and <br/> start exploring!</p>

          <Link to="/Dashboard" className="text-decoration-none">
            <div className="d-grid mt-5">
              <button className="btn btn-primary btn-lg fw-bold button-login">Login Now</button>
            </div>
          </Link>
          
        </Col>
        </Row>
    </>
  )
}

export default CreatePinSucess