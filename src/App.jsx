import { useEffect, useState } from "react";
// import { BrowserRouter,Link, Router } from 'react-router-dom'
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import Cases from "./pages/Cases";
import Case from "./pages/Case";
import HospitalInfo from "./pages/HospitalInfo";
import AccidentState from "./context/AccidentState";
import SocketState from "./context/SocketState";
import Accident from "./pages/Accident";
function App() {
    const [token, setToken] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("hospitalToken");
        if (token) {
            setToken(token);
        }
        if (!token) {
            navigate("/login");
        }
    }, []);

    return (
        <>
            <SocketState>
                <AccidentState>
                    {token && <Header />}
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route
                            path="/login"
                            element={<LoginPage setToken={setToken} />}
                        ></Route>
                        <Route path="/cases" element={<Cases />}></Route>
                        <Route path="/case" element={<Case />}></Route>
                        <Route
                            path="/hospitalInfo"
                            element={<HospitalInfo />}
                        ></Route>
                    </Routes>
                </AccidentState>
            </SocketState>
        </>
    );
}

export default App;
