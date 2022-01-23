const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-contacts">
                <ul className="list-contacts">
                    <li>
                        <i className="bi bi-envelope-fill"></i>&nbsp;&nbsp;<a href="mailto:Info@agilcargo.com" target="_blank" className="footer-links">Info@agilcargo.com</a> 
                    </li>
                    <li>
                        <i className="bi bi-geo-alt-fill"></i>&nbsp;&nbsp;Calle 0 #00-00 Colombia
                    </li>
                    <li>
                        <i className="bi bi-telephone-fill"></i>&nbsp;&nbsp;+57 123 456 7890
                    </li>
                </ul>
            </div>

            <div className="copy">
                &copy; Copyright 2021, Grupo 4
            </div>

            <div className="container-social-media">
                <ul className="list-social-media">
                    <li>
                        <a href="http://instagram.com" target={"_blank"} className="social-link">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="http://linkedin.com" target={"_blank"} className="social-link">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="http://twitter.com" target={"_blank"} className="social-link">
                            <i className="bi bi-twitter"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;