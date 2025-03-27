import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import TopNavbar from './Components-AllPages/Navbar'
import Footer from './Components-AllPages/Footer';
import Golf from './GolfPage/Golf';

function App() {

    return (
        <>
            <TopNavbar />

            <BrowserRouter>
            <Routes>
                <Route path="/">
                        <Route element={<Home />} index />
                        <Route element={<Golf />} path="/Golf" />
                </Route>
            </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App
