import { useState, useEffect } from "react";
//props w Memes() żeby odebrać licznik
export default function Memes(props) {
    const [meme, setMeme] = useState(null);

    useEffect(() => {
        const str = "https://meme-api.com/gimme/ProgrammerHumor"
        fetch(str).then(res => res.json()).then(data => setMeme(data.url));
    }, [props.licznik]); //mamy nawias [ ] bo to lista, mogę dodać więcej warunków. Jak licznik wzrosnie to useEffect zareaguje
    const imgStyle = {
        maxWidth: "150%",
        maxHeight: "300px",
    };
    if (!meme) return <p>Chwila, ładuję mema</p>;
    return (
        <div>
            <h3>Nagroda, łap mema:</h3>
            {<img src={meme} alt="True" style={imgStyle} />}
        </div>
    );
}
