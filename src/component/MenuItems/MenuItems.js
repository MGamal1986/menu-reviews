import React from "react";
import MenuItem from "./MenuItem/MenuItem";

function MenuItems({ menuList, filter }) {
    let cat = ["all", ...new Set(menuList.map((list) => list.category))];
    return (
        <ul className="list-unstyled d-flex justify-content-center mb-5">
            {cat.map((item, i) => (
                <MenuItem title={item} key={i} clicked={() => filter(item)} />
            ))}
        </ul>
    );
}

export default MenuItems;
