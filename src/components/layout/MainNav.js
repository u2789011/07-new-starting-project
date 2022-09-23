import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";
import FavoritesContext from "../../store/favorite-context";

function MainNav() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <ul>
        <li>
          <Link to="/">AllMeetups</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
          <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
        </li>
        <li>
          <Link to="/new-meetup">NewMeetups</Link>
        </li>
      </ul>
    </header>
  );
}
export default MainNav;
