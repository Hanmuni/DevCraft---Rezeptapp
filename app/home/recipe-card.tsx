export default function RecipeCard() {
  return (
    <div className="column align-center recipe-box gap-small">
      <img className="recipe-img " src="/img/raspberry-pie.jpg" />
      <span> Himbeer Kuchen </span>
      <button className="recipeBtn font-medium"> Rezept ansehen </button>
    </div>
  );
}
