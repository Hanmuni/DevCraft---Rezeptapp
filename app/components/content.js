"use client";

import { useState } from "react";
import "./content.css";
import SearchBar from "./search-bar";
import Filter from "./filter";

export default function Navbar() {
  return (
    <div className="content">
      <div className="row gap-medium">
        <SearchBar /> <Filter />
      </div>
    </div>
  );
}
