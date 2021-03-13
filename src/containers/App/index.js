import { Switch, Route } from "react-router-dom";
import Nav from "../../components/Nav";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";
import Contact from "../../components/Extras/Contact";
import SecondaryHead from "../../components/Extras/SecondaryHead";
import Footer from "../../components/Extras/Footer";

const App = () => {
  return (
    <div className="app">
      <SecondaryHead />
      <Nav />
      <Switch>
        <Route path="/" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
