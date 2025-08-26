import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Connect from "../pages/Connect";
import NotFound from "../pages/NotFound";

function AppRouting() {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
}

export default AppRouting;