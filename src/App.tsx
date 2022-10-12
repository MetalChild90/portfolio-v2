import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Navbar from "./componenets/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Knowledge from "./pages/Knowledge";
import Contact from "./pages/Contact";

import { Provider } from "./context/AppContext";

function App() {
  return (
    <Router>
      <Provider>
        <Header />
        <div className="wrapper">
          <Navbar />
          <main className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
