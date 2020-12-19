import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <Container fluid className="few-main-home-page">
                <Row>
                    <Col lg={12}>Wlcome to ThemeFew home page</Col>
                </Row>
            </Container>
        )
    }
}
