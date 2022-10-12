import React from "react"
import { Col, Container } from "react-bootstrap"
import Header from "../components/Header"
import Sidebars from "../components/Sidebars"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
import Bottombars from "../components/Bottombars"
import {FiArrowUp, FiArrowDown} from "react-icons/fi"

// redux
import { useSelector, useDispatch } from "react-redux"
import {getHistoryTransaction} from "../redux/asyncActions/transactions"

function History() {
  const dispatch = useDispatch();
  const [sort, setSort] = React.useState('DESC');
  const [page, setPage] = React.useState(1)
  const token = useSelector(state => state.auth.token)
  const dataHistory = useSelector(state => state.transactions.results);
  const pageInfo = useSelector(state => state.transactions?.pageInfoHistory);

  const onAsc = () => {
    setSort('ASC');
  };

  const onDesc = () => {
    setSort('DESC');
  };

  const onPrevPage = () => {
    setPage(pageInfo?.prevPage);
  }

  const onNextPage = () => {
    setPage(pageInfo?.nextPage);
  } 

  React.useEffect(() => {
    dispatch(getHistoryTransaction({token, param: {limit: 5, page: page, sortType: sort}}));
  }, [dispatch, token, page, sort]);
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

                <div className="d-flex flex-row justify-content-between">
                  <div className="filterContainer" onClick={() => onAsc()} disabled={sort === 'ASC'}>
                    <FiArrowUp className="iconFilter" size={30} color="#FF5B37" />
                  </div>
                  <div className="filterContainer" onClick={() => onDesc()} disabled={sort === 'DESC'}>
                    <FiArrowDown className="iconFilter" size={30} color="#1EC15F" />
                  </div>                 
                </div>

                {/* mapping data history */}

                {dataHistory?.map((item, i) => {
                  return (
                  <div key={i} className="d-flex flex-column py-2">
                    <div className="d-flex align-items-center flex-row p-2 justify-content-between">
                      <div className="d-flex flex-row py-2 gap-4">
                        <img className="image-history" src={item.penerima_photo} alt="prof-receiver"/>
                      <div className="d-flex flex-column gap-2 mt-1">
                      <span>{item.penerima_fullname}</span>
                      <span className="text-muted">{item.tipe_transaksi}</span>
                    </div>
                  </div>

                  <div>
                    {item.tipe_transaksi === 'Transfer' ? (
                      <span className="warning">-Rp. {item.amount}</span> ) : ( <span className="success">+Rp. {item.amount}</span> )}
                  </div>
                </div>
              </div>
              )
                })}
              
              <div className="d-flex flex-row justify-content-between mx-3 mb-3">
                <button className="btn btn-primary btn-lg fw-bold button-login" disabled={pageInfo?.currentPage === 1} onClick={() => onPrevPage()}>Prev</button>
                <h4 className="mt-3">{pageInfo?.currentPage}</h4>
                <button className="btn btn-primary btn-lg fw-bold button-login" disabled={pageInfo?.nextPage === null} onClick={() => onNextPage()}>Next</button>
              </div>
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