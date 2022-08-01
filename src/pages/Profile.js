import React from "react"
import { Col, Container } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiEdit2, FiArrowRight} from "react-icons/fi"
import Imgle from "../assets/img/Michael Le.png"
import Sidebars from "../components/Sidebars"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

function Profile() {
  return (
    <>
    <Helmet>
      <title>Profile User</title>
    </Helmet>
    {/* Start of Header */}
    <Header />
    {/* End of Header */}

       {/* Start of Main */}
       <Container className="d-flex flex-column flex-md-row gap-3 py-5">
          {/* Start of Sidebars */}
          <Sidebars />
          {/* End of Sidebars */}
          {/* Start of Profile */}
          <Col className="d-flex flex-column align-items-center transfer-wrap">
            <div className="d-flex flex-column gap-5 py-2 my-2 mx-5">

              <div className="d-flex flex-column gap-2 align-items-center">
                <div>
                  <img src={Imgle} alt="prof-le"/>
                </div>
                <Link to="/PersonalInfo" className="text-decoration-none">
                  <div>
                  <FiEdit2 size={24} className="pencil"/>
                    <span className="text-muted">Edit</span>
                  </div>
                </Link>
               
                <div>
                  <span className="fw-bold fs-2">Robert Chandler</span>
                </div>
                <div>
                  <span className="text-muted">+62 813-9387-7946</span>
                </div>
              </div>
              
              <div className="d-flex flex-column gap-2 mx-3">
                
                <Link to="/PersonalInfo" className="text-decoration-none text-muted">
                  <div className="d-flex justify-content-between profile-detail-wrap">
                    <span className="text-muted">Personal Information</span>
                    <FiArrowRight size={24} />
                  </div>
                </Link>

                <Link to="/ChangePassword" className="text-decoration-none text-muted" >
                  <div className="d-flex justify-content-between profile-detail-wrap">
                    <span className="text-muted">Change Password</span>
                    <FiArrowRight size={24} />
                  </div>
                </Link>

                <Link to="/ChangePIN" className="text-decoration-none text-muted">
                  <div className="d-flex justify-content-between profile-detail-wrap">
                    <span className="text-muted">Change PIN</span>
                    <FiArrowRight size={24} />
                  </div>
                </Link>

                <Link to="/Login" className="text-decoration-none text-muted">
                  <div className="d-flex justify-content-between profile-detail-wrap">
                    <span className="text-muted">Logout</span>
                  </div>
                </Link>
              </div>
        
            </div>
          </Col>
          {/* End of Profile */}
        </Container>
        {/* End of Main */}
      {/* Start of Footer */}
      <Footer />
      {/* End of Footer */}
    </>
  )
}

export default Profile