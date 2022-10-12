import React from "react"
import { Col, Container } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiCheck, FiShare2, FiDownload} from "react-icons/fi"
import Sidebars from "../components/Sidebars"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
import Bottombars from "../components/Bottombars"
import profDef from '../assets/img/defaultProfile.png'

// redux
import { useSelector } from "react-redux"

function StatusSuccess() {
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
      <title>Status Transfer Success</title>
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
              
                  <div className="d-flex justify-content-center align-items-center success-wrap">
                    <FiCheck size={50} className="text-muted"/>
                  </div>
                  
                  <div>
                    <span className="fw-bold">Transfer Success</span>
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
                          <img className="image-history" src={image === null ? profDef : image} alt="prof-history" />
                      </div>
                      <div className="d-flex flex-column gap-1">
                          <span>{name}</span>
                          <span className="text-muted">{phone}</span>
                      </div>
                  </div>
                
                  <div>
                    <div className="d-flex flex-row justify-content-end gap-3 button-wrap">
                      <button className="button-share">
                        <FiShare2 size={24} />
                      </button>
                      <button className="button-download">
                      <FiDownload size={24} />
                        <span>Download PDF</span>
                      </button>

                      <Link to="/Dashboard" className="text-decoration-none">
                        <div>
                          <button className="btn btn-primary btn-lg fw-bold button-success">Back to Home</button>
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

export default StatusSuccess