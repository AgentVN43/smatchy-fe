import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import line from "../public/line_bg.svg";
import Footer from "./components/footer";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Main content */}
        <div className="">
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
