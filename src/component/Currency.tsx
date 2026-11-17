import type { ICurrency } from '../data/currencies';
import { useState } from 'react';

interface CurrencyProps {
    currency: ICurrency;
    onSelect: (currency: ICurrency) => void;
}

export default function Currency({ currency, onSelect }: CurrencyProps) {

    const [isRateDisplayed, setIsRateDisplayed] = useState(false);

    return (
        <li className="currency">
            <button
                type="button"
                className="currency__button"
                onClick={() => onSelect(currency)}
            >
                {currency.description}
            </button>

            <button
                type="button"
                onClick={() => setIsRateDisplayed(!isRateDisplayed)}
            >
                {isRateDisplayed ? 'Cacher le taux' : 'Afficher le taux'}
            </button>

            {isRateDisplayed && (
                <span>{currency.rate.toFixed(2)}</span>
            )}
            
        </li>
    );
}





