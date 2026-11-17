import currencies from "./data/currencies.ts";
import { useState } from "react";
import "./App.css";

export default function App() {
  // On créer un state et on passe sa valeur par défaut
  // au premier élément de notre tableau d'objet
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  // Je créer une varaible qui va contenir notre boucle .map
  // elle a pour but de générer tout les <li>
  // nous appellons directement la variable dans notre JSX
  const listCurrencies = currencies.map((currency) => {
    return (
      <li key={currency.code} className="currency">
        <button type="button" className="currency__button" onClick={() => setSelectedCurrency(currency)}>
          {currency.description}
        </button>
      </li>
    );
  });

  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">Converter</h1>
        <div className="header__value">1 euro</div>
      </header>

      {/* Nous appelons notre boucle .map pour générer nos li / bouton */}
      <ul className="currencies">{listCurrencies}</ul>

      <footer className="result">
        <div className="result__amount">{selectedCurrency.rate}</div>
        <div className="result__currency">{selectedCurrency.description}</div>
      </footer>
    </div>
  );
}
