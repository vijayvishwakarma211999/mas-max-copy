import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
const Routing = ({ token }) => {
  if (token) {
    return <Routes isLoggedIn={true} />;
  } else {
    return <Routes isLoggedIn={false} />;
  }
};

function App() {
  return (
    <>
      <Router>
        <Routing token={true} />
      </Router>
    </>
  );
}

export default App;
