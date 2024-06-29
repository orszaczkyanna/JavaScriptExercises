import React, {useState, useRef} from "react";
import styles from "./CompoundInterestCalculator.module.css";

function CompoundInterestCalculator(){

    const [principal, setPrincipal] = useState(0);
    const [rate, setRate] = useState(0);
    const [years, setYears] = useState(0);
    const totalAmountRef = useRef(null);

    function calculate(){
        let priN = Number(principal);
        let raN = Number(rate / 100);
        let yeN = Number(years);

        if (priN < 0 || isNaN(priN)){
            priN = 0;
            setPrincipal(0)
        }
        if (raN < 0 || isNaN(raN)) {
            raN = 0;
            setRate(0)
        }
        if (yeN < 0 || isNaN(yeN)) {
            yeN = 0;
            setYears(0)
        }

        const result = priN * Math.pow(1 + (raN / 1), 1 * yeN);
        totalAmountRef.current.textContent = result.toLocaleString("en-US",
                                                                    {style: "currency",
                                                                    currency: "USD"});
    }

    return(
        <div className={styles.calculator}>
            <h1>Interest Calculator</h1>

            <form>
                <label htmlFor="principal">Principal Amount</label>
                <input
                    type="number"
                    id="principal"
                    onChange={(e) =>  setPrincipal(e.target.value)}
                    value={principal}/>

                <label htmlFor="rate">Interest Rate</label>
                <input
                    type="number" 
                    id="rate"
                    onChange={(e) => setRate(e.target.value)}
                    value={rate}/>

                <label htmlFor="years">Years</label>
                <input
                    type="number"
                    id="years"
                    onChange={(e) => setYears(e.target.value)}
                    value={years} />

                <button type="button" onClick={calculate}>Submit</button>

                <p className={styles.total}>Total:
                    <span ref={totalAmountRef} className={styles.totalAmount}>$0.00</span>
                </p>
            </form>
        </div>
    )
}

export default CompoundInterestCalculator