import "@assets/css/budget.css";
import model3 from "@assets/img/model3.png";

const Budget = () => {
    return (
        <div className="budget-container">
            <div className="img-budget-box">
                <img src={model3} alt="img" draggable="false" className="img-budget" />
            </div>
            <div className="form-budget">
                <div className="text-budget">
                    <h2>Cotiza aquí tu envío</h2>
                </div>
                <form action="">
                    <select name="point-origin" id="point-origin" className="selects-budget">
                        <option value="" hidden>Punto de origen</option>
                    </select>

                    <select name="point-end" id="point-end" className="selects-budget">
                        <option value="" hidden>Punto de destino</option>
                    </select>

                    <select name="vehicles-to-use" id="vehicles-to-use" className="selects-budget select-bottom">
                        <option value="" hidden>Vehiculos a usar</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                    </select>
                    <div className="buttons-budget">
                        <button type="reset" className="btn-budget">Borrar datos</button>
                        <button type="submit" className="btn-budget">Cotizar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Budget;