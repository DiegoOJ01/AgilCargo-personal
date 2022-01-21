import { BrowserRouter, Route, Router } from "react-router-dom";
import Home from "./pages/Home";


const App = () => {
    return (
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Home />} />
            </Router>
        </BrowserRouter>
    );
}

export default App;