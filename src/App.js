import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogDash from "./pages/BlogDash";
import BlogPost from "./pages/BlogPost";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogdash" element={<BlogDash />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
