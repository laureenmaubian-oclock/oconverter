import type { Currency } from "../data/currencies.ts";
import { useState } from "react"

interface FooterProps {
    currency: Currency;
}

export default function Footer({ currency }: FooterProps) {
    const [isRounded, setIsRounded] = useState(false);




    return (
        <footer className="result">
            <div className="result__amount">{isRounded ? currency.rate.toFixed(2) : currency.rate}</div>
            <div className="result__currency">{currency.description}</div>

            <button type= "button" onClick={() => setIsRounded(!isRounded)}>
                {isRounded ? 'Afficher le taux exact' : 'Arrondir le taux'}
            </button>
        </footer>
    );
}
