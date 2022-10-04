import React from "react"
import { Col, Container} from "react-bootstrap"
import { Helmet } from "react-helmet"
import { useNavigate } from "react-router-dom"
import profDef from "../assets/img/defaultProfile.png"
import ConfirmPIN from "../components/Modal"
import Header from "../components/Header"
import Sidebars from "../components/Sidebars"
import Footer from "../components/Footer"

// redux
import { useDispatch, useSelector } from "react-redux"
import {getdate, resetmsg} from '../redux/reducers/transactions'

function Confirmation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const token = useSelector(state => state.auth.token);
  const name = useSelector(state => state.transactions.name);
  const phone = useSelector(state => state.transactions.phone);
  const profile = useSelector(state => state.profile.data);
  const amount = useSelector(state => state.transactions.amount);
  const notes = useSelector(state => state.transactions.notes);
  const date = new Date().toISOString();
  const dateOnly = date.slice(0, 10);
  const hour = date.slice(11, 16);
  const slicedMoney = profile.balance
    .slice('2')
    .replace('.', '')
    .replace('.', '');
  // const onSubmit = val => {
  //   dispatch(getdate(date));
  //   navigate(<ConfirmPIN />);
  // };
  React.useEffect(() => {
    dispatch(resetmsg());
  }, [dispatch]);
  return (
    <>
    <Helmet>
      <title>Confirmation</title>
    </Helmet>
    {/* Start of Header */}
    <Header />
    {/* End of Header */}

       {/* Start of Main */}
       <Container className="d-flex flex-column flex-md-row gap-3 py-5">
          {/* Start of Sidebars */}
          <Sidebars />
          {/* End of Sidebars */}
          {/* Start of Contents */}
          <Col className="d-flex flex-column transfer-wrap">
            <div className="d-flex flex-column transfer-wrap">
              <div className="d-flex flex-column py-2 my-2 mx-3">
                  
                  <div className="px-3">
                    <span>Transfer To</span>
                  </div>
                    
                  <div className="d-flex gap-3 py-4 px-3 my-3 profile-wrap">
                        
                        <div>
                          <img src={profDef} alt="cont-samuel"/>
                        </div>
                        
                        <div className="d-flex flex-column gap-3 my-2">
                            <span>{name}</span>
                            <span className="text-muted">{phone}</span>
                        </div>                       
                  </div>
            
                  <div className="py-4 px-3">
                      <span className="fw-bold">Details</span>
                  </div>
                
                  <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                    <span className="text-muted">Amount</span>
                    <span>Rp. {amount}</span>
                  </div>

                  <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                    <span className="text-muted">Balance Left</span>
                    <span>Rp. {slicedMoney - amount}</span>
                  </div>

                  <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                    <span className="text-muted">Date & Time</span>
                    <span>{dateOnly + ' ' + hour}</span>
                  </div>

                  <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                    <span className="text-muted">Notes</span>
                    <span>{notes}</span>
                  </div>

                  {/* Button Modal */}
                  <div className="d-grid justify-content-end py-4">
                    <ConfirmPIN />
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

export default Confirmation