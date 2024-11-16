import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/footer/footer";
import Header from "./component/header/Header";
import Home from "./pages/home";
import ContactPage from "./component/contact-us/contact-us";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
