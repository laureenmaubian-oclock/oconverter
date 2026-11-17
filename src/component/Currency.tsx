import type { ICurrency } from '../data/currencies';

interface CurrencyProps {
  currency: ICurrency;
  onSelect: (currency: ICurrency) => void;
}

export default function Currency({ currency, onSelect }: CurrencyProps) {
  return (
    <li className="currency">
      <button
        type="button"
        className="currency__button"
        onClick={() => onSelect(currency)}
      >
        {currency.description}
      </button>
    </li>
  );
}





