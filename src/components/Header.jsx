import "../App.css";
import SocialMedia from "./SocialMedia/SocialMedia";
import DukiAlert from "./BandasRojas/DukiAlert";




function Header() {

  return (
    <header className="header" style={{ backgroundColor: "transparent" }}>
      

      <h1 className="titulo">
        <span className="D">D</span>
        <span className="U">U</span>
        <span className="K">K</span>
        <span className="I">I</span>
      </h1>

      <SocialMedia />

      <img
        className={"duki-header"}
        src={"https://i.ibb.co/w4fR0Vz/duki-web.webp"}
        alt="Duki cantando en un recital"
      />

      <video src="../monumental3.webm" autoPlay muted loop>
        <img src="https://i.ibb.co/6bG4p4g/xd.webp" alt="Video Background"/>
      </video>
    </header>
  );
}

export default Header;
