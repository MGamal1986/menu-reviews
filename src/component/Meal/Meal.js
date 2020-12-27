import React from "react";
import { motion } from "framer-motion";
import classes from "./Meal.module.scss";
import { Col } from "react-bootstrap";
function Meal({ mealItem }) {
    return (
        <Col
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            sm={12}
            xl={6}
            className={classes.Meal}
        >
            <div className={classes.Image}>
                <img src={mealItem.img.default} alt={mealItem.title} />
            </div>
            <div className={classes.Info}>
                <h5 className={classes.InfoTitle}>
                    <span>{mealItem.title}</span>
                    <span>{mealItem.price}$</span>
                </h5>
                <p className={classes.Text}>{mealItem.desc}</p>
            </div>
        </Col>
    );
}

export default Meal;
