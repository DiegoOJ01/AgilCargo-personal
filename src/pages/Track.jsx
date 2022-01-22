import model4 from "@assets/img/model4.png";
import "@assets/css/track.css";

const Track = () => {
    return (
        <div className="track-container">
            <div className="form-container">
                <div className="text-content">
                    <h2>¿Quieres saber donde está tu envío?</h2>
                </div>
                <form action="" className="form-track">
                    <div className="input-track">
                        <input type="text" name="reference-shipping" placeholder="Ingresa la referencia de tu envío." className="input-shipping"/> <i className="bi bi-search"></i>
                    </div>
                    <button className="btn-track">Rastrear</button>
                </form>
            </div>
            <div className="img-box">
                <img src={model4} alt="img" className="img-track" draggable="false" />
            </div>
        </div>
    );
};

export default Track;