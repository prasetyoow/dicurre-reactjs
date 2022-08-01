import React from "react"
import { Col, Container} from "react-bootstrap"
import { Helmet } from "react-helmet"
import Imgsam from "../assets/img/samuel.png"
import ConfirmPIN from "../components/Modal"
import Header from "../components/Header"
import Sidebars from "../components/Sidebars"
import Footer from "../components/Footer"


function Confirmation() {
  
  return (
    <>
    <Helmet>
      <title>Confirmation</title>
    </Helmet>
    {/* Start of Header */}
    <Header />
    {/* End of Header */}

       {/* Start of Main */}
       <Container className="d-flex flex-column flex-md-row gap-3 py-5">
          {/* Start of Sidebars */}
          <Sidebars />
          {/* End of Sidebars */}
          {/* Start of Contents */}
          <Col className="d-flex flex-column transfer-wrap">
            <div className="d-flex flex-column transfer-wrap">
              <div className="d-flex flex-column py-2 my-2 mx-3">
                  
                  <div className="px-3">
                    <span>Transfer To</span>
                  </div>
                    
                  <div className="d-flex gap-3 py-4 px-3 my-3 profile-wrap">
                        
                        <div>
                          <img src={Imgsam} alt="cont-samuel"/>
                        </div>
                        
                        <div className="d-flex flex-column gap-1">
                            <span>Samuel Suhi</span>
                            <span className="text-muted">+62 813-8492-9994</span>
                        </div>
                        
                  </div>
            
                  <div className="py-4 px-3">
                      <span className="fw-bold">Details</span>
                  </div>
                
                  <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                    <span className="text-muted">Amount</span>
                    <span>Rp.100.000</span>
                  </div>

                  <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                    <span className="text-muted">Balance Left</span>
                    <span>Rp.20.000</span>
                  </div>

                  <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                    <span className="text-muted">Date & Time</span>
                    <span>May 11, 2020 - 12.20</span>
                  </div>

                  <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                    <span className="text-muted">Notes</span>
                    <span>For buying some socks</span>
                  </div>

                  {/* Button Modal */}
                  <div className="d-grid justify-content-end my-3">
                    <ConfirmPIN />
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

export default Confirmation