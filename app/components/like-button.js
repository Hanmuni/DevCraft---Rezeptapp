"use client";

import { useState } from "react";
import "./like-button.css";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function click() {
    setLikes(likes + 1);
  }

  return (
    <button className="likeBtn" onClick={click}>
      Like! ({likes})
    </button>
  );
}
