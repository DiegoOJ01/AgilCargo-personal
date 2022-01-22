import "@assets/css/notfound.css";

const Notfound = () => {
    return (
        <div className="notfound">
            <div className="notfoundcont">
                <h1>Pagina no encontrada o no es valida la url</h1>
                <a href="/" className="link-notfound">Regresar al inicio</a>
            </div>
        </div>
    );
};

export default Notfound;