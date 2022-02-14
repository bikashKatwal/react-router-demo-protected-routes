import React from "react";
import { useParams } from "react-router-dom";

function UserDetails(props) {
  const { userId } = useParams();
  return <div>User Details of {userId}</div>;
}

export default UserDetails;
