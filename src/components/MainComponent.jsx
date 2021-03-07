import SecondaryHead from "./SecondaryHead";
import BrandHeader from "./BrandHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrimaryHead from "./PrimaryHead";
import HomeBlog from "./HomeBlog";

const MainComponent = () => {
  return (
    <div>
      <SecondaryHead />
      <BrandHeader />
      <Router>
        <PrimaryHead />
        <Switch>
          <Route path="/" component={HomeBlog}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default MainComponent;
