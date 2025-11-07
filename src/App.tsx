import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import line from "../public/line_bg.svg";

function App() {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="relative container">
          {/* Line background */}
          <img
            src={line}
            alt=""
            className="absolute w-auto top-0 left-0 scale-[7.4] origin-top-left z-20 px-1.5"
          />
        </div>

        {/* Main content */}
        <div className="relative">
          <Header />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
