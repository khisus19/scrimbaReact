import React from "react";
import Info from "./components/Info.jsx"
import About from "./components/About.jsx"
import Interest from "./components/Interest.jsx"
import Footer from "./components/Footer.jsx"
import "./App.css"

export default function App() {
    return(
        <div className="main">
            <div className="card-container">
                <Info />
                <About />
                <Interest />
                <Footer />
            </div>
        </div>
    )
}