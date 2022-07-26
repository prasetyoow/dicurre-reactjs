import React from "react"
import { Col } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiSearch} from "react-icons/fi"
import Imgsuhi from "../assets/img/suhi.png" 
import Imgmomo from "../assets/img/momo.png"
import Imgkeen from "../assets/img/Jessica Keen.png"
import Imgle from "../assets/img/Michael Le.png"
import Sidebars from "../components/Sidebars"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

function SearchReceiver() {
  return (
    <>
    <Helmet>
      <title>Search Receiver</title>
    </Helmet>
    {/* Start of Header */}
    <Header />
    {/* End of Header */}

       {/* Start of Main */}
       <main class="d-flex flex-row gap-3 px-2 py-5 mx-5">
          {/* Start of Sidebars */}
          <Sidebars />
          {/* End of Sidebars */}

          {/* Start of Transfer */}
          <Col className="col-8 d-flex flex-column gap-3 p-5 history-wrap">
            <div>
              <span className="fw-bold">Search Receiver</span>
            </div>
            
            <div className="input-group flex-nowrap search-cont">
              <span className="input-group-text icon-login">
                <FiSearch size={24} />
              </span>
              <input type="text" className="form-control input-login" placeholder="Search receiver here"/>
            </div>


            <div className="d-flex flex-column gap-3 contact-wrap">
              
                <div className="d-flex gap-3 mx-3">
                  <Link to="/Transfer" className="text-decoration-none">
                    <div>
                      <img className="img-fluid py-2" src={Imgsuhi} alt="prof-sam"/>
                    </div>
                  </Link>
                  <div className="d-flex flex-column gap-2 cont-text">
                    <span className="trans-name">Samuel Sushi</span>
                    <span className="text-muted">+62 813-8492-9994</span>
                  </div>
                </div>
              
                <div className="d-flex gap-3 py-3 mx-3">
                  <div>
                    <img className="img-fluid py-2" src={Imgmomo} alt="prof-momo"/>
                  </div>
                  <div className="d-flex flex-column gap-2 cont-text">
                    <span className="trans-name">Momo Taro</span>
                    <span className="text-muted">+62 812-4343-6731</span>
                  </div>
                </div>
               
                <div className="d-flex gap-3 py-3 mx-3">
                  <div>
                    <img className="img-fluid py-2" src={Imgkeen} alt="prof-jess"/>
                  </div>
                  <div className="d-flex flex-column gap-2 cont-text">
                    <span className="trans-name">Jessica Keen</span>
                    <span className="text-muted">+62 811-3452-5252</span>
                  </div>
                </div>

                <div className="d-flex gap-3 py-3 mx-3">
                    <div>
                      <img className="img-fluid py-2" src={Imgle} alt="prof-le"/>
                    </div>
                  <div className="d-flex flex-column gap-2 cont-text">
                    <span className="trans-name">Michael Le</span>
                    <span className="text-muted">+62 810-4224-4613</span>
                  </div>
                </div>
            </div>
          </Col>
          {/* End of Transfer */}
        </main>
        {/* End of Main */}
      {/* Start of Footer */}
      <Footer />    
      {/* End of Footer */}
    </>
  )
}

export default SearchReceiver