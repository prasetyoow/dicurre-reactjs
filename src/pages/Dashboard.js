import React from "react"
import { Col, Container } from "react-bootstrap"
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet"
import {FiArrowUp, FiArrowDown} from "react-icons/fi"
import Imggraph from "../assets/img/graph.png"
import Header from "../components/Header"
import Sidebars from "../components/Sidebars"
import Footer from "../components/Footer"
import Bottombars from "../components/Bottombars"
import TopUpModal from "../components/ModalTopup"
import profDef from "../assets/img/defaultProfile.png"

// redux
import {getUserLogin} from "../redux/asyncActions/profile"
import { useSelector, useDispatch } from "react-redux"
import {getHistoryTransaction} from "../redux/asyncActions/transactions"

function Dashboard() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.data)
  const token = useSelector(state => state.auth.token)
  const dataHistory = useSelector(state => state.transactions.results);
  React.useEffect(() => {
    dispatch(getUserLogin(token));
    dispatch(getHistoryTransaction({token, param: {limit: 5, page: 1, sortType: 'DESC'}}));
  }, [dispatch, token]);
  return (
    <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
  
    {/* Start of Header */}
    <Header />  
    {/* End of Header */}
    <Bottombars />
       {/* Start of Main */}
       <Container className="d-flex flex-column flex-md-row gap-5 py-5">
          
            {/* Start of Sidebars */}
            <Sidebars />
            {/* End of Sidebars */}
            
          {/* Start of Transfer */}
          <Col className="d-flex flex-column">
            <Col className="d-flex flex-column gap-3">
               <div className="d-flex flex-row justify-content-between align-items-center p-3 m-4 balance-wrap">
                  <div className="d-flex flex-column gap-1 p-3">
                     <span className="fw-normal balance-text">Balance</span>
                     <span className="fs-1 fw-bold balance-num">{profile.balance === null ? "-" : profile.balance}</span>
                     <span className="balance-text">{profile.phone_number === null ? "-" : profile.phone_number}</span>
                  </div>

                  <div className="d-flex flex-column gap-3">
                    <Link to="/SearchReceiver" className="text-decoration-none">
                      <div className="d-flex gap-2 icon-balance">
                        <FiArrowUp size={24} />
                        <span>Transfer</span>
                      </div>
                    </Link>
                    <TopUpModal />
                  </div>
                </div>
              </Col>
            {/* End of Transfer */}
            {/* Start of Graphic */}
            <Col className="d-flex flex-column flex-md-row gap-2 main-wrap-full">
              <Col className="d-flex flex-column gap-3 p-3 m-4 main-wrap">

                  <div className="d-flex flex-row p-2 justify-content-between">
                      <div className="d-flex flex-column gap-2">
                          <FiArrowDown className="text-danger" size={24} />
                          <span className="fw-normal ">Income</span>
                          <span className="fw-bold ">Rp2.120.000</span>
                      </div>
                      <div className="d-flex flex-column gap-2">
                           <FiArrowUp className="text-success" size={24} />
                          <span className="fw-normal ">Expense</span>
                          <span className="fw-bold ">Rp1.560.000</span>
                      </div>
                  </div>

                  <div className="d-flex justify-content-center">
                      <img src={Imggraph} alt="Graphic" />
                  </div>

             </Col>
             <Col className="p-3 m-2 history-wrap">
                <div className="d-flex justify-content-between p-2 mt-3">
                    <span className="fw-bold">Transaction History</span>
                  <Link to='/history' className="text-decoration-none"><span className="text-muted">See all</span></Link>
                </div>

                {/* Mapping data history */}

                {dataHistory?.map((item, i) => {
                  return (
                  <div key={i} className="d-flex align-items-center flex-row p-2 justify-content-between">
                    <div className="d-flex flex-row py-2 gap-3">
                      <img className="image-history" src={!item.penerima_photo ? profDef : item.penerima_photo} alt="prof-history"/>
                      <div className="d-flex flex-column gap-2 mt-1">
                        <span>{item.penerima_fullname}</span>
                        <span>{item.tipe_transaksi}</span>
                      </div>
                    </div>
                    <div>
                      {item.tipe_transaksi === 'Transfer' ? (
                        <span className="warning">-Rp. {item.amount}</span> ) : ( <span className="success">+Rp. {item.amount}</span> )}
                    </div>
                  </div>
                  )
                })}
              </Col>              
            </Col>
            {/* End of Graphic */}
            {/* Start of History Transfer */}
            
            {/* End Of History Transfer */}
          </Col>         
       </Container>
       {/* End of Main */}
       {/* Start of Footer */}
       <Footer />
       {/* End of Footer */}
  
    </>
  )
}

export default Dashboard

