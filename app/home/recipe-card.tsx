export default function RecipeCard() {
  return (
    <div className="column align-center recipe-box gap-small">
      <img className="recipe-img " src="/img/raspberry-pie.jpg" />
      <span> Himbeer Kuchen </span>
      <button className="recipeBtn font-medium"><a className="detail-link" href="/detail-seite"> Rezept ansehen</a></button>
    </div>
  );
}
