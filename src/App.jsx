import Header from "./components/Header";
import "./App.css";
import SegundaPagina from "./components/SegundaPagina";
import Footer from "./components/Footer";


function App() {
  return (
<div className="snap-y snap-mandatory">
  <div className="snap-center h-full vh-screen">


    <div className="non-scrollable-container">
    <Header />
    </div>

    
  </div>
  <div className="snap-center h-full vh-screen">
    <div className="nscrollable-container">
    <SegundaPagina />
    </div>
    
  </div>
  <div className="snap-center h-full vh-screen">
    <Footer/>
  </div>
</div>
  );
}

export default App;
