import React from "react"
import { Col, Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import {FiEdit2, FiArrowRight} from "react-icons/fi"
import profDef from "../assets/img/defaultProfile.png"
import Sidebars from "../components/Sidebars"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
import Bottombars from "../components/Bottombars"

// redux
import { getUserLogin } from "../redux/asyncActions/profile"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/reducers/auth"

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const profile = useSelector(state => state.profile.data)
  const token = useSelector(state => state.auth.token)
  React.useEffect(() => {
    dispatch(getUserLogin(token));
  }, []);

  const onLogout = () => {
    dispatch(logout())
    navigate("/Login");
  }
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
          <Bottombars />
          {/* Start of Profile */}
          <Col md={9} className="d-flex flex-column align-items-center transfer-wrap">
            <div className="d-flex flex-column gap-5 py-2 my-2 mx-5">

              <div className="d-flex flex-column gap-2 align-items-center">
                <div>
                  <img src={profDef
                    // profile.picture === null
                    //   ? require('../assets/img/defaultProfile.png')
                    //   : {
                    //       uri:
                    //         'http://192.168.1.10:8888/public/uploads/' +
                    //         profile.picture,
                    //     }
                  } alt="prof-le"/>
                </div>
                <Link to="/PersonalInfo" className="text-decoration-none">
                  <div>
                  <FiEdit2 size={24} className="pencil"/>
                    <span className="text-muted">Edit</span>
                  </div>
                </Link>
               
                <div>
                  <span className="fw-bold fs-2">{profile.fullname}</span>
                </div>
                <div>
                  <span className="text-muted">{profile.phone_number}</span>
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
                  <div className="d-flex justify-content-between profile-detail-wrap" onClick={onLogout}>
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