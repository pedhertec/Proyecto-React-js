import React from "react";
import { NavLink } from "react-router-dom";


const NavCategories = () => {
    const categories = [
        { id: 1, name: "electronics", route:"/categories/electronics" },
        { id: 2, name: "jewelery", route:"/categories/jewelery"},
        { id: 3, name: "men's clothing", route:"/categories/men's clothing"},
        { id: 4, name: "women's clothing", route:"/categories/women's clothing"}
      ];

    return (
        <nav style={styles.title}>
            {categories.map(( category ) => {
                return (
                    <NavLink key={category.id} style={styles.menu} to={category.route}>
                    {category.name}
                  </NavLink>
                );
            })}
        </nav>
    );
};

export const styles = {
    menu: {
        textDecoration: "none",
        margin: "10px",
        color: "black",
        fontSize: "3vh",
    },
    title: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "11vh",
    },
};


export default NavCategories;