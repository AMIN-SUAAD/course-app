import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let sum = 0;
    const totalPrice = props.courseNumber.reduce((total, course) => total+course.price, 0);
    sum = sum+ totalPrice;
    return (
        <div id = 'cart'>
     <h2>Order Summary</h2>       

    <h3>Number of Course: {props.courseNumber.length}</h3>
    <h4>Total Price: {sum}</h4>

        </div>
    );
};

export default Cart;