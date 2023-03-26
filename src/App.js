import Home from "./Pages/Home/Home";
import Event from "./Pages/Events/Event";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from "./Pages/Footer/Footer";


function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route exact component={Home}/>
       </Routes>
       <Home />
       <Event />
       <Footer />
     </Router>
    </div>
  );
}

export default App;
