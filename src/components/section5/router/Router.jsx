import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />

      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((item) => (
              <Route
                key={item.path}
                exact={item.exact}
                path={`${url}${item.path}`}
              >
                {item.children}
              </Route>
            ))}
          </Switch>
        )}
      />

      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routes.map((item) => (
              <Route
                key={item.path}
                exact={item.exact}
                path={`${url}${item.path}`}
              >
                {item.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
