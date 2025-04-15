import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "../components/login/login";
import DashboardPage from "../pages/dashboard";
import ProtectedRoute from "../middleware/ProtectedRoute";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route 
                    path="/dashboard" 
                    element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    } 
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;