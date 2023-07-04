
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Fechas from "./Fechas";



function SegundaPagina() {

  useEffect(() => {
    
    AOS.init(); 
    AOS.refresh();
    return () => {
      AOS.refresh();
    };

  }, []);
  
  return (
    <article className="segunda-pagina">
      <div className="fechas-eventos">
        <h2  data-aos="fade-down"  data-aos-once="true" className="">FECHAS</h2>
        
        <Fechas></Fechas>
        
      </div>

      <img
        className="fondo-segunda-pagina"
        src="https://i.ibb.co/cFR4gzn/duki-fondo-2.webp"
        alt=""
      />
    </article>
  );
}

export default SegundaPagina;
