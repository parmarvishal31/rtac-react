import Header from "./components/Header";
import StickyFooter from "./components/StickyFooter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow relative overflow-auto">
        <Header />
        <main className="pt-20 pb-20 lg:pb-44 overflow-auto"> {/* Add top padding to accommodate the fixed header */}
          {/* Your main content here */}
        </main>  
      </div>
      <footer className="lg:hidden fixed bottom-0 left-0 right-0">
        <Footer />
      </footer>
      <footer className="hidden lg:block sticky bottom-20 lg:bottom-40 left-0 right-0">
        <StickyFooter />
      </footer>
    </div>
  );
}

export default App;
