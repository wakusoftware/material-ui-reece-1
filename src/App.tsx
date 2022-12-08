import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./components/pages/ContactPage";
import LandingPage from "./components/pages/LandingPage";
import SandBoxPage from "./components/pages/SandBoxPage";
import ServicesPage from "./components/pages/Services";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";

export default function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <div>
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/customsoftware" />
        <Route path="/mobileapps" />
        <Route path="/websites" />
        <Route path="/revolution" />
        <Route path="/about" element={<SandBoxPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/estimate" />
      </Routes>
      <Footer
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </div>
  );
}
