import Header from "@components/Header";
import Footer from "@components/Footer";
import "@assets/css/layout.css"

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;