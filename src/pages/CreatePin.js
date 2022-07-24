import React from "react"
import Imgdb from "../assets/img/phone-double.png"
import { Row, Col } from "react-bootstrap"
import {Link} from "react-router-dom"

function CreatePin() {
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
        <Col className="px-5 auth-from-wraper d-flex flex-column gap-5">
            <h3 className="text-start fs-3 fw-bold">Secure Your Account, Your Wallet, <br/> and Your Data With 6 Digits PIN <br/> That You Created Yourself.</h3>
            <p className="text-start fw-normal text-muted">Create 6 digits pin to secure all your money and your data in <br/> Zwallet app. Keep it secret and don't tell anyone about your <br/> Zwallet account password and the PIN.</p>

            <div className="d-flex justify-content-center flex-row gap-5 pin-wrap">
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

            <Link to="/createPinSuccess" className="text-decoration-none">
              <div className="d-grid mt-5">
                <button className="btn btn-primary btn-lg fw-bold button-login">Confirm</button>
              </div>
            </Link>
        </Col>
        </Row>
    </>
  )
}

export default CreatePin