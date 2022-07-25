import React from "react"
import { Row, Col } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiBell, FiGrid, FiArrowUp, FiArrowDown, FiPlus, FiUser, FiLogOut} from "react-icons/fi"
import Imgrob from "../assets/img/robert.png"
import Imggraph from "../assets/img/graph.png"

function Dashboard() {
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
       <Row class="d-flex flex-row gap-3 px-2 py-4 mx-5">
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
          {/* Start of Article */}
          <Col>
              <div className="d-flex flex-column gap-3">
                    <div className="d-flex flex-row justify-content-between align-items-center p-3 m-4 balance-wrap">
                        <div className="d-flex flex-column gap-1 p-3">
                          <span className="fw-normal balance-text">Balance</span>
                          <span className="fs-1 fw-bold balance-num">Rp120.000</span>
                          <span className="balance-text">+62 813-9387-7946</span>
                        </div>

                        <div className="d-flex flex-column gap-3">
                          <Link to="/SearchReceiver" className="text-decoration-none">
                            <div className="d-flex gap-2 icon-balance">
                              <FiArrowUp size={24} />
                              <span>Transfer</span>
                            </div>
                          </Link>
                          
                          <Link to="/TopUp" className="text-decoration-none">
                            <div className="d-flex gap-2 icon-balance">
                              <FiPlus size={24} />
                              <span>Top Up</span>
                            </div>
                          </Link>
                        </div>
                     </div>
               </div>
          </Col>
          {/* End of Article */}
          {/* Start of Section */}
          <Col className="d-flex flex-row gap-2 main-wrap-full">
            <Col className="rounded d-flex flex-column gap-3 p-3 m-4 main-wrap">
                  <div class="d-flex flex-row p-2 justify-content-between">
                      <div class="d-flex flex-column gap-2">
                          <FiArrowDown size={24} />
                          <span class="fw-normal ">Income</span>
                          <span class="fw-bold ">Rp2.120.000</span>
                      </div>
                      <div class="d-flex flex-column gap-2">
                           <FiArrowUp size={24} />
                          <span class="fw-normal ">Expense</span>
                          <span class="fw-bold ">Rp1.560.000</span>
                      </div>
                  </div>
                  <div class="d-flex justify-content-center">
                      <img src={Imggraph} alt="Graphic" />
                  </div>
             </Col>
          </Col>
          {/* End of Section */}
          {/* Start of Aside */}
          <Col className="p-3 m-2 history-wrap">
              <div class="d-flex justify-content-between p-2 mt-3 flex-row">
                  <span class="fw-bold">Transaction History</span>
                  <span class="text-decoration-none" href="#">See all</span>
              </div>

              <div class="d-flex align-items-center flex-row p-2 justify-content-between">
                 <div class="d-flex flex-row py-2 gap-3">
                    <img class="trans-img" src="/assets/img/samuel.png" alt="prof-sam"/>
                    <div class="d-flex flex-column">
                      <span class="trans-name">Samuel Sushi</span>
                      <span>Transfer</span>
                    </div>
                 </div>
                  <div>
                    <span class="success">+Rp.50.000</span>
                  </div>
              </div>

                    <div class="d-flex align-items-center flex-row p-2 justify-content-between">
                      <div class="d-flex flex-row py-2 gap-3">
                        <img class="trans-img" src="/assets/img/netflix.png" alt="netflix"/>
                        <div class="d-flex flex-column">
                          <span class="trans-name">Netflix</span>
                          <span>Subcription</span>
                        </div>
                      </div>
                      <div>
                        <span class="warning">-Rp.149.000</span>
                      </div>
                    </div>

                      <div class="d-flex align-items-center flex-row p-2 justify-content-between">
                        <div class="d-flex flex-row py-2 gap-3">
                          <img class="trans-img" src="/assets/img/jess.png" alt="prof-jes"/>
                          <div class="d-flex flex-column">
                            <span class="trans-name">Christine Mar...</span>
                            <span>Transfer</span>
                          </div>
                        </div>
                        <div>
                          <span class="success">+Rp.150.000</span>
                        </div>
                      </div>
                      
                        <div class="d-flex align-items-center flex-row p-2 justify-content-between">
                          <div class="d-flex flex-row py-2gap-3">
                            <img class="trans-img" src="/assets/img/adobe.png" alt="adobe"/>
                            <div class="d-flex flex-column">
                              <span class="trans-name">Adobe Inc.</span>
                              <span>Subcription</span>
                            </div>
                          </div>
                          <div>
                            <span class="warning">-Rp.249.000</span>
                          </div>
                        </div>
           </Col>
          {/* End of Aside */}
       </Row>
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

export default Dashboard

