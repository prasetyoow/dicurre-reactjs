import React from "react"
import { Col, Container } from "react-bootstrap"
import Imgsam from "../assets/img/samuel.png"
import Imgnet from "../assets/img/netflix.png"
import Imgjess from "../assets/img/jess.png"
import Imgdob from "../assets/img/adobe.png"
import Header from "../components/Header"
import Sidebars from "../components/Sidebars"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

function History() {
  return (
    <>
    <Helmet>
      <title>Transaction History</title>
    </Helmet>
      {/* Start of Header */}
      <Header />
      {/* End of Header */}

       {/* Start of Main */}
       <Container className="d-flex flex-column flex-md-row gap-3 py-5">
          {/* Start of Sidebars */}
          <Sidebars />
          {/* End of Sidebars */}

          {/* Start of Trans History */}
          <Col md={8} className="d-flex flex-column gap-3 p-5 history-wrap">
                <div>
                  <span className="fw-bold">Transaction History</span>
                </div>

                <div className="d-flex flex-column py-3 gap-3">
                  <span className="fw-normal text-muted">This week</span>
                  <div className="d-flex align-items-center flex-row p-2 justify-content-between">
                    <div className="d-flex flex-row py-2 gap-3">
                     <img className="img-fluid" src={Imgsam} alt="prof-sam"/>
                  <div className="d-flex flex-column">
                    <span className="trans-name">Samuel Sushi</span>
                    <span>Transfer</span>
                  </div>
                </div>

                <div>
                  <span className="success">+Rp.50.000</span>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center flex-row p-2 justify-content-between">
              <div className="d-flex flex-row py-2 gap-3">
                <img className="img-fluid" src={Imgnet} alt="netflix"/>
                <div className="d-flex flex-column">
                  <span className="trans-name">Netflix</span>
                  <span>Subcription</span>
                </div>
              </div>
              <div>
                <span className="warning">-Rp.149.000</span>
              </div>
            </div>

            <div className="d-flex flex-column gap-3">
              <span className="fw-normal text-muted">This month</span>
              <div className="d-flex align-items-center flex-row p-2 justify-content-between">
                <div className="d-flex flex-row py-2 gap-3">
                  <img className="img-fluid" src={Imgjess} alt="prof-jes"/>
                  <div className="d-flex flex-column">
                    <span className="trans-name">Christine Mar...</span>
                    <span>Transfer</span>
                  </div>
                </div>
                <div>
                  <span className="success">+Rp.50.000</span>
                </div>
              </div>
              
              
              <div className="d-flex align-items-center flex-row p-2 justify-content-between">
                <div className="d-flex flex-row py-2 gap-3">
                  <img className="img-fluid" src={Imgdob} alt="adobe"/>
                  <div className="d-flex flex-column">
                    <span className="trans-name">Adobe Inc.</span>
                    <span>Subcription</span>
                  </div>
                </div>
                <div>
                  <span className="warning">-Rp.249.000</span>
                </div>
              </div>
            
            </div>
          </Col>
      {/* End of Trans History */}
        </Container>
      {/* End of Main */}
    {/* Start of Footer */}
    <Footer />  
    {/* End of Footer */}
    </>
  )
}

export default History