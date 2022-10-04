import React from "react"
import { Col, Container } from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {FiSearch} from "react-icons/fi"
import Sidebars from "../components/Sidebars"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
import Bottombars from "../components/Bottombars"

// redux
import { useDispatch, useSelector } from "react-redux"
import { getAllProfile, getname, getphone, getimage, getreceiver } from '../redux/reducers/transactions'

const ListContact = ({id, fullname, phone_number, picture, user_id}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passData = () => {
      dispatch(getname(fullname));
      dispatch(getphone(phone_number));
      dispatch(getimage(picture));
      dispatch(getreceiver(user_id));
      navigate('/Transfer');
    };
    React.useEffect(() => {
      dispatch(getAllProfile());
    }, [dispatch]);
    return (
      <div key={id} className="d-flex flex-column justify-content-between text-decoration-none f400-bck gap-3 map-contact-container">
        <div onClick={passData} className="d-flex gap-3 py-3 mx-3">
          <div>
            <img className="image-history" src={'http://192.168.1.10:8787/public/uploads/' + picture} alt="prof-contact"/>
          </div>
          <div className="d-flex flex-column gap-2 mt-1">
            <span>{fullname}</span>
            <span className="text-muted">{phone_number}</span>
          </div>
        </div>
      </div>
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
                    <ListContact id={o.user_id} fullname={o.fullname} picture={o.picture} phone_number={o.phone_number}/>
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