import React, { Component } from 'react'
import {Container, Row, Col, Navbar,Nav} from 'react-bootstrap'

import {Link} from 'react-router-dom'


export default class TobBar extends Component {
    render() {
        return (
            <>
                <Container fluid className="header-topbar">
                    <Row>
                        <Col lg={3}>
                            <div className="topbar-left-navbar"><spna>Phone : +0510-5454545</spna></div>
                        </Col>
                        <Col lg={5}>
                            <div className="topbar-center-navbar text-center">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, quasi.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="topbar-right-navbar">
                                <Navbar>
                                    <Nav className="ml-auto">
                                        <Link to="/about">Help</Link>
                                        <Link to="/">Login</Link>
                                    </Nav>
                                </Navbar>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
