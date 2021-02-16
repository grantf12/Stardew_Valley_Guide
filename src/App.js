import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./pages/home";
import pricing from "./pages/pricing";
import map from "./pages/map";
import calender from "./pages/calender";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={home} />
          <Route exact path="/pricing" component={pricing} />
          <Route exact path="/map" component={map} />
          <Route exact path="/calender" component={calender} />
        </Wrapper>
       </div>
    </Router>

  );
}

export default App;
