import { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
        <Route path="/" />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/customsoftware" />
        <Route path="/mobileapps" />
        <Route path="/websites" />
        <Route path="/revolution" />
        <Route path="/about" />
        <Route path="/contact" />
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
