import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./pages/MainLayout";
import HomePage from "./pages/HomePage";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Facilities from "./pages/Facilities";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Facilities" element={<Facilities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
