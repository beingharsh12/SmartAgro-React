import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header>
        <Navbar />
      </header>

      <main
        id="main-content"
        tabIndex="-1"
        className="min-h-screen w-full bg-green-100 flex flex-col items-center"
      >
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
