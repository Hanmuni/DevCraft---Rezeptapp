import LikeButton from "./like-button";

function Header({ title }) {
  return (
    <div>
      {" "}
      <h1> {title ? title : "Kein Titel!"} </h1>{" "}
    </div>
  );
}

export default function HomePage() {
  const names = ["Edda", "Hong Hanh", "Danilo"];

  return (
    <div>
      <Header title="Hausmeister!" />
      <Header title="Yuhu!" />
      <Header title="Welcome!" />
      <ul>
        {names.map((name) => (
          <li> {name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
