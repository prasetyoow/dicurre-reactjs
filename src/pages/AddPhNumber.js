import React from "react"
import { Col } from "react-bootstrap"
import {Link} from "react-router-dom"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import Sidebars from "../components/Sidebars"
import Footer from "../components/Footer"

function AddPhNumber() {
  return (
    <>
    <Helmet>
      <title>Add Phone Number</title>
    </Helmet>
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
                <span>Add Phone Number</span>
              </div>
          
              <div className="py-4 px-3">
                  <span className="text-muted">Add at least one phone number for the transfer <br/> ID so you can start transfering your money to <br/>another user.</span>
              </div>
              
              <div className="d-flex flex-column p-5 m-5">
                <div className="d-flex flex-row m-5">
                  <div className="input-group flex-nowrap change-wrap">
                    <span className="input-group-text icon-change">
                      <i data-feather="phone"></i>
                      <span className="fw-bold text-muted px-2">+62</span>
                    </span>
                    <input type="number" className="form-control input-change" placeholder="Enter your phone number"/>
                  </div>
                </div>

                <Link to="/ManagePhNumber" className="text-decoration-none">
                  <div className="d-grid m-5">
                    <button className="btn btn-primary btn-lg fw-bold button-change">Add Phone Number</button>
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

export default AddPhNumber