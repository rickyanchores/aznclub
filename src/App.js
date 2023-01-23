import Home from "./Pages/Home/Home";
import Event from "./Pages/Events/Event";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Router>
       <Nav />
       <Routes>
         <Route exact component={Home}/>
       </Routes>
       <Home />
       <Event />
     </Router>
    </div>
  );
}

export default App;
