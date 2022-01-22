import model1 from "@assets/img/model1.png";
import "@assets/css/home.css";

const Home = () => {
    return (
        <div className="container-home">
            <div className="landing-container">
                <div className="descrip-container">
                    <div className="header-landing">
                        <h2>los envios mas <br /> rapidos y seguros del mercado.</h2>
                    </div>

                    <p className="descrip-landing">
                        Tenemos el personal mas calificado para <br />
                        la recogida, transporte y entrega de tus envios.
                    </p>

                    <div className="footer-landing">
                        <h2>¡Estamos a cargo!</h2>
                    </div>
                    <a href="https://api.whatsapp.com/send?phone=573015354224" className="call-to-action-btn" target={"_blank"}>Ven por mi producto</a>
                </div>
            </div>
            <div className="img-landing-box">
                <img src={model1} alt="img" draggable="false" className="img-landing" />
            </div>
        </div>
    );
};

export default Home;