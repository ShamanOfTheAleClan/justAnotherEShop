import React from "react";
import Product from "./pages/ProductsPage/";
import Cart from "./pages/Cart";
import Orders from "./pages/OrdersPage";
import Nav from "./components/Nav";
import Container from "./components/shared/Container/Container";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./routes";

function App() {
   return (
      <BrowserRouter>
         <Container>
            <Nav />
            <main>
               <Switch>
                  {routes.map((route, index) => (
                     <Route
                        key={index}
                        path={route.path}
                        component={route.component}
                        exact={route.isExact}
                     />
                  ))}
                  <Redirect from="*" to="/" />
               </Switch>
            </main>
            <footer>2020 Copyright</footer>
         </Container>
      </BrowserRouter>
   );
}

export default App;
