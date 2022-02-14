import React from "react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();

  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place Order
      </button>
    </>
  );
}

export default Home;
