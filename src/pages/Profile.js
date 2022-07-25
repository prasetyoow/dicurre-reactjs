import React from "react"
import { Row, Col } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiBell, FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut, FiEdit2, FiArrowRight} from "react-icons/fi"
import Imgrob from "../assets/img/robert.png"
import Imgle from "../assets/img/Michael Le.png"

function Profile() {
  return (
    <>
    {/* Start of Header */}
    <Row className="d-flex flex-row align-items-center mw-100 m-0 header-full-wrap">
         <Col className="col">
            <div className="d-flex justify-content-start p-5">
              <span className="fw-bold fs-2 head-logo"><Link to="/Dashboard" className="text-decoration-none">Zwallet</Link></span>
            </div>
         </Col>
        
         <Col>
            <div className="d-flex align-items-center justify-content-end p-5">
               <Link to="/Profile" className="text-decoration-none text-muted">
                 <div>
                   <img src={Imgrob} alt="head-profile"/>
                 </div>
               </Link>
              
               <div className="d-flex flex-column head-wrap">
                  <span className="fw-bold">Robert Chandler</span>
                  <span className="fw-normal prof-num">+62 8139 3877 7946</span>
               </div>
              
              <div>
                <FiBell size={24} />
              </div>
            </div>
         </Col>
       </Row>
       {/* End of Header */}

       {/* Start of Main */}
       <main class="d-flex flex-row gap-3 px-2 py-5 mx-5">
          {/* Start of Sidebars */}
          <Col className="col-3 d-flex flex-column nav-wrap gap-5 p-5 m-3">
            <div className="d-flex flex-column gap-5">
                  <Link to="/History" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 icon-nav">
                      <FiGrid size={24} />
                      <span>Dashboard</span>
                    </div>
                  </Link>

                  <Link to="/SearchReceiver" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 icon-nav">
                      <FiArrowUp size={24} />
                      <span>Transfer</span>
                    </div>
                  </Link>

                  <Link to="/Topup" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 icon-nav">
                      <FiPlus size={24} />
                      <span>Top Up</span>
                    </div>
                  </Link>

                  <Link to="/Profile" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 icon-nav">
                      <FiUser size={24} />
                      <span>Profile</span>
                    </div>
                  </Link>

                  <Link to="/Login" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 logout icon-nav">
                      <FiLogOut size={24} />
                      <span>Logout</span>
                    </div>
                  </Link>
            </div>
          </Col>
          {/* End of Sidebars */}
          {/* Start of Profile */}
          <Col className="col-8 d-flex flex-column align-items-center transfer-wrap">
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
        </main>
        {/* End of Main */}
        {/* Start of Footer */}
        <div className="d-flex justify-content-between flex-row p-4 footer-wrap">
              <div>
                <span className="fw-bold footer-text">2020 Zwallet. All right reserved.</span>
              </div>

              <div className="d-flex flex-row gap-3">
                <span className="fw-bold footer-cont">+62 5637 8882 9901</span>
                <span className="fw-bold footer-cont">contact@zwallet.com</span>
              </div>
          </div>
       {/* End of Footer */}
    </>
  )
}

export default Profile