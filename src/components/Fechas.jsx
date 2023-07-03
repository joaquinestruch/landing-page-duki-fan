import React from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { getCountryCodeFromFlagEmoji } from '../scripts/flagEmoji';

function Fechas({ fechas }) {
  return (
    <ul className="events">
      {fechas.map((e) => {
        const { date, city, venue, link, flag, sell } = e;
        {console.log(getCountryCodeFromFlagEmoji(flag))}
        return (
          <li data-aos="fade-up"  data-aos-once="true" className="event-list-day" key={date}>
            <span className="event-date">{date}</span>
            <span className="event-city" >
              {city}
              <span class={`fi fi-${getCountryCodeFromFlagEmoji(flag).toLowerCase()}`}></span> 
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