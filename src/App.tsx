import currencies from "./data/currencies.ts";
import { useState } from "react";
import "./App.css";
import Footer from "./component/footer.tsx";
import Currency from "./component/Currency.tsx";

export default function App() {
  // On créer un state et on passe sa valeur par défaut
  // au premier élément de notre tableau d'objet
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  // Je créer une varaible qui va contenir notre boucle .map
  // elle a pour but de générer tout les <li>
  // nous appellons directement la variable dans notre JSX
  const listCurrencies = currencies.map((currency) => {
    return (
    <Currency
      key={currency.code}
      currency={currency}
      onSelect={setSelectedCurrency}
    />
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


        <Footer currency={selectedCurrency} />

    </div>
  );
}
