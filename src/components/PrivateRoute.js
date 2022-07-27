import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem("auth");

  return auth ? (
    children
  ) : (
    <Navigate to="/Login" replace={true} state={{ errorMsg: "You must login to acces this page"}} />
  );
};

export default PrivateRoute;

