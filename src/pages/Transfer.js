import React from "react"
import { Col } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiEdit2} from "react-icons/fi"
import Imgsam from "../assets/img/samuel.png"
import Footer from "../components/Footer"
import Sidebars from "../components/Sidebars"
import Header from "../components/Header"

function Transfer() {
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
          <Col className="col-8 d-flex flex-column transfer-wrap">
            <div className="d-flex flex-column py-2 my-2 mx-3">
              <div className="px-3">
                <span>Transfer Money</span>
              </div>
                
              <div className="d-flex gap-3 py-4 px-3 my-3 profile-wrap">
                <div>
                  <img src={Imgsam} alt="cont-samuel"/>
                </div>
                <div className="d-flex flex-column gap-1">
                  <span>Samuel Suhi</span>
                  <span className="text-muted">+62 813-8492-9994</span>
                </div>
              </div>

              <div className="py-4 px-3">
                  <span className="text-muted">Type the amount you want to transfer and then <br/> press continue to the next steps. </span>
              </div>

               <div className="d-flex flex-column gap-3 align-items-center p-5 m-5">
                <div>
                  <input type="number" maxlength="2" min="0" max="100"/>
                </div>
                <div>
                  <span>Rp120.000 Available</span>
                </div>
                <div className="input-group flex-nowrap align-items-center notes-wrap">
                  <span className="input-group-text icon-login">
                    <FiEdit2 size={24} />
                  </span>
                  <input type="text" className="form-control input-login" placeholder="Add some notes"/>
                </div>
               </div> 

               <Link to="/Confirmation" className="text-decoration-none">
                <div className="d-grid justify-content-end">
                  <button className="btn btn-primary btn-lg fw-bold button-login">Continue</button>
                </div>
              </Link>

            </div>
          </Col>
          {/* Start of Contents */}
          {/* End of Contents */}
        </main>
        {/* End of Main */}
      {/* Start of Footer */}
      <Footer />
      {/* End of Footer */}
    </>
  )
}

export default Transfer