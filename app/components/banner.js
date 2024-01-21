"use client";

import { useState } from "react";
import "./banner.css";

export default function Banner() {
  return (
    <div className="banner column align-center">
      <span className="font-large header">
        <img className="food-icon" src="img/hamburger.png" />
        <img className="food-icon" src="img/fries.png" />
        &nbsp; Verborgene Köstlichkeiten entdecken, kreieren und teilen &nbsp;
        <img className="food-icon" src="img/taco.png" />
        <img className="food-icon" src="img/eggplant.png" />
      </span>

      <span className="font-medium text-center">
        Von einfachen Alltagsgerichten bis zu raffinierten Köstlichkeiten – hier
        findest du alles, um deine Kochkunst auf ein neues Level zu heben. Lass
        dich von unseren vielfältigen Rezepten inspirieren und erlebe
        kulinarische Abenteuer wie nie zuvor. Starte jetzt deine Reise durch den
        Kochtresor und verleihe deiner Küche eine ganz besondere Note!
      </span>
    </div>
  );
}
