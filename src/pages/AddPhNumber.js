import React from "react"
import { Col, Container } from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import Sidebars from "../components/Sidebars"
import Footer from "../components/Footer"
import {useDispatch, useSelector} from 'react-redux';
import qs from 'qs';

// redux
import { resetMsg } from "../redux/reducers/profile"
import { editPhoneNumber } from "../redux/asyncActions/profile"

function AddPhNumber() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [phone, setPhone] = React.useState('');
  const token = useSelector(state => state.auth.token);
  const successMsg = useSelector(state => state.profile.successMsg);

  const onChangePhone = () => {
    dispatch(resetMsg);
    const request = {token: token, phone_number: phone};
    console.log(qs.stringify(request) + ' dari page');
    dispatch(editPhoneNumber(request));
    if (successMsg) {
      navigate('/Profile');
    }
  };

  React.useEffect(() => {
    dispatch(resetMsg);
    if (successMsg) {
      navigate('/Profile');
    }
  }, [dispatch, successMsg, navigate]);
  return (
    <>
    <Helmet>
      <title>Add Phone Number</title>
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
                    <input type="number" className="form-control input-change" defaultValue={phone} onChange={setPhone} placeholder="Enter your phone number"/>
                  </div>
                </div>
        
                <div className="d-grid m-5">
                  <button type="submit" onSubmit={onChangePhone} className="btn btn-primary btn-lg fw-bold button-change">Add Phone Number</button>
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

export default AddPhNumber