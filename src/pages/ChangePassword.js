import React from "react"
import { Col } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiLock} from "react-icons/fi"
import Header from "../components/Header"
import Sidebars from "../components/Sidebars"
import Footer from "../components/Footer"

function ChangePassword() {
  return (
    <>
    {/* Start of Header */}
    <Header />
    {/* End of Header */}

       {/* Start of Main */}
       <main class="d-flex flex-row gap-3 px-2 py-5 mx-5">
          {/* Start of Sidebars */}
          <Sidebars />
          {/* End of Sidebars */}
          {/* Start of Contents */}
          <Col className="col-8 d-flex flex-column transfer-wrap">
            <div className="d-flex flex-column py-2 my-2 mx-3">
              <div className="px-3">
                <span>Change Password</span>
              </div>
          
              <div className="py-4 px-3">
                  <span className="text-muted">You must enter your current password and then <br/> type your new password twice.</span>
              </div>
              
              <div className="d-flex flex-column p-5 m-5 gap-5">
                <div className="input-group flex-nowrap">
                  <span className="input-group-text icon-change">
                    <FiLock size={24} />
                  </span>
                  <input type="password" className="form-control input-change" placeholder="Current Password"/>
                </div>
        
                <div className="input-group flex-nowrap change-wrap">
                  <span className="input-group-text icon-change">
                    <FiLock size={24} />
                  </span>
                  <input type="password" className="form-control input-change" placeholder="New Password"/>
                </div>
        
                <div className="input-group flex-nowrap change-wrap">
                  <span className="input-group-text icon-change">
                    <FiLock size={24} />
                  </span>
                  <input type="password" className="form-control input-change" placeholder="Repeat New Password"/>
                </div>
                
                <Link to="/Dashboard" className="text-decoration-none">
                  <div className="d-grid mt-5">
                    <button className="btn btn-primary btn-lg fw-bold button-change">Change Password</button>
                  </div>
                </Link>

              </div>
            </div>
        </Col>
          {/* End of Contents */}
        </main>
        {/* End of Main */}
        {/* Start of Footer */}
        <Footer />
        {/* End of Footer */}
    </>
  )
}

export default ChangePassword