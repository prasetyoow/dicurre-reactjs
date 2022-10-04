import React from "react"
import { Col, Container } from "react-bootstrap"
import Header from "../components/Header"
import Sidebars from "../components/Sidebars"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
import Bottombars from "../components/Bottombars"
import {FiSearch} from "react-icons/fi"

// redux
import { useSelector, useDispatch } from "react-redux"
import {getHistoryTransaction} from "../redux/asyncActions/transactions"

function History() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token)
  const dataHistory = useSelector(state => state.transactions.results);
  React.useEffect(() => {
    dispatch(getHistoryTransaction(token));
  }, [dispatch, token]);
  return (
    <>
    <Helmet>
      <title>Transaction History</title>
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
          {/* Start of Trans History */}
          <Col md={9} className="d-flex flex-column gap-3 p-5 history-wrap">
                <div>
                  <span className="fw-bold">Transaction History</span>
                </div>

                <div className="input-group flex-nowrap search-cont">
                  <span className="input-group-text form-contact"><FiSearch size={24} /></span>
                  <input type="text" className="form-control form-contact" placeholder="Search history transactions"/>
                </div>

                {/* mapping data history */}

                {dataHistory?.map(item => {
                  return (
                  <div className="d-flex flex-column py-2">
                    <div className="d-flex align-items-center flex-row p-2 justify-content-between">
                      <div className="d-flex flex-row py-2 gap-4">
                        <img className="image-history" src={'http://192.168.1.10:8787/public/uploads/'+item.penerima_photo} alt="prof-receiver"/>
                      <div className="d-flex flex-column gap-2 mt-1">
                      <span>{item.penerima_fullname}</span>
                      <span className="text-muted">{item.tipe_transaksi}</span>
                    </div>
                  </div>

                  <div>
                    {item.tipe_transaksi === 'Transfer' ? (
                      <span className="warning">+{item.amount}</span> ) : ( <span className="success">+{item.amount}</span> )}
                  </div>
                </div>
              </div>
              )
                })}

            {/* <div className="d-flex align-items-center flex-row p-2 justify-content-between">
              <div className="d-flex flex-row py-2 gap-3">
                <img className="img-fluid" src={Imgnet} alt="netflix"/>
                <div className="d-flex flex-column">
                  <span className="trans-name">Netflix</span>
                  <span>Subcription</span>
                </div>
              </div>
              <div>
                <span className="warning">-Rp.149.000</span>
              </div>
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center flex-row p-2 justify-content-between">
                <div className="d-flex flex-row py-2 gap-3">
                  <img className="img-fluid" src={Imgjess} alt="prof-jes"/>
                  <div className="d-flex flex-column">
                    <span className="trans-name">Christine Mar...</span>
                    <span>Transfer</span>
                  </div>
                </div>
                <div>
                  <span className="success">+Rp.50.000</span>
                </div>
              </div>
              
              
              <div className="d-flex align-items-center flex-row p-2 justify-content-between">
                <div className="d-flex flex-row py-2 gap-3">
                  <img className="img-fluid" src={Imgdob} alt="adobe"/>
                  <div className="d-flex flex-column">
                    <span className="trans-name">Adobe Inc.</span>
                    <span>Subcription</span>
                  </div>
                </div>
                <div>
                  <span className="warning">-Rp.249.000</span>
                </div>
              </div> */}
          </Col>
      {/* End of Trans History */}
        </Container>
      {/* End of Main */}
    {/* Start of Footer */}
    <Footer />  
    {/* End of Footer */}
    </>
  )
}

export default History