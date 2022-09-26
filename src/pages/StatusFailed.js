import React from "react"
import { Col, Container } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiX} from "react-icons/fi"
import Imgsam from "../assets/img/samuel.png"
import Footer from "../components/Footer"
import Sidebars from "../components/Sidebars"
import Header from "../components/Header"
import { Helmet } from "react-helmet"
import Bottombars from "../components/Bottombars"

function StatusFailed() {
  return (
    <>
    <Helmet>
      <title>Status Transfer Failed</title>
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
          <Col md={9} class="d-flex flex-column transfer-wrap">
            <div class="d-flex flex-column transfer-wrap">
              <div class="d-flex flex-column py-2 my-1 mx-3">
                <div class="d-flex flex-column gap-3 align-items-center">
              
                  <div className="d-flex justify-content-center align-items-center danger-wrap">
                    <FiX size={50} className="text-muted"/>
                  </div>
                  
                  <div>
                    <span class="fw-bold">Transfer Failed</span>
                  </div>
                  <div>
                    <span class="text-muted text-align-center">We can't transfer your money at the moment, we recommend you to check your <br/> internet connection and try again.</span>
                  </div>
                </div>
              
                <div class="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <span class="text-muted">Amount</span>
                  <span>Rp.100.000</span>
                </div>

                <div class="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <span class="text-muted">Balance Left</span>
                  <span>Rp.20.000</span>
                </div>

                <div class="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <span class="text-muted">Date & Time</span>
                  <span>May 11, 2020 - 12.20</span>
                </div>

                <div class="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <span class="text-muted">Notes</span>
                  <span>For buying some socks</span>
                </div>

                <div class="px-3 my-3">
                  <span>Transfer To</span>
                </div>
                  <div class="d-flex gap-3 py-4 px-3 my-3 profile-wrap">
                      <div>
                          <img src={Imgsam} alt="cont-samuel" />
                      </div>
                      <div class="d-flex flex-column gap-1">
                          <span>Samuel Suhi</span>
                          <span class="text-muted">+62 813-8492-9994</span>
                      </div>
                  </div>
                
                  <div>
                    <div class="d-flex flex-row justify-content-end gap-3 button-wrap">
                      <Link to="/Dashboard" className="text-decoration-none">
                        <div>
                          <button class="btn btn-primary btn-lg fw-bold button-success">Try Again</button>
                        </div>
                      </Link>
                    
                    </div>
                  </div>
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

export default StatusFailed