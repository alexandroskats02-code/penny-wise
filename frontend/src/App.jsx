import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import SignUp from './pages/SignUp';
import LoginPage from './pages/LoginPage';
import CourseCatalog from './pages/CourseCatalog'
import Dashboard from './pages/Dashboard'
import ErrorPage from './pages/ErrorPage';
import './App.css';

function App() {
return (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/coursecatalog" element={<CourseCatalog />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/errorpage" element={<ErrorPage />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  </Router>
);
}

export default App;
