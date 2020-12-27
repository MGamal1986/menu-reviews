import React from "react";
import classes from "./MenuItem.module.scss";
function MenuItem({ title, clicked }) {
    return (
        <li className={classes.MenuItem} onClick={clicked}>
            {title}
        </li>
    );
}

export default MenuItem;
