import DruckenButton from "../ui/drucken-button";
import FavoritenButton from "../ui/favoriten-button";
import TeilenButton from "../ui/teilen-button";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <h2>Himbeer Kuchen</h2>
            <div>erstellt von:</div>
            <h3>Dieser Himbeerkuchen ist eine fruchtige und leichte Mehlspeise. Ein Rezept zur Kaffeejause.</h3>
            <img className="recipe-img " src="./img/raspberry-pie.jpg" />
            <div>
                <div>
                    <div>Schwierigkeitsgrad:</div>
                    <div>Zubereitungszeit:</div>
                </div>
                <div>
                    <DruckenButton />
                    <TeilenButton />
                    <FavoritenButton />
                </div>
            </div>
            <h3>Zutaten für: 16 Portionen</h3>
            <ul>
                <li></li>
            </ul>
            <h3>Zubereitung:</h3>
            <ul>
                <li></li>
            </ul>
            <div>
                <div>{children}</div>
            </div>
        </section>
    );
  }
