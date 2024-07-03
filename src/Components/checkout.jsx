import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import Confetti from "react-confetti";
const Checkout = ({ cart, setcart }) => {
    // const [showMessage, setShowMessage] = useState(false);
    // const navigate = useNavigate();

  

    // const handlePayment = () => {
        
    //     setShowMessage(true);
       
        
    //     setcart([]);
    //     // setTimeout(() => {
    //     //     setShowMessage(false);
    //     //     navigate('/');
    //     // }, 3000);
    // };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Checkout Page</h1>
            {/* {showMessage && (
                <div className="alert alert-success">
                    <Confetti />
                    <h4>Success!</h4>
                    <p>Your payment was successful. The cart has been cleared.</p>
                </div>
            )} */}
            <ul className="list-group mb-3">
                {cart.map((product, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{product.title}</span>
                        <span className="badge bg-primary rounded-pill">{product.price}</span>
                    </li>
                ))}
            </ul>
            <p className="h5">
                Total Price: <span className="fw-bold">{cart.reduce((total, product) => total + parseInt(product.price), 0)}</span>
            </p>
            <div className="mt-4">
                <Link to="/userinfo" className="btn btn-success me-2 mb-3 ">For Details</Link>
                
            </div>
        </div>
    );
}

export default Checkout;
