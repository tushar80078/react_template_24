import { Route, Routes, Navigate } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import AuthenticatedRoutes from "./AuthRoutes";
import Unauthorized from "../pages/public/Unauthorized";

const Root = () => {
  const isAuthenticated = false;
  const userRole = 'admin'; // Replace with actual user role

  return (
    <Routes>
      {isAuthenticated ? (
        <>
        {/**-------------  Authenticated Routes -------------**/}
        <Route path="/app/*" element={<AuthenticatedRoutes userRole={userRole} />} />
        </>
      ) : (
        <>
          {/**-------------  Public Routes -------------**/}
          <Route path="/*" element={<PublicRoutes />} />
        </>
      )}

      {/**-------------  Catch All Unmatched Routes -------------**/}
      <Route path="/*" element={<Unauthorized />} />
      <Route path="/*" element={<Navigate to="/unauthorized" />} />
    </Routes>
  );
};

export default Root;
