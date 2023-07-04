import React from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { getCountryCodeFromFlagEmoji } from '../scripts/flagEmoji';
import datos from '../utils/events.json';
import "../Links.css"


function Fechas() {
  return (
    <ul className="events">
      {datos.map((e) => {
        const { date, city, venue, link, flag, sell } = e;
        
        return (
          <li data-aos="fade-up"  data-aos-once="true" className="event-list-day" key={crypto.randomUUID()}>
            <span className="event-date">{date}</span>
            <span className="event-city" >
              {city}
              <span className={`fi fi-${getCountryCodeFromFlagEmoji(flag).toLowerCase()}`}></span> 
            </span>
            <span className="event-venue">{venue}</span>
            <a href={link} className={`event-link ${sell === "SOLD OUT" ? "soldout" : "comprar"}`}>
              {`${sell}!`}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Fechas;