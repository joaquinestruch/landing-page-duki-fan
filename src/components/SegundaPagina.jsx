import events from "../utils/events.json";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

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
        <ul className="events">
          {events.map((e) => {
            return (
              <li key={crypto.randomUUID()} data-aos="fade-up" data-aos-once="true" >
                <div className="event-list-day">
                  <span>{e.month}</span>
                  <span>{e.day}</span>
                </div>
                <div>{e.name}</div>
                <a href={e.href} target="_blank">
                  Comprar ahora
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <img
        className="fondo-segunda-pagina"
        src="https://ambiente.com.ar/wp-content/uploads/2023/02/GA53820-1.jpg"
        alt=""
      />
    </article>
  );
}

export default SegundaPagina;
