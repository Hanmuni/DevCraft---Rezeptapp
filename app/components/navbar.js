"use client";

import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar sticky">
      <div class="logo-container column  align-center text-center">
        <img className="logo" src="img/logo.png" />
        <span className="font-large">KOCHTRESOR</span>
        <span className="font-small d-none">
          Kulinarische Schätze für jeden Geschmack
        </span>
      </div>

      <div className="column text-center font-large gap-large d-none">
        <a>
          <img className="icon" src="img/home.png" /> Home
        </a>
        <a>
          <img className="icon" src="img/recipe.png" /> Rezepte
        </a>
        <a>
          <img className="icon" src="img/heart.png" /> Favoriten
        </a>
      </div>

      <a>
        <img className="display-desktop burger-menu" src="img/burger-menu.png" />
      </a>
    </nav>
  );
}
