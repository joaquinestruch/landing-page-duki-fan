import Header from "./components/Header";
import "./App.css";
import SegundaPagina from "./components/SegundaPagina";


function App() {
  return (
<div className="snap-y snap-mandatory">
  <div className="snap-center h-full vh-screen">
    <Header />
  </div>
  <div className="snap-center h-full vh-screen">
    <SegundaPagina />
  </div>
</div>
  );
}

export default App;
