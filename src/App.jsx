import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Budget from "@pages/Budget";
import Contact from "@pages/Contact";
import Dashboard from "@pages/Dashboard";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Notfound from "@pages/NotFound";
import Order from "@pages/Order";
import RecoveryPass from "@pages/RecoveryPass";
import SendEmail from "@pages/SendEmail";
import SignUp from "@pages/SignUp";
import Track from "@pages/Track";


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/budget" element={<Budget />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Order" element={<Order />} />
                    <Route path="/recovery-password" element={<RecoveryPass />} />
                    <Route path="/send-email" element={<SendEmail />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/track-shipping" element={<Track />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;