import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Academics from "../pages/Academics";
import Admissions from "../pages/Admissions";
import Gallery from "../pages/Gallery";
import News from "../pages/News";
import Contact from "../pages/Contact";
import Dashboard from "../pages/admin/Dashboard";
import Posts from "../pages/admin/Posts";
import CreatePost from "../pages/admin/CreatePost";
import Login from "../pages/admin/Login";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoutes";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/posts"
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/create"
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;