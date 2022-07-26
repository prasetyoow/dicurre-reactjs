import React from 'react';
import { Row, Col, Image } from "react-bootstrap"
import { Link } from 'react-router-dom';
import {FiBell} from "react-icons/fi"
import profDef from "../assets/img/defaultProfile.png"

// redux
import {getUserLogin} from "../redux/asyncActions/profile"
import { useSelector, useDispatch } from "react-redux" 

function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.data)
  const token = useSelector(state => state.auth.token)
  React.useEffect(() => {
    dispatch(getUserLogin(token));
  }, [dispatch, token]);
  return (
    <>
    {/* Start of Header */}
    <Row className="d-flex flex-row align-items-center mw-100 m-0 header-full-wrap">
         <Col>
            <div className="d-flex justify-content-start p-5">
              <span className="fw-bold fs-2 head-logo">Dicurre</span>
            </div>
         </Col>
        
         <Col>
            <div className="d-flex align-items-center justify-content-end p-5">
               <Link to="/Profile" className="text-decoration-none text-muted">
                 <div className="profile-head">
                   <Image className="header-prof-pict" src={profile?.picture === null ? profDef : profile?.picture} alt="head-profile"/>
                 </div>
               </Link>
              
               <div className="d-flex flex-column head-wrap">
                  <span className="fw-bold">{profile.fullname === null ? "-" : profile.fullname}</span>
                  <span className="fw-normal prof-num">{profile.phone_number === null ? "-" : profile.phone_number}</span>
               </div>
              
              <div>
                <FiBell size={24} />
              </div>
                
            </div>

         </Col>
       </Row>
       {/* End of Header */}
    </>
  )
}

export default Header