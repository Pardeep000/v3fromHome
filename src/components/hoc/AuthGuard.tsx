import type { FC, ReactNode } from "react";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import useAuth from "src/hooks/useAuth";
import AuthLayout from "src/layout/AuthLayout";
import Login from "src/pages/auth/login/Login";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const auth = useAuth() as any;
  const location = useLocation();

  const [requestedLocation, setRequestedLocation] = useState<string | null>();

  if (!auth) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }

    return (
      <AuthLayout>
        <Login />
      </AuthLayout>
    );
  }
  // Redirect the user to the originally requested protected route
  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default AuthGuard;
