import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize'
import { Link } from 'react-router-dom';

const RecipesList = () => {

    const [cardInfo, setCardInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState("")

    const getData = async () => {
        const res = await axios.get('http://localhost:5000/posts')
        setCardInfo(res.data)
        setIsLoading(!isLoading)
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])


    return (
        <>
            {!isLoading ? (
                <Row>
                    <Col
                        m={6}
                        s={12}
                    >
                        {cardInfo.map(info => (
                            <Card
                                key={info._id}
                                actions={[
                                    <Link key={info._id} to={`/posts/${info._id}`}>See Recipe</Link>
                                ]}
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image={info.foodImage}>{info.title}</CardTitle>}
                                revealIcon={<Icon>more_vert</Icon>}
                            >
                                {info.description}
                            </Card>
                        ))}
                    </Col>
                </Row>



            ) : (<p>Loading data...</p>)
            }


        </>
    )
}

export default RecipesList
