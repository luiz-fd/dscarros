import "./style.css";
import CARRO from "../../assets/carcard.png";

export default function Cardcar() {
  return (
    <div className="dsct-container-cars">
      <h1>Venha nos visitar</h1>
      <div className="dsct-container-card-car">
        <img src={CARRO} alt="CARRO"></img>
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="dsct-container-card-car">
        <img src={CARRO} alt="CARRO"></img>
        <p>Lorem ipsum dolor</p>
      </div>
    </div>
  );
}
