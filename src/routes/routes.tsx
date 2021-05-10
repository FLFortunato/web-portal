import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/header";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import { PrivateRoute } from "./privateRoute";

export const MainRoutes = () => {
  const routes = [
    { path: "/", component: () => <h1>OPA</h1>, isPrivate: true, exact: true },
  ];

  const routesWithoutNavBar = [
    { path: "/register", component: RegisterPage },
    { path: "/login", component: LoginPage },
  ];
  return (
    <BrowserRouter>
      <Switch>
        {routesWithoutNavBar.map((item) => {
          return <Route path={item.path} component={item.component} />;
        })}
        <div>
          <Header />
          {routes.map((page) => {
            return page.isPrivate ? (
              <PrivateRoute
                key={page.path}
                component={page.component}
                exact={page.exact}
              />
            ) : (
              <Route
                path={page.path}
                component={page.component}
                key={page.path}
                exact={page.exact}
              />
            );
          })}
        </div>
      </Switch>
    </BrowserRouter>
  );
};
