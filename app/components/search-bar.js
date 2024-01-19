"use client";

import { useState } from "react";
import "./search-bar.css";

export default function SearchBar() {
  return <input type="search" placeholder="Suche dein Rezept" className="font-large"/>;
}
