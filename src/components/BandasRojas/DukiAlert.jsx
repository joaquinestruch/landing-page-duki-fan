import "./BandasRojas.css";

function DukiAlert() {
  const texto = `\n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n RIVER SOLD OUT \n`;

  return (
    <>
      <div class="slider-container up" >
        <div class="slider">
          <div class="slide">{texto}  </div>
          <div class="slide">{texto}</div>
          <div class="slide">{texto}</div>
        </div>
      </div>

      <div class="slider-container down">
        <div class="slider">
          <div class="slide"> {texto}</div>
          <div class="slide">{texto}</div>
          <div class="slide">{texto}</div>
        </div>
      </div>
    </>
  );
}

export default DukiAlert;
