import React from "react"
import { Col, Container } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiSearch} from "react-icons/fi"
import profDef from "../assets/img/defaultProfile.png"
import Sidebars from "../components/Sidebars"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
import Bottombars from "../components/Bottombars"

// redux
import { useDispatch, useSelector } from "react-redux"
import { getAllProfile } from '../redux/reducers/transactions'

function ListContact(props) {
  return (
    <Link to="/Transfer" className="d-flex flex-column justify-content-between text-decoration-none f400-bck gap-3">
      <div className="d-flex gap-3 py-3 mx-3">
        <div>
          <img className="img-fluid py-2" src={profDef} alt="prof-momo"/>
        </div>
        <div className="d-flex flex-column gap-2 cont-text">
          <span className="trans-name">{props.name}</span>
          <span className="text-muted">{props.phone_number}</span>
        </div>
      </div>
    </Link>
  )
}

function SearchReceiver() {
  const dispatch = useDispatch();
  const profiles = useSelector(state => state.transactions.results);
  console.log(profiles + ' ini results')
  React.useEffect(() => {
    dispatch(getAllProfile());
  }, [dispatch]);
  return (
    <>
    <Helmet>
      <title>Search Receiver</title>
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

          {/* Start of Transfer */}
          <Col md={8} className="d-flex flex-column gap-3 p-5 history-wrap">
            <div>
              <span className="fw-bold">Search Receiver</span>
            </div>
            
            <div className="input-group flex-nowrap search-cont">
              <span className="input-group-text form-contact">
                <FiSearch size={24} />
              </span>
              <input type="text" className="form-control form-contact" placeholder="Search receiver here"/>
            </div>

            <div className="d-flex flex-column gap-3 contact-wrap">
              {profiles && profiles.map(o => {
                return (
                    <ListContact pict={o.user_id} name={o.fullname} phone_number={o.phone_number}/>
                )
              })}             
                <div className="d-flex flex-row justify-content-between mx-3 mb-3">
                  <button className="btn btn-primary btn-lg fw-bold button-login">Prev</button>
                  <button className="btn btn-primary btn-lg fw-bold button-login">Next</button>
                </div>
            </div>
          </Col>
          {/* End of Transfer */}
        </Container>
        {/* End of Main */}
      {/* Start of Footer */}
      <Footer />    
      {/* End of Footer */}
    </>
  )
}

export default SearchReceiver