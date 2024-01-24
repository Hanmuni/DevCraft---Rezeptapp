"use client";

export default function DetailPage() {
    return (
        <section>
            <h2>Himbeer Kuchen</h2>
            <div>erstellt von:</div>
            <img className="recipe-img " src="./img/raspberry-pie.jpg" />
            <h3>Dieser Himbeerkuchen ist eine fruchtige und leichte Mehlspeise. Ein Rezept zur Kaffeejause.</h3>
            <div>
                <div>Schwierigkeitsgrad:</div>
                <div>Zubereitungszeit:</div>
            </div>
            <div>
                <PrintButton />
                <ShareButton />
                <FavoritButton />
            </div>
            <h3>Zutaten für: 16 Portionen</h3>
            <ul>
                <li></li>
            </ul>
            <h3>Zubereitung:</h3>
            <ul>
                <li></li>
            </ul>
        </section>
    )
}
