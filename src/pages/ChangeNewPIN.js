import React from "react"
import { Col, Container } from "react-bootstrap"
import {Link} from "react-router-dom"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import Sidebars from "../components/Sidebars"
import Footer from "../components/Footer"
import Bottombars from "../components/Bottombars"

function ChangeNewPIN() {
  return(
    <>
    <Helmet>
      <title>Change New PIN</title>
    </Helmet>
    {/* Start of Header */}
    <Header />
    {/* End of Header */}

       {/* Start of Main */}
       <Container className="d-flex flex-column flex-md-row gap-3 py-5">
          {/* Start of Sidebars */}
          <Sidebars />
          {/* End of Sidebars */}
          <Bottombars />
          {/* Start of Contents */}
          <Col className="d-flex flex-column transfer-wrap">
            <div className="d-flex flex-column py-2 my-2 mx-3">
              <div className="px-3">
                <span>Change PIN</span>
              </div>
          
              <div className="py-4 px-3">
                  <span className="text-muted">Type your new 6 digits security PIN to use in <br/> Zwallet.</span>
              </div>
              
              <div className="d-flex flex-column p-5 m-5 gap-5">
                <div className="d-flex justify-content-center flex-row gap-4 pin-wrap">
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

                <Link to="/Dashboard" className="text-decoration-none" >
                <div className="d-grid mt-5">
                  <button className="btn btn-primary btn-lg fw-bold button-change">Confirm</button>
                </div>
                </Link>
                
              </div>                                                       
            </div>
          </Col>
          {/* End of Contents */}
        </Container>
        {/* End of Main */}
        {/* Start of Footer */}
        <Footer />
        {/* End of Footer */}
    </>
  )
}

export default ChangeNewPIN