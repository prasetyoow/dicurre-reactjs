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
        <div onClick={handleShow}>
          <img className="image-profile" src={profile?.picture === null ? {profDef} : profile?.picture} alt="head-profile"/>
        </div>
  )      
}

export default EditPicture

