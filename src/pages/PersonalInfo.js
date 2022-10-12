import React from "react"
import { Col, Container } from "react-bootstrap"
import {Link} from "react-router-dom"
import Header from "../components/Header"
import Sidebars from "../components/Sidebars"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
import Bottombars from "../components/Bottombars"
import profDef from '../assets/img/defaultProfile.png'

// redux
import { useDispatch, useSelector } from "react-redux"
import { getUserLogin } from "../redux/asyncActions/profile"


function PersonalInfo() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.data);
  const token = useSelector(state => state.auth.token);

  React.useEffect(() => {
    dispatch(getUserLogin(token));
  }, [dispatch, token]);
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
          <Bottombars />
          {/* Start of Personal Info */}
          <Col md={9} className="d-flex flex-column transfer-wrap">
            <div className="d-flex flex-column py-2 my-2 mx-3">
                <div className="mx-3">
                  <img className="image-history" src={profile.picture === null ? profDef : profile.picture} alt="head-profile"/>
                </div>
              
                <div className="py-4 px-3">
                  <span className="text-muted">We got your personal information from the sign <br/> up proccess. If you want to make changes on <br/> your information, contact our support.</span>
                </div>
              
                <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <span className="text-muted">First Name</span>
                  <span>{profile.fullname === null ? '-' : profile.fullname}</span>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <span className="text-muted">Verified E-mail</span>
                  <span>{profile.email}</span>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column gap-2 ">
                      <span className="text-muted">Phone Number</span>
                      <span>{profile.phone_number === null ? '-' : profile.phone_number}</span>
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