import DruckenButton from "../ui/drucken-button";
import FavoritenButton from "../ui/favoriten-button";
import TeilenButton from "../ui/teilen-button";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="detail">
            <div className="detail-box">
                <h2 className="h2deatil">Himbeer Kuchen</h2>
                <div className="description-detail">erstellt von:</div>
                <h3 className="h3detail">Dieser Himbeerkuchen ist eine fruchtige und leichte Mehlspeise. Ein Rezept zur Kaffeejause.</h3>
                <div className="recipe-img-box">
                    <img className="recipe-img " src="./img/raspberry-pie.jpg" />
                </div>
                <div className="detail-data-box">
                    <div className="">
                        <div className="description-detail">Schwierigkeitsgrad:</div>
                        <div className="description-detail">Zubereitungszeit:</div>
                    </div>
                    <div className="">
                        <DruckenButton />
                        <TeilenButton />
                        <FavoritenButton />
                    </div>
                </div>
                <h3 className="h3detail-box">Zutaten für: 16 Portionen</h3>
                <ul className="uldetail">
                    <li className="font-large">zutat</li>
                </ul>
                <h3 className="h3detail-box">Zubereitung:</h3>
                <ul className="uldetail">
                    <li className="font-large">blablabla</li>
                </ul>
                <div>
                    <div>{children}</div>
                </div>
            </div>
        </section>
    );
  }
