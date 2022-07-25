import React from "react"
import { Row, Col } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiBell, FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut} from "react-icons/fi"
import Imgrob from "../assets/img/robert.png"


function TopUp() {
  return (
    <>
    {/* Start of Header */}
    <Row className="d-flex flex-row align-items-center mw-100 m-0 header-full-wrap">
         <Col className="col">
            <div className="d-flex justify-content-start p-5">
              <span className="fw-bold fs-2 head-logo"><Link to="/Dashboard" className="text-decoration-none" href="/home.html">Zwallet</Link></span>
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

       {/* Start of Main  */}
      <main class="d-flex flex-row gap-3 px-2 py-5 mx-5">
        {/* Start of Sidebars */}
        <Col className="col-3 d-flex flex-column nav-wrap p-5 m-3">
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
        
        {/* Start of Transfer */}
        <Col className="col-9 d-flex flex-column transfer-wrap">
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
        </main>

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

export default TopUp