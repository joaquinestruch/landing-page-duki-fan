

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
        src={"https://media.discordapp.net/attachments/1108024656973275138/1124262467409821716/image.png?width=1202&height=676"}
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
