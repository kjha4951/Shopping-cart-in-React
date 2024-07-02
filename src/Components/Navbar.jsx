import React, { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BsFillCartCheckFill } from 'react-icons/bs'

const Navbar = ({ setdata, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchterm, setsearchterm] = useState("");
  const filterbycategories = (category) => {
    const element = items.filter((product) => product.category === category)
    // console.log(element);
    setdata(element);
  }

  const filterbyprice = (price) => {
    const element = items.filter((product) => product.price >= price)
    // console.log(element);
    setdata(element);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchterm}`);
    setsearchterm("");
  }

  return (
    <>
      <header className='ky-top'>
        <div className='nav-bar'>
          <Link to={'/'} className='brand'> E-Commerce </Link>

          <form

            onSubmit={handlesubmit}
            className="search-bar">
            <input
              type="text"
              placeholder='Search Produncts'
              value={searchterm}
              onChange={(e) => setsearchterm(e.target.value)}
            />
          </form>

          <Link to={'/cart'} className="cart"><button type="button" class="btn btn-primary position-relative">
            <BsFillCartCheckFill style={{ fontSize: "25px" }} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button></Link>
        </div>

        {
          location.pathname === "/" && (<div className="nav-bar-wrapper">
            <div className="items">Filter by {"->"}</div>
            <div
              onClick={() => setdata(items)}
              className="items">No Filter </div>
            <div
              onClick={() => filterbycategories("mobiles")}
              className="items">Mobiles</div>
            <div
              onClick={() => filterbycategories("laptops")}
              className="items">Laptops</div>
            <div
              onClick={() => filterbycategories("tablets")}
              className="items">Tablets</div>
            <div

              onClick={() => filterbyprice(29999)}
              className="items">{">="}29999</div>
            <div
              onClick={() => filterbyprice(49999)}

              className="items">{">="}49999</div>
            <div
              onClick={() => filterbyprice(69999)}
              className="items">{">="}69999</div>
            <div
              onClick={() => filterbyprice(89999)}
              className="items">{">="}89999</div>

          </div>)
        }


      </header>
    </>
  )
}

export default Navbar