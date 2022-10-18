import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import profDef from "../assets/img/defaultProfile.png";

// redux
import { resetMsg } from "../redux/reducers/profile";
import { editPicture, getUserLogin } from "../redux/asyncActions/profile";

function EditPicture() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const profile = useSelector(state => state.profile.data)
  const token = useSelector(state => state.auth.token)
  
  React.useEffect(() => {
    dispatch(getUserLogin(token));
  }, [dispatch, token]);

  return (
    <>
    <div>
      <img className="image-profile" src={profile?.picture === null ? {profDef} : profile?.picture} alt="head-profile" onClick={handleShow}/>
    </div>

    <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="d-flex justify-content-center align-items-center border-0" closeButton>
        <Modal.Title className="text-center justify-content-start fw-bold">Topup</Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex flex-column gap-5">
        <span>Enter the amount of money, and click <br/> submit</span>
      </Modal.Body>
    </Modal>
    </>
  )      
}

export default EditPicture

