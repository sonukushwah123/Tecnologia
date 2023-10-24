import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Careers from "./Pages/Careers";
import CareerCurrentOpening from "./Pages/CareerCurrentOpening";

import NewPage from "./Pages/NewPage";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>

{/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />

        <Route path="/career-job" element={<CareerCurrentOpening />} />
        <Route path="/:id"element={<NewPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
