import React from "react";

const PrivatePage = ({ children }) => {
  const isAuth = localStorage.getItem("token");

  if (!isAuth) {
    window.location.href = "/login";
  } else {
    return children;
  }
};

export default PrivatePage;
