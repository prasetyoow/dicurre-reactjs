import React from "react"
import { Col, Container } from "react-bootstrap"
import {Link} from "react-router-dom"
import Imgrob from "../assets/img/robert.png"
import Header from "../components/Header"
import Sidebars from "../components/Sidebars"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

function PersonalInfo() {
  return ( 
    <>
    <Helmet>
      <title>Personal Information</title>
    </Helmet>
    {/* Start of Header */}
    <Header />
    {/* End of Header */}

       {/* Start of Main */}
       <Container className="d-flex flex-column flex-md-row gap-3 py-5">
          {/* Start of Sidebars */}
          <Sidebars />
          {/* End of Sidebars */}
          {/* Start of Personal Info */}
          <Col className="d-flex flex-column transfer-wrap">
            <div className="d-flex flex-column py-2 my-2 mx-3">
                <div className="mx-3">
                  <img src={Imgrob} alt="head-profile"/>
                </div>
              
                <div className="py-4 px-3">
                  <span className="text-muted">We got your personal information from the sign <br/> up proccess. If you want to make changes on <br/> your information, contact our support.</span>
                </div>
              
                <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <span className="text-muted">First Name</span>
                  <span>Robert</span>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <span className="text-muted">Last Name</span>
                  <span>Chandler</span>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <span className="text-muted">Verified E-mail</span>
                  <span>pewdiepie1@gmail.com</span>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column gap-2 ">
                      <span className="text-muted">Phone Number</span>
                      <span>+62 813-9387-7946</span>
                    </div>

                  <div className="p-2 m-2">
                    <Link to="/AddPhNumber" className="text-decoration-none">Manage</Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* End of Personal Info */}
        </Container>
        {/* End of Main */}
      {/* Start of Footer */}
      <Footer />  
      {/* End of Footer */}
    </>
  )
}

export default PersonalInfo