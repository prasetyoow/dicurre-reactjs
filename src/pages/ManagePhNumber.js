import React from "react"
import { Col } from "react-bootstrap"
import {Link} from "react-router-dom"
import { FiTrash } from "react-icons/fi"
import Header from "../components/Header"
import Sidebars from "../components/Sidebars"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

function ManagePhNumber() {
  return (
    <>
    <Helmet>
      <title>Manage Phone Number</title>
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
                <span>Manage Phone Number</span>
              </div>
          
              <div className="py-4 px-3">
                  <span className="text-muted">You can only delete the phone number and then <br/> you must add another phone number.</span>
              </div>
              
              <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-column gap-2 ">
                    <span className="text-muted">Primary</span>
                    <span>+62 813 9387 7946</span>
                  </div>

                  <Link to="" >
                    <div className="p-2 m-2">
                      <FiTrash size={24} className="trash-bin" />
                    </div>
                  </Link>
                </div>
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

export default ManagePhNumber