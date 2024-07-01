import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({cart, setcart}) => {
    return (
        <>
            <div className="container my-5  " style={{width: "54%"}}>
                {
                            cart.length==0 ?(
                                <>
                                <div className='text-center'>
                                  <h1>Your Cart is Empty</h1>
                                  <Link to={"/"} className='btn btn-warning'>Continue Shopping...</Link>
                                </div>
                                </>
                                        ):
                
                cart.map((product) => {
                    return (
                        <>
                            <div className="card mb-3  my-5 " style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-5">
                                        <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <button className='btn btn-primary mx-3'>{product.price} {" "} ₹</button>
                                             <button 
                                            
                                             className='btn btn-warning'>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}

              

            </div>
            {
                    cart.length!=0 && (
                        <div className="container text-center my-5 " style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // flexDirection: "column",
                            // width: "54%"
                        }}>
                            <button className='btn btn-warning mx-5 '>checkout</button>
                            <button onClick={()=>setcart([])} className='btn btn-danger'>clear cart</button>
            
                        </div>
                    )
                }
            
        </>
    )
}

export default Card