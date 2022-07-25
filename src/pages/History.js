import React from "react"
import { Row, Col } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiBell, FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut} from "react-icons/fi"
import Imgrob from "../assets/img/robert.png"
import Imgsam from "../assets/img/samuel.png"
import Imgnet from "../assets/img/netflix.png"
import Imgjess from "../assets/img/jess.png"
import Imgdob from "../assets/img/adobe.png"

function History() {
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

          {/* Start of Trans History */}
          <Col className="col-8 d-flex flex-column gap-3 p-5 history-wrap">
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

export default History