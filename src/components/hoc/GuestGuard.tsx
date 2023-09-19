import type { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

import useAuth from "src/hooks/useAuth";
import AuthLayout from "src/layout/AuthLayout";

interface GuestGuardProps {
  children: ReactNode;
}

const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  const auth = useAuth();

  if (auth) {
    return <Navigate to="/" />;
  }

  return <AuthLayout>{children}</AuthLayout>;
};

export default GuestGuard;
