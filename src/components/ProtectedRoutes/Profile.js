import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Utils/auth";

function Profile(props) {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div>
      Welcome {auth.user}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
