import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Faq from "./pages/Faq/Faq";
import Library from "./pages/Library/Library";
import Layout from "./components/Layout/Layout";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import About from "./pages/About/About";
import { Provider } from "react-redux";
import { store } from "./redux/store";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/library" element={<Library />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
