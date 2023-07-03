

import "../App.css"
import SocialMedia from "./SocialMedia/SocialMedia";
function Header() {


  return (
    <header className="header">
      <h1 className="titulo">
        <span className="D">D</span>
        <span className="U">U</span>
        <span className="K">K</span>
        <span className="I">I</span>
      </h1>
      
      <SocialMedia/>

      <img
        className={"duki-header"}
        src={"https://i.ibb.co/w4fR0Vz/duki-web.webp"}
        alt="Duki cantando en un recital"
        
      />

      <video
        src="../monumental3.webm"
        autoPlay
        loop
        muted
      ></video>
    </header>
  );
}

export default Header;
