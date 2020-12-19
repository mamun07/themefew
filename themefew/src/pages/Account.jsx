import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default class Account extends Component {
    render() {
        return (
            <>
            <Container fluid className="header-topbar">
                <Row>
                    <Col lg={12}>Wlcome to Account page</Col>
                </Row>
            </Container>
            </>
        )
    }
}
