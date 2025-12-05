import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./Pages/Contact";
import Layout from "./components/Layout";
import Home from "./pages/Home";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
