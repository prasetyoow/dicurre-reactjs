import React from "react"
import { Col, Container } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiX} from "react-icons/fi"
import Footer from "../components/Footer"
import Sidebars from "../components/Sidebars"
import Header from "../components/Header"
import { Helmet } from "react-helmet"
import Bottombars from "../components/Bottombars"
import profDef from '../assets/img/defaultProfile.png'

// redux
import { useSelector } from "react-redux"

function StatusFailed() {
  const name = useSelector(state => state.transactions.name)
  const phone = useSelector(state => state.transactions.phone);
  const profile = useSelector(state => state.profile.data);
  const image = useSelector(state => state.transactions.image);
  const amount = useSelector(state => state.transactions.amount);
  const notes = useSelector(state => state.transactions.notes);
  const date = new Date().toISOString();
  const dateOnly = date.slice(0, 10);
  const hour = date.slice(11, 16);
  return (
    <>
    <Helmet>
      <title>Status Transfer Failed</title>
    </Helmet>
    {/* Start of Header */}
    <Header />
    {/* End of Header */}

       {/* Start of Main */}
       <Container className="d-flex flex-column flex-md-row gap-3 py-5">
          
          {/* Start of Sidebars */}
          <Sidebars />
          {/* End of Sidebars */}
          <Bottombars />
          {/* Start of Contents */}
          <Col md={9} className="d-flex flex-column transfer-wrap">
            <div className="d-flex flex-column transfer-wrap">
              <div className="d-flex flex-column py-2 my-1 mx-3">
                <div className="d-flex flex-column gap-3 align-items-center">
              
                  <div className="d-flex justify-content-center align-items-center danger-wrap">
                    <FiX size={50} className="text-muted"/>
                  </div>
                  
                  <div>
                    <span className="fw-bold">Transfer Failed</span>
                  </div>
                  <div>
                    <span className="text-muted text-align-center">We can't transfer your money at the moment, we recommend you to check your <br/> internet connection and try again.</span>
                  </div>
                </div>
              
                <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <span className="text-muted">Amount</span>
                  <span>Rp. {amount}</span>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <span className="text-muted">Balance Left</span>
                  <span>Rp. {profile.balance}</span>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <span className="text-muted">Date & Time</span>
                  <span>{dateOnly + ' ' + hour}</span>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <span className="text-muted">Notes</span>
                  <span>{notes}</span>
                </div>

                <div className="px-3 my-4">
                  <span>Transfer To</span>
                </div>
                  <div className="d-flex gap-3 py-3 px-3 profile-wrap">
                      <div>
                          <img className="image-history" src={image === null ? profDef : image} alt="cont-samuel" />
                      </div>
                      <div className="d-flex flex-column gap-1">
                          <span>{name}</span>
                          <span className="text-muted">{phone}</span>
                      </div>
                  </div>
                
                  <div>
                    <div className="d-flex flex-row justify-content-end gap-3 button-wrap">
                      <Link to="/Dashboard" className="text-decoration-none">
                        <div>
                          <button className="btn btn-primary btn-lg fw-bold button-success">Try Again</button>
                        </div>
                      </Link>
                    
                    </div>
                  </div>
                </div>
              </div>
        </Col>
          {/* End of Contents */}
        </Container>
        {/* End of Main */}
      {/* Start of Footer */}
      <Footer />  
      {/* End of Footer */}
    </>
  )
}

export default StatusFailed