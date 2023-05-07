import { useContext } from "react";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

import { FcPhone } from "react-icons/fc";
import { FaMapMarker } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { CartCoontext } from "../Context/Context";

const Checkout = () => {
    const navigate = useNavigate();
    const Globalstate = useContext(CartCoontext);
    const state = Globalstate.state;
    const dispatch = Globalstate.dispatch;

    const handleComplete = async () => {
        toast.success("Order has been placed");
        localStorage.removeItem("usercart");
        state.map((item) => {
            dispatch({ type: "REMOVE", payload: item });
        });
        navigate("/");
    };
    const {
        state: { total },
    } = useLocation();
    return (
        <>
            <div className="checkout-page">
                <div className="address-form-wrapper">
                    <h2>Select delivery address</h2>
                    <div className="address-form">
                        <div className="form-header">
                            <FcPhone />
                            <p>contact details</p>
                        </div>
                        <input type="text" name="name" placeholder="name" />
                        <input
                            type="number"
                            name="phoneNumber"
                            placeholder="phone no."
                        />
                        <div className="form-header">
                            <FaMapMarker />
                            <p>address</p>
                        </div>
                        <input
                            type="text"
                            name="houseno"
                            placeholder="House no./Building name"
                        />
                        <input
                            type="text"
                            name="roadname"
                            placeholder="Road name/area name"
                        />
                        <input
                            type="text"
                            name="pincode"
                            placeholder="pincode"
                        />
                        <input
                            className="one-line"
                            type="text"
                            name="city"
                            placeholder="city"
                        />
                        <input
                            className="one-line"
                            type="text"
                            name="state"
                            placeholder="state"
                        />
                        <input
                            type="text"
                            name="nearby"
                            placeholder="nearby place"
                        />
                    </div>
                </div>
                <div className="payment-form-wrapper">
                    <h2>payment method</h2>
                    <div className="payment-form">
                        <img src="/checkoutMode.png" alt="" />
                    </div>
                    <div className="paymentDetails">
                        <p>Total</p>
                        <span>{total}</span>
                    </div>
                    <button onClick={handleComplete} className="place-order">
                        complete order
                    </button>
                </div>
            </div>
        </>
    );
};

export default Checkout;
