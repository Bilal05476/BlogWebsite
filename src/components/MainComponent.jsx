import SecondaryHead from "./SecondaryHead";
import BrandHeader from "./BrandHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrimaryHead from "./PrimaryHead";

const MainComponent = () => {
  return (
    <div>
      <SecondaryHead />
      <BrandHeader />
      <Router>
        <Switch>
          <Route path="/" component={PrimaryHead}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default MainComponent;
