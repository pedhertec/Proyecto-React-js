import React, { useContext } from "react";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { CartProduct } from "../context/CartProductContext";

const CartWidget = () => {
    const { totals } = useContext(CartProduct);
    return (
        <>
        <div style={styles.cartContainer}>
        <ShoppingCartRoundedIcon color="success" fontSize="large"/>
        {totals.qty > 0 &&  <p style={styles.p} > {totals.qty} </p>}
        </div>
        </>
    );
};

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

export default CartWidget;