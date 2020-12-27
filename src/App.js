import React, { useState } from "react";
import "./App.scss";
import data from "./data/data";
import Title from "./component/Title/Title";
import { Container, Row, Col } from "react-bootstrap";
import MenuItems from "./component/MenuItems/MenuItems";
import Meals from "./component/Meals/Meals";

function App() {
    const [meals, setMeals] = useState(data);

    const mealFilter = (cat) => {
        if (cat === "all") {
            setMeals(data);
            return;
        } else {
            let newMeals = data.filter((meal) => meal.category === cat);
            setMeals(newMeals);
        }
    };
    return (
        <div className="App">
            <Container>
                <Row className="mb-5">
                    <Col>
                        <Title />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <MenuItems menuList={data} filter={mealFilter} />
                    </Col>
                </Row>
                <Meals mealList={meals} />
            </Container>
        </div>
    );
}

export default App;
