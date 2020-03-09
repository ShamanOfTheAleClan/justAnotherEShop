import React from "react";
import c from "./Nav.module.css";
import { Link } from "react-router-dom";

export const Nav = ({ product }) => {
   return (
      <nav className={c.nav}>
         <div className={c.logo}>Parduotuvė</div>
         <ul className={c.menu}>
            <li className={c.menuItem}>
               <Link className={c.linkActive} to="/Products">
                  Products
               </Link>
            </li>
            <li className={c.menuItem}>
               <Link className={c.link} to="/Orders">
                  Orders
               </Link>
            </li>
            <li className={c.menuItem}>
               <Link className={c.link} to="/Cart">
                  Cart
               </Link>
            </li>
         </ul>
      </nav>
   );
};
