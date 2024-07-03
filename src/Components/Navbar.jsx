import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { items } from './Data';
import { BsFillCartCheckFill } from 'react-icons/bs';

const Navbar = ({ setdata, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchterm, setsearchterm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(""); // State for selected filter

  const filterbycategories = (category) => {
    const element = items.filter((product) => product.category === category);
    setdata(element);
  }

  const filterbyprice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setdata(element);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchterm}`);
    setsearchterm("");
  }

  const handleFilterChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedFilter(selectedValue);

    if (selectedValue === "No Filter") {
      setdata(items);
    } else if (selectedValue === "Mobiles" || selectedValue === "Laptops" || selectedValue === "Tablets") {
      filterbycategories(selectedValue.toLowerCase());
    } else {
      const price = parseInt(selectedValue.replace(">=", ""));
      filterbyprice(price);
    }
  }

  return (
    <>
      <header className='ky-top'>
        <div className='nav-bar'>
          <Link to={'/'} className='brand'> E-Commerce </Link>
  
          {location.pathname === "/" && (
            <form
              onSubmit={handlesubmit}
              className="search-bar d-flex align-items-center justify-content-center position-relative w-50 mb-3  rounded" 
            >
              <input
                type="text"
                placeholder='Search Products'
                value={searchterm}
                onChange={(e) => setsearchterm(e.target.value)}
              />
            </form>
          )}
  
          <Link to={'/cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <BsFillCartCheckFill style={{ fontSize: "25px" }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
  
        {location.pathname === "/" && (
          <div className="nav-bar-wrapper">
            <div className="items"></div>
           
            <select className='form-select w-25 ' onChange={handleFilterChange} value={selectedFilter}>
              <option value="No Filter">No Filter</option>
              <option value="Mobiles">Mobiles</option>
              <option value="Laptops">Laptops</option>
              <option value="Tablets">Tablets</option>
              <option value=">=29999">29999</option>
              <option value=">=49999">49999</option>
              <option value=">=69999">69999</option>
              <option value=">=89999">89999</option>
            </select>
          </div>
        )}
  
      </header>
    </>
  )
}

export default Navbar;