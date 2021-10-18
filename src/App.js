import "./App.css";

import Home from "./pages/home/Home/Home";
import Footer from "./pages/shared/Footer/Footer";
import Login from "./pages/authentication/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./pages/shared/Header/Header";
import Products from "./pages/shop/Products/Products";
import Team from "./pages/Team/Team";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/shop">
            <Products></Products>
          </Route>
          <Route exact path="/jointeam">
            <Team></Team>
          </Route>

          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
