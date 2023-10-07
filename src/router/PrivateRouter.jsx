import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const status = useSelector((state) => state.Main.status);

  console.log(status);

  return status ? children : <Navigate to={"/"} />;
};

export default PrivateRouter;
