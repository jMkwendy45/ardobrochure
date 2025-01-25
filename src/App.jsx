import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/footer/footer";
import Header from "./component/header/Header";
import Home from "./pages/home";
import ContactPage from "./component/contact-us/contact-us";
import BrandIndex from "./component/brand-index";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/brand-index" element={<BrandIndex />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
