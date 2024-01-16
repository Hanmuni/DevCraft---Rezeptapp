"use client";

import { useState } from "react";
import "./content.css";

export default function Navbar() {
  return (
    <div className="content column align-center justify-center gap-large">
      <div className="search-bar">Suchbar Component </div>
      <div className="filter"> Filter Component </div>
      <div className="recipes"> Rezept Hinzufügen Component </div>
      <div className="add-recipe"> Rezept Component</div>
    </div>
  );
}
