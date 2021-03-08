import MainComponent from "./components/MainComponent";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <MainComponent />
      </Router>
    </div>
  );
};

export default App;
