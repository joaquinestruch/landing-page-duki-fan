import "../App.css";
import SocialMedia from "./SocialMedia/SocialMedia";
import DukiAlert from "./BandasRojas/DukiAlert";




function Header() {

  return (
    <header className="header" style={{ backgroundColor: "transparent" }}>
      
      <DukiAlert></DukiAlert>
{/*       
      <h1 className="titulo">
        <span className="D">D</span>
        <span className="U">U</span>
        <span className="K">K</span>
        <span className="I">I</span>
      </h1> */}

    
       <img
        className={"duki-header"}
        src={"https://i.ibb.co/LCqKVbg/duki3.png"}
        alt="Duki cantando en un recital"
      />  

    

      <video src="../monumental3.webm" autoPlay muted loop>
        <img src="https://i.ibb.co/6bG4p4g/xd.webp" alt="Video Background"/>
      </video>

      {/* <div className="imgs-fondo"> 
        <img src="https://www.ellitoral.com/images/2023/06/30/VR6Zl-B59_1300x655__1.jpg" alt="" />
      </div> */}

    </header>
  );
}

export default Header;
