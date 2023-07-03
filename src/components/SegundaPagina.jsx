
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { getFechas } from "../scripts/getFechas";
import Fechas from "./Fechas";



function SegundaPagina() {

  const [fechas, setFechas] = useState([])

  useEffect(() => {
    
    async function getData(){
      setFechas(await getFechas())
      
    }; 
    getData()
  
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
        
        <Fechas fechas={fechas}></Fechas>
        
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
