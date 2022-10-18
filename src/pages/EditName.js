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
import { editProfile } from "../redux/asyncActions/profile"

function EditFullName() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = React.useState('');
  const token = useSelector(state => state.auth.token);
  const successMsg = useSelector(state => state.profile.successMsg);


  const onChangePhone = () => {
    dispatch(resetMsg);
    const request = {token: token, fullname: name};
    console.log(name);
    console.log(request);
    console.log(qs.stringify(request) + ' dari page');
    dispatch(editProfile(request));
  };

  React.useEffect(() => {
      if (successMsg) {
        navigate('/Profile');
      }
  }, [dispatch, successMsg, navigate]);
  return (
    <>
    <Helmet>
      <title>Edit Fullname</title>
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
                <span>Add or edit fullname</span>
              </div>
          
              <div className="py-4 px-3">
                  <span className="text-muted">Add at least one or edit name for the transfer <br/> ID so you can start transfering your money to <br/>another user.</span>
              </div>
              
              <div className="d-flex flex-column p-5 m-5">
                <div className="d-flex flex-row m-5">
                  <div className="input-group flex-nowrap change-wrap">
                    <input type="text" className="form-control input-change" defaultValue={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
                  </div>
                </div>
        
                <div className="d-grid m-5">
                  <button type="submit" onClick={onChangePhone} className="btn btn-primary btn-lg fw-bold button-change">Edit</button>
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

export default EditFullName;