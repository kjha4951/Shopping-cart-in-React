import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Confetti from "react-confetti";

function UserInfoForm({ cart, setcart }) {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = (event) => {
    event.preventDefault();

    const userInfo = {
      email: email,
      number: number,
      address: address
    };

    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    alert('User info saved to local storage!');

    
    setEmail('');
    setNumber('');
    setAddress('');
  };


  const handlePayment = (e) => {
    
    e.preventDefault();

    const userInfo = {
      email: email,
      number: number,
      address: address
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    setEmail('');
    setNumber('');
    setAddress('');

    
    setShowMessage(true);
    setcart([]);
    // setTimeout(() => {
    //   setShowMessage(false);
    // //   navigate('/');
    // }, 5000);
  };

  return (
    <div className="container bg-light  d-flex justify-content-center align-items-center mt-5 p-5 ">
      {showMessage ? (
          <div>
            <Confetti />
          <h2>Payment Successful! Data store in local storage</h2>
          <Link className='btn btn-primary' to='/'> Go Back</Link>

        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3 ">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="number">Phone Number:</label>
            <input type="tel" className="form-control" id="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="address">Address:</label>
            <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>

          <button type="submit" onClick={handlePayment} className="btn btn-success mb-3 ">Pay</button>
        </form>
      )}
    </div>
  );
}

export default UserInfoForm;