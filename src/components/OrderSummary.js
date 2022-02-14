import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary(props) {
  const navigate = useNavigate();

  return (
    <>
      <div>Order Confirmed!!!</div>
      <button onClick={() => navigate("/")}>Go Back</button>
    </>
  );
}

export default OrderSummary;
