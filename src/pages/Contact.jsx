import "@assets/css/contact.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <form action="">
                <div className="title-contact">
                    <h2>Te contactamos</h2>
                </div>
                <div className="inputs-contact">
                    <input type="text" placeholder="Ingresa Tu nombre completo" className="input-contact1 input-contact" />
                    <input type="text" placeholder="Ingresa tu numero de telefono" className="input-contact2 input-contact" />
                    <input type="text" placeholder="Ingresa tu correo electronico" className="input-contact3 input-contact" />
                    <textarea name="description" id="description" placeholder="Cuentanos sobre que te gustaria consultar" className="input-contact4 input-contact desc-contact"></textarea>
                </div>
                <div className="btn-box-contact">
                    <button>Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;