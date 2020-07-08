import React from 'react'
import { Row, Col, Collection, CollectionItem, Card, Icon, CardTitle } from 'react-materialize'


const Recipe = (props) => {

    const { ingredients, method, title, prepTime, cookTime, description, username, servingSize, foodImage } = props.recipe

    return (
        <div className="recipe">
            <Row>
                <Col
                    s={12}
                >
                    <Card
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image={foodImage}></CardTitle>}
                        horizontal
                        revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p>Prep: {prepTime} min</p>
                        <p>Cook: {cookTime} min</p>
                        <p>Serves: {servingSize}</p>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col s={4}>
                    <h4>Ingredients</h4>
                    <Collection>
                        {ingredients.map((item, i) => (
                            <CollectionItem key={i}>
                                {item.ingredient}
                            </CollectionItem>)
                        )}
                    </Collection>
                </Col>
                <Col s={8}>
                    <h4>Method</h4>
                    <Collection>
                        {method.map((item, i) => (
                            <CollectionItem key={i}>
                               Step {i + 1}. {item.method}
                            </CollectionItem>)
                        )}
                    </Collection>
                </Col>
            </Row>
        </div>
    )
}

export default Recipe
