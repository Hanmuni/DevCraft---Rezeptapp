import SearchBar from "../ui/search-bar";
import Filter from "../ui/filter";
import User from "../ui/user";
import HomePageBanner from "./homepage-banner";
import RecipeCard from "./recipe-card";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="content">
    <div className="row align-center gap-xx-large sticky top-container d-none">
      <SearchBar /> <Filter />
      <User />
    </div>

    <div className="d-none">
      <HomePageBanner />
    </div>

    <div className="row wrap gap-small justify-between">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
    </div>
    <div>
      <div>{children}</div>
    </div>
  </div>
  );
}
