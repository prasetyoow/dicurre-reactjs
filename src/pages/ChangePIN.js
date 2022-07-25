import React from "react"
import { Row, Col } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiBell, FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut} from "react-icons/fi"
import Imgrob from "../assets/img/robert.png"

function ChangePIN() {
  return(
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
                    <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
                  </div>
                  <div className="d-flex align-items-center pin-border">
                    <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
                  </div>
                  <div className="d-flex align-items-center pin-border">
                    <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
                  </div>
                  <div className="d-flex align-items-center pin-border">
                    <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
                  </div>
                  <div className="d-flex align-items-center pin-border">
                    <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
                  </div>
                  <div className="d-flex align-items-center pin-border">
                    <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
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

export default ChangePIN