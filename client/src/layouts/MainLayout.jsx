import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout({ children }) {
  return (
    <div className="app-layout">
      <header>
        <Navbar />
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;