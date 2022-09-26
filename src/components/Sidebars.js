import React from 'react';
import { Col } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom';
import {FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut} from "react-icons/fi"

// redux
import { useDispatch } from "react-redux"
import { logout } from "../redux/reducers/auth"

function Sidebars() {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
    navigate("/Login");
  }

  return (
    <>
    <Col md={3} className="d-flex flex-column nav-wrap p-5 m-3">
            <div className="d-flex flex-column gap-5">
                  <Link to="/Dashboard" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 icon-nav">
                      <FiGrid size={24} />
                      <span>Dashboard</span>
                    </div>
                  </Link>

                  <Link to="/SearchReceiver" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 icon-nav">
                      <FiArrowUp size={24} />
                      <span>Transfer</span>
                    </div>
                  </Link>

                  <Link to="/Topup" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 icon-nav">
                      <FiPlus size={24} />
                      <span>Top Up</span>
                    </div>
                  </Link>

                  <Link to="/Profile" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 icon-nav">
                      <FiUser size={24} />
                      <span>Profile</span>
                    </div>
                  </Link>

                  <Link to="/Login" className="text-decoration-none text-muted">
                    <div className="btn d-flex flex-row gap-3 logout icon-nav" onClick={onLogout}>
                      <FiLogOut size={24} />
                      <span>Logout</span>
                    </div>
                  </Link>
            </div>
          </Col>
    </>
  )
}

export default Sidebars