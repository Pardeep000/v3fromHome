import { useEffect, useState } from "react";
import MeQuery from "src/graphql/query/auth/me";
import { useQuery } from "@apollo/client";

const useAuth = () => {
  const { data: meQueryResult, error: meQueryError } = useQuery(MeQuery, {
    fetchPolicy: "network-only",
  });
  const [, setUserData] = useState("");

  useEffect(() => {
    if (meQueryResult && meQueryResult.me) {
      setUserData(meQueryResult.me);
    }
  }, [meQueryResult]);

  useEffect(() => {
    if (meQueryError?.message) {
      setUserData(meQueryError?.message);
    }
  }, [meQueryError]);

  return false;
};

export default useAuth;
