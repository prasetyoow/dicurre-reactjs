import React from "react"
import { Col, Container } from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {FiSearch, FiArrowDown, FiArrowUp} from "react-icons/fi"
import Sidebars from "../components/Sidebars"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
import Bottombars from "../components/Bottombars"

// redux
import { useDispatch, useSelector } from "react-redux"
import { getAllProfile, getname, getphone, getimage, getreceiver } from '../redux/reducers/transactions'

const ListContact = ({id, fullname, phone_number, picture,}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(id)
  const passData = () => {
      dispatch(getname(fullname));
      dispatch(getphone(phone_number));
      dispatch(getimage(picture));
      dispatch(getreceiver(id));
      navigate('/Transfer');
    };
    return (
      <div key={id} className="d-flex flex-column justify-content-between text-decoration-none f400-bck gap-3 py-2 map-contact-container">
        <div onClick={passData} className="d-flex gap-3 py-3 mx-3">
          <div>
            <img className="image-history" src={picture} alt="prof-contact"/>
          </div>
          <div className="d-flex flex-column gap-2 mt-1">
            <span>{fullname}</span>
            <span className="text-muted">{phone_number}</span>
          </div>
        </div>
      </div>
    )
  }

function SearchReceiver() {
  const dispatch = useDispatch();
  const [sort, setSort] = React.useState('ASC');
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(1)
  const [sortType, setSortType] = React.useState('fullname');
  const profiles = useSelector(state => state.transactions.results);
  const pageInfo = useSelector(state =>  state.transactions.pageInfoContact)

  const onSearch = value => {
    setSearch(value.target.value)
  }

  const onAsc = () => {
    setSort('ASC');
  };

  const onDesc = () => {
    setSort('DESC');
  };

  const onPrevPage = () => {
    setPage(pageInfo.prevPage);
  }

  const onNextPage = () => {
    setPage(pageInfo.nextPage);
  }

  React.useEffect(() => {
    dispatch(getAllProfile({page: page,
      limit: 5,
      sortType: sort,
      orderBy: sortType,
      search: search,}));
  }, [dispatch, page, sort, sortType, search]);
  return (
    <>
    <Helmet>
      <title>Search Receiver</title>
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

          {/* Start of Transfer */}
          <Col md={8} className="d-flex flex-column gap-3 p-5 history-wrap">
            <div>
              <span className="fw-bold">Search Receiver</span>
            </div>
            
            <div className="input-group flex-nowrap search-cont">
              <span className="input-group-text form-contact">
                <FiSearch size={24} />
              </span>
              <input type="text" className="form-control form-contact" value={search} onChange={onSearch} placeholder="Search receiver here" />
            </div>

            <div className="d-flex flex-row justify-content-between">
                <div className="filterContainer" onClick={() => onAsc()} disabled={sort === 'ASC'}>
                  <FiArrowUp className="iconFilter" size={30} color="#FF5B37" />
                </div>
                <div className="filterContainer" onClick={() => onDesc()} disabled={sort === 'DESC'}>
                  <FiArrowDown className="iconFilter" size={30} color="#1EC15F" />
                </div>                 
            </div>

            <div className="d-flex flex-column gap-3 contact-wrap">
              {profiles?.map(o => {
                return (  
                    <ListContact id={o.user_id} fullname={o.fullname} picture={o.picture} phone_number={o.phone_number}/> 
                )
              })}             
                <div className="d-flex flex-row justify-content-between mx-3 mb-3">
                  <button className="btn btn-primary btn-lg fw-bold button-login" disabled={pageInfo?.currentPage === 1} onClick={() => onPrevPage()}>Prev</button>
                  <h3 className="mt-2">{pageInfo?.currentPage}</h3>
                  <button className="btn btn-primary btn-lg fw-bold button-login" disabled={pageInfo?.nextPage === null} onClick={() => onNextPage()}>Next</button>
                </div>
            </div>
          </Col>
          {/* End of Transfer */}
        </Container>
        {/* End of Main */}
      {/* Start of Footer */}
      <Footer />    
      {/* End of Footer */}
    </>
  )
}

export default SearchReceiver