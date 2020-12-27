import React, { useEffect, useRef } from "react";
import { Row } from "react-bootstrap";
import classes from "./Meals.module.scss";
import Meal from "../Meal/Meal";
function Meals({ mealList }) {
    // create ref
    const mealRef = useRef();
    // useEffect(() => {
    //     let timer = setTimeout(() => {
    //         mealRef.current.classList.remove(classes.Meals);
    //     }, 500);
    //     return () => {
    //         mealRef.current.classList.add(classes.Meals);
    //         clearTimeout(timer);
    //     };
    // }, [mealList]);
    return (
        // connect ref to dom element
        <Row ref={mealRef}>
            {mealList.map((meal) => {
                return <Meal mealItem={meal} key={meal.id} />;
            })}
        </Row>
    );
}

export default Meals;
