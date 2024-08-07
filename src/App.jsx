import './App.css'

/* COMPONENTS */
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio/Portfolio"
import Experience from "./components/Experience"
import About from "./components/About"
import Footer from "./components/Footer"

export default function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Skills />
            <Portfolio />
            <Experience />
            <About />
            <Footer />
        </>
    )
}