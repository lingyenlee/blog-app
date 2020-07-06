import React from 'react'
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize'

const BlogsList = () => {
    return (
        <>
            <Row>
                <Col
                    m={8}
                    s={12}
                >
                    <Card
                        actions={[
                            <a key="1" href="#">This is a Link</a>
                        ]}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image="https://voyagerblogbucket.s3.ap-southeast-2.amazonaws.com/1594036634482-logo.png">Card Title</CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                    >
                        Here is the standard card with an image thumbnail.
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default BlogsList
