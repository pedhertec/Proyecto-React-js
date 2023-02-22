import React from 'react';
import LogoBar from "../assets/img/logobar.png";
import NavCategories from './NavCategories';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

const nombreUser = "Tutor"

const NavBar = () => {
    return (
        <>
        <header style={styles.container}>
        <Link  style={styles.imgLogo} to={"/"}> <img src={LogoBar} alt="Logo de la marca Amaranta" width="80px" height="80px"/> </Link>
        <h1 style={styles.title}>Bienvenido/a a Amaranta, {nombreUser} </h1>
        <NavCategories/>
        <Link to={"/cart"}><CartWidget/></Link>
        </header>
        </>
    )
}

export const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(110deg, #f9e2dc 12%, #c9deda8f 12%)",
    },
    imgLogo: {
        marginLeft: "20px",
    },
    title: {
        marginLeft: "20px",
        fontSize: "2vh",
    }
}
export default NavBar;