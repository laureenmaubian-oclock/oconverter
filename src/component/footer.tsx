
import { useState } from "react"

interface FooterProps {
    rate: number;
    description: string;
}

export default function Footer( props: FooterProps) {
    const [isRounded, setIsRounded] = useState(false);




    return (
        <footer className="result">
            <div className="result__amount">{isRounded ? props.rate : props.rate.toFixed(2)}</div>
            <div className="result__currency">{props.description}</div>

            <button
            type ="button"
            className="result__button"
            onClick={() => {
                setIsRounded(!isRounded);
            }}
            >

            {isRounded ? "Afficher le taux" : "Cacher le taux"}

            </button>

        </footer>
    );
}
