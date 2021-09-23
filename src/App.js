// import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Project';

function App() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch(currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      default: 
        return <About />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
    
  );
}

export default App;
