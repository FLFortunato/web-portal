import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const hasToken = localStorage.getItem("@token");
  const decoded: any = hasToken && jwtDecode(hasToken || "");

  useEffect(() => {
    (async () => {
      try {
        if (decoded && new Date(decoded.exp * 1000) < new Date()) {
          const newToken = await axios.put(
            "http://localhost:8080/api/v1/token/refresh",
            {
              oldToken: hasToken,
            }
          );
          await localStorage.setItem(
            "@token",
            newToken.data.access_token || ""
          );
          console.log(newToken, "--------");
        }
      } catch (error) {
        setIsValid(false);
      }
    })();
    return () => {};
  }, [hasToken, decoded]);

  return (
    <Route
      {...rest}
      render={(props) =>
        isValid ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};
