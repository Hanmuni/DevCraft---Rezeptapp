import LikeButton from "./components/like-button";
import Navbar from "./components/navbar";
import Content from "./components/content";

import "./page.css";

export default function HomePage() {
  return (
    <div className="row">
      <Navbar />
      <Content />
    </div>
  );
}
