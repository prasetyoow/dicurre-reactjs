import React from "react"
import { Col } from "react-bootstrap"
import {Link} from "react-router-dom"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import Sidebars from "../components/Sidebars"
import Footer from "../components/Footer"

function ChangePIN() {
  return(
    <>
    <Helmet>
      <title>Change PIN</title>
    </Helmet>
    {/* Start of Header */}
    <Header />
    {/* End of Header */}

       {/* Start of Main */}
       <main class="d-flex flex-row gap-3 px-2 py-5 mx-5">
          {/* Start of Sidebars */}
          <Sidebars />
          {/* End of Sidebars */}
          {/* Start of Contents */}
          <Col className="col-8 d-flex flex-column transfer-wrap">
            <div className="d-flex flex-column py-2 my-2 mx-3">
              <div className="px-3">
                <span>Change PIN</span>
              </div>
          
              <div className="py-4 px-3">
                  <span className="text-muted">Enter your current 6 digits Zwallet PIN below to <br/> continue to the next steps.</span>
              </div>
              
              <div className="d-flex flex-column p-5 m-5 gap-5">
                <div className="d-flex justify-content-center flex-row gap-5 pin-wrap">
                  <div className="d-flex align-items-center pin-border">
                    <input type="text" className="pin-num text-center" maxlength="1" min="0" max="9"/>
                  </div>
                  <div className="d-flex align-items-center pin-border">
                    <input type="text" className="pin-num text-center" maxlength="1" min="0" max="9"/>
                  </div>
                  <div className="d-flex align-items-center pin-border">
                    <input type="text" className="pin-num text-center" maxlength="1" min="0" max="9"/>
                  </div>
                  <div className="d-flex align-items-center pin-border">
                    <input type="text" className="pin-num text-center" maxlength="1" min="0" max="9"/>
                  </div>
                  <div className="d-flex align-items-center pin-border">
                    <input type="text" className="pin-num text-center" maxlength="1" min="0" max="9"/>
                  </div>
                  <div className="d-flex align-items-center pin-border">
                    <input type="text" className="pin-num text-center" maxlength="1" min="0" max="9"/>
                  </div>
                </div>

                <Link to="/ChangeNewPIN" className="text-decoration-none" >
                <div className="d-grid mt-5">
                  <button className="btn btn-primary btn-lg fw-bold button-change">Confirm</button>
                </div>
                </Link>
                
              </div>                                                       
            </div>
          </Col>
          {/* End of Contents */}
        </main>
        {/* End of Main */}
      {/* Start of Footer */}
      <Footer />
      {/* End of Footer */}
    </>
  )
}

export default ChangePIN