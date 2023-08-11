import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// 
import Routes from "./routes";
const Routing = ({ LoggedIn }) => {
  if (LoggedIn) {
    return <Routes isLoggedIn={true} />;
  } else {
    return <Routes isLoggedIn={false} />;
  }
};

function App() {
  return (
    <>
      <Router>
        <Routing LoggedIn={true} />
      </Router>
    </>
  );
}

export default App;
