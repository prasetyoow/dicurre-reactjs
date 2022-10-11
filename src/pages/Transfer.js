import React from "react"
import { Col, Container, Form, FormControl, FormGroup, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { FiEdit2 } from "react-icons/fi"
import Footer from "../components/Footer"
import Sidebars from "../components/Sidebars"
import Header from "../components/Header"
import { Helmet } from "react-helmet"
import { Formik } from "formik"
import * as Yup from "yup"
import Bottombars from "../components/Bottombars"
import profDef from "../assets/img/defaultProfile.png"

// redux
import { useDispatch, useSelector } from "react-redux"
import { getUserLogin } from "../redux/asyncActions/profile"
import { getamount, getnotes, getimage, getreceiver } from "../redux/reducers/transactions"

const amountSchema = Yup.object().shape({
  amount: Yup.number().min(20000, "Minimum Transfer is IDR 20.000").max(1000000, "Maximum Transfer is IDR 1.000.000").required("Please fill the amount")
})

const AmountValid = ({errors, handleSubmit, handleChange}) => {
  const profile = useSelector(state => state.profile.data);
  return (
  <Form noValidate onSubmit={handleSubmit} className="d-flex flex-column text-center justify-content-center gap-5">

    <Form.Group className="flex-nowrap py-2 text-center w-50 mx-auto">
      <Form.Control name="amount" className="fs-1 border-0 text-center" onChange={handleChange} type="number" placeholder="0.00" isInvalid={!!errors.amount} />
    <Form.Control.Feedback type="invalid">{errors.amount}</Form.Control.Feedback>
    </Form.Group>
    
    <div className="text-center">
      <span>{profile.balance} Available</span>
    </div>

    
    <FormGroup className ="mb-3 w-50 py-2 input-group flex-nowrap mx-auto align-items-center">
      <span className="input-group-text icon-login">
          <FiEdit2 size={24} />
      </span>
      <FormControl name="notes" onChange={handleChange} type="text" className="input-login" placeholder="Add some notes"/>
    </FormGroup>
    
    <div className="d-grid justify-content-end">
      <button type="submit" className="btn btn-primary btn-lg fw-bold button-login">Continue</button>
    </div>
  </Form>
  )
}

function Transfer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);
  const name = useSelector(state => state.transactions.name);
  const phone = useSelector(state => state.transactions.phone);
  const image = useSelector(state => state.transactions.image);
  const receiver_id = useSelector(state => state.transactions.receiver);
  console.log(receiver_id)
    const onConfirm = val => {
      console.log(val.amount + 'ini amount');
      console.log(val.notes + 'ini notes');
      if (parseInt(val.amount, 10)) {
        dispatch(getamount(val.amount));
        dispatch(getnotes(val.notes));
        dispatch(getimage(image));
        dispatch(getreceiver(receiver_id));
        navigate('/Confirmation');
      } else {
        Alert.alert('Balance insufficient');
      }
      navigate('/Confirmation');
    };
    React.useEffect(() => {
      dispatch(getUserLogin(token));
    }, [dispatch, token]);
  return (
    <>
    <Helmet>
      <title>Transfer</title>
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
          <Col md={9} className="d-flex flex-column transfer-wrap">
            <div className="d-flex flex-column py-2 my-2 mx-3">
              <div className="px-3">
                <span>Transfer To</span>
              </div>
                
              <Col className="d-flex gap-3 py-4 px-3 my-3 profile-wrap">
                <div>
                  <img className="image-history" src={image === null ? profDef : image} alt="prof-contact"/>
                </div>
                <div className="d-flex flex-column gap-3 my-2">
                  <span>{name}</span>
                  <span className="text-muted">{phone}</span>
                </div>
              </Col>

              <div className="py-4 px-3">
                <span className="text-muted">Type the amount you want to transfer and then <br/> press continue to the next steps. </span>  
              </div>

              <Formik initialValues={{amount: '', notes: ''}} validationSchema={amountSchema} onSubmit={onConfirm}>
              {(props) => <AmountValid {...props}  />}
              </Formik>

              

               {/* <div className="d-flex flex-column gap-3 align-items-center p-5 m-5">
                <div>
                  <input type="number" placeholder="0.00" maxlength="2" min="0" max="100"/>
                </div>
                <div>
                  <span>Rp120.000 Available</span>
                </div>
                <div className="input-group flex-nowrap align-items-center notes-wrap">
                  <span className="input-group-text icon-login">
                    <FiEdit2 size={24} />
                  </span>
                  <input type="text" className="form-control input-login" placeholder="Add some notes"/>
                </div>
               </div> 

               <Link to="/Confirmation" className="text-decoration-none">
                <div className="d-grid justify-content-end">
                  <button className="btn btn-primary btn-lg fw-bold button-login">Continue</button>
                </div>
              </Link> */}

            </div>
          </Col>
          {/* Start of Contents */}
          {/* End of Contents */}
        </Container>
        {/* End of Main */}
      {/* Start of Footer */}
      <Footer />
      {/* End of Footer */}
    </>
  )
}

export default Transfer