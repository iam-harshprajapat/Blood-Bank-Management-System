import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './components/Routes/ProtectedRoute';
import PublicRoute from './components/Routes/PublicRoute';
import './index.css';
import Donar from './pages/dashboard/Donar';
import Hospitals from './pages/dashboard/Hospitals';
import OrganisationPage from './pages/dashboard/OrganisationPage';
import Consumer from './pages/dashboard/Consumer';
import Donation from './pages/Donation';
import Analytics from './pages/dashboard/Analytics';
import DonarList from './pages/Admin/DonarList';
import HospitalList from './pages/Admin/HospitalList';
import OrgList from './pages/Admin/OrgList';
import AdminHome from './pages/Admin/AdminHome';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path='/'
          element={
            <PublicRoute>
              <LandingPage />
            </PublicRoute>
          }
        />
        <Route
          path='/home'
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/donar'
          element={
            <ProtectedRoute>
              <Donar />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin'
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        <Route
          path='/donar-list'
          element={
            <ProtectedRoute>
              <DonarList />
            </ProtectedRoute>
          }
        />
        <Route
          path='/hospital-list'
          element={
            <ProtectedRoute>
              <HospitalList />
            </ProtectedRoute>
          }
        />
        <Route
          path='/org-list'
          element={
            <ProtectedRoute>
              <OrgList />
            </ProtectedRoute>
          }
        />
        <Route
          path='/analytics'
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path='/consumer'
          element={
            <ProtectedRoute>
              <Consumer />
            </ProtectedRoute>
          }
        />
        <Route
          path='/donation'
          element={
            <ProtectedRoute>
              <Donation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital"
          element={
            <ProtectedRoute>
              <Hospitals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orgnaisation"
          element={
            <ProtectedRoute>
              <OrganisationPage />
            </ProtectedRoute>
          }
        />

        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
