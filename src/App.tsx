import "./App.css"
import LearnPage from "./LearnPage";
import PracticePage from "./PracticePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Learn</Link>
            </li>
            <li>
              <Link to="/practice">Practice</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/practice">
            <PracticePage />
          </Route>
          <Route path="/">
            <LearnPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
