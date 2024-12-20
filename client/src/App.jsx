import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Cambia BrowserRouter por HashRouter
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TasksContext";
import NavBarTop from "./components/NavBarTop";
import Footer from "./components/Footer";
import NavBarBottom from "./components/NavBarBottom";
import TradingPage from "./pages/TradingPage"
import AboutUs from "./components/AboutUs";
import BpoDevelopmentPage from './pages/BpoDevelopmentPage'
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router> {/* Cambiado a HashRouter */}
          {/* <main className="container mx-auto px-3 lg:px-25 pt-20 pb-20"> */}
          <main className=" mx-auto">
            <NavBarTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tradingpage" element={<TradingPage />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/bpodevelopmentpage" element={<BpoDevelopmentPage />} />
              <Route path="/contactus" element={<ContactUs />} />
              
              {/* <Route path="/login" element={<h1><LoginPage /></h1>} />
              <Route element={<ProtectedRoute />}>
                <Route path="/register" element={<h1><RegisterPage /></h1>} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/add-task" element={<TaskFormPage />} />
                <Route path="/tasks/:id" element={<TaskFormPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route> */}
              <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
            <NavBarBottom />
          </main>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
