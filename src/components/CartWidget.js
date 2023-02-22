import React from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const NavBar = () => {
    return (
        <>
        <div style={styles.cartContainer}>
        <ShoppingCartRoundedIcon color="success" fontSize="large"/>
        <p style={styles.p}> 0 </p>
        </div>
        </>
    )
}

export const styles = {
    cartContainer: {
        display: "flex",
        alignItems: "center",
        marginRight: "150px",
        border: "1px",
    },
    p: {
        color: "green",
    }
}

export default NavBar;