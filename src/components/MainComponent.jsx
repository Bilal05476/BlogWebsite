import SecondaryHead from "./SecondaryHead";
import BrandHeader from "./BrandHeader";
import { Switch, Route } from "react-router-dom";
import PrimaryHead from "./PrimaryHead";
import HomeBlog from "./HomeBlog";
import Blog from "./Blog";
import ReactJSBlog from "./ReactJSBlog";
import MernBlog from "./MernBlog";
import FirebaseBlog from "./FirebaseBlog";
import BootsBlog from "./BootsBlog";
import About from "./About";
import Contact from "./Contact";

const MainComponent = () => {
  return (
    <div>
      <SecondaryHead />
      <div style={{ marginTop: "3rem" }}>
        <BrandHeader />
        <PrimaryHead />
        <Switch>
          <Route exact path="/" component={HomeBlog}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/reactjs" component={ReactJSBlog}></Route>
          <Route exact path="/mernstack" component={MernBlog}></Route>
          <Route exact path="/firebase" component={FirebaseBlog}></Route>
          <Route exact path="/bootstrap" component={BootsBlog}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default MainComponent;
