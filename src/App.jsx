import { useState } from "react";
// import { BrowserRouter,Link, Router } from 'react-router-dom'
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { LoginPage } from "./pages/LoginPage";
import Cases from "./pages/Cases";
import Case from "./pages/Case";
import HospitalInfo from "./pages/HospitalInfo";
import AccidentState from "./context/AccidentState";
import SocketState from "./context/SocketState";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <SocketState>
                <AccidentState>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/login" element={<LoginPage />}></Route>
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
