import React from "react"
import { Col, Container } from "react-bootstrap"
import Footer from "../components/Footer"
import Sidebars from "../components/Sidebars"
import Header from "../components/Header"
import { Helmet } from "react-helmet"
import Bottombars from "../components/Bottombars"


function TopUp() {
  return (
    <>
    <Helmet>
      <title>Top Up</title>
    </Helmet>
    {/* Start of Header */}
    <Header />
    {/* End of Header */}

       {/* Start of Main  */}
      <Container className="d-flex flex-column flex-md-row gap-3 py-5">
        {/* Start of Sidebars */}
        <Sidebars />
        {/* End of Sidebars */}
        <Bottombars />
        {/* Start of Transfer */}
        <Col md={9} className="d-flex flex-column transfer-wrap">
            <div className="d-flex flex-column py-2 my-2 mx-3">

                <div className="p-3">
                  <span className="fw-bold">How to Top Up</span>
                </div>
              
                <div className="d-flex flex-column gap-2 mx-3 topup-wrap">
                  <div className="d-flex gap-4 p-3 my-2">
                    <span className="text-primary">1</span>
                    <span className="text-muted">Go to the nearest ATM or you can use E-Banking.</span>
                  </div>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 topup-wrap">
                  <div className="d-flex gap-4 p-3 my-2">
                    <span className="text-primary">2</span>
                    <span className="text-muted">Type your security number on the ATM or E-Banking.</span>
                  </div>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 topup-wrap">
                  <div className="d-flex gap-4 p-3 my-2">
                    <span className="text-primary">3</span>
                    <span className="text-muted">Select “Transfer” in the menu</span>
                  </div>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 topup-wrap">
                  <div className="d-flex gap-4 p-3 my-2">
                    <span className="text-primary">4</span>
                    <span className="text-muted">Type the virtual account number that we provide you at the top.</span>
                  </div>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 topup-wrap">
                  <div className="d-flex gap-4 p-3 my-2">
                    <span className="text-primary">5</span>
                    <span className="text-muted">Type the amount of the money you want to top up.</span>
                  </div>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 topup-wrap">
                  <div className="d-flex gap-4 p-3 my-2">
                    <span className="text-primary">6</span>
                    <span className="text-muted">Read the summary details</span>
                  </div>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 topup-wrap">
                  <div className="d-flex gap-4 p-3 my-2">
                    <span className="text-primary">7</span>
                    <span className="text-muted">Press transfer / top up</span>
                  </div>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 topup-wrap">
                  <div className="d-flex gap-4 p-3 my-2">
                    <span className="text-primary">8</span>
                    <span className="text-muted">You can see your money in Zwallet within 3 hours.</span>
                  </div>
                </div>
              
                
            </div>
        </Col>
        {/* End of Transfer */}
      </Container>
      {/* End of Main */}
      {/* Start of Footer */}
      <Footer /> 
      {/* End of Footer */}
    </>
  )
}

export default TopUp