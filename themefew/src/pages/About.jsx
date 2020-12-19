import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <>
            <Container fluid className="about-page-area">
                <Row>
                    <Col lg={12}>Wlcome to About page</Col>
                </Row>
            </Container>
            </>
        )
    }
}
