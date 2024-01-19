"use client";

import { useState } from "react";
import "./content.css";
import SearchBar from "./search-bar";

export default function Navbar() {
  return (
    <div className="content">
      <SearchBar />
    </div>
  );
}
