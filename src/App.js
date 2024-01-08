import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./pages/Navbar";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route
            path="/profile"
            element={<Profile  />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<h1>Page not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
