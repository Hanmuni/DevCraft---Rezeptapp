"use client";

import { useState } from "react";
import "./content.css";
import SearchBar from "./search-bar";
import Filter from "./filter";
import User from "./user";

export default function Navbar() {
  return (
    <div className="content">
      <div className="row align-center gap-xx-large">
        <SearchBar /> <Filter />
        <User />
      </div>
    </div>
  );
}
