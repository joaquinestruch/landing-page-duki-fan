import "./BandasRojas.css";

function DukiAlert() {
  const texto = ` \n \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n \n `;


  return (
    <>
      <div class="slider-container up" >
        <div class="slider">
          <span style={{color:"transparent"}}>-</span>
          <div class="slide">{texto}</div>
          <span style={{color:"transparent"}}>-</span>
          <div class="slide">{texto}</div>
          <span style={{color:"transparent"}}>-</span>
          <div class="slide">{texto}</div>
          <span style={{color:"transparent"}}>-</span>
          <div class="slide">{texto}</div>
          <span style={{color:"transparent"}}>-</span>
        </div>
      </div>

      <div class="slider-container down">
      <div class="slider">
          <span style={{color:"transparent"}}>-</span>
          <div class="slide">{texto}</div>
          <span style={{color:"transparent"}}>-</span>
          <div class="slide">{texto}</div>
          <span style={{color:"transparent"}}>-</span>
          <div class="slide">{texto}</div>
          <span style={{color:"transparent"}}>-</span>
          <div class="slide">{texto}</div>
          <span style={{color:"transparent"}}>-</span>
        </div>
      </div>
    </>
  );
}

export default DukiAlert;

