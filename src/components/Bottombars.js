import React from 'react';
import { Container, Nav } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom';
import {FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut} from "react-icons/fi"
import { useDispatch } from "react-redux"
import { logout } from "../redux/reducers/auth"

function Bottombars() {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
    navigate("/Login");
  }

  return (
    <>
    <Container>
      <Nav className="nav container d-lg-none">
        <div className="d-grid nav_menu" id="nav-menu">
            <ul className="d-flex nav-list mx-auto gap-3">
              <li className="nav-item">
              <Link to="/Dashboard" className="text-decoration-none text-muted nav-link d-flex flex-column text-center align-items-center">
                <FiGrid size={24} />
                <span className="nav-name">Dashboard</span>
              </Link>
              </li>

              <li className="nav-item">
              <Link to="/SearchReceiver" className="text-decoration-none text-muted nav-link d-flex flex-column text-center align-items-center">
                <FiArrowUp size={24} />
                <span className="nav-name">Transfer</span>
              </Link>
              </li>

              <li className="nav-item">
              <Link to="/Topup" className="text-decoration-none text-muted nav-link flex-column d-flex text-center align-items-center">
                <FiPlus size={24} />
                <span className="nav-name">TopUp</span>
              </Link>
              </li>

              <li className="nav-item">
              <Link to="/Profile" className="text-decoration-none text-muted nav-link flex-column d-flex text-center align-items-center">
                <FiUser size={24} />
                <span className="nav-name">Profile</span>
              </Link>
              </li>

              <li className="nav-item">
              <Link to="/Login" className="text-decoration-none text-muted nav-link d-flex flex-column  text-center align-items-center" onClick={onLogout}>
                <FiLogOut size={24} />
                <span className="nav-name">Logout</span>
              </Link>
              </li>
            </ul>
        </div>

      </Nav>
    </Container>
    </>
  )
}

export default Bottombars