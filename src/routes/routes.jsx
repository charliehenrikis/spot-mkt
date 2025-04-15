import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "../components/login/login";
import DashboardPage from "../pages/dashboard";
import ProtectedRoute from "../middleware/ProtectedRoute";
import NotFound from "../components/notfound/notfound";

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
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;