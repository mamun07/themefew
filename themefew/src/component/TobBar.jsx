import React, { Component } from 'react'
import {Container, Row, Col, Navbar,Nav} from 'react-bootstrap'
import { FaPhoneAlt, FaRegEnvelope,FaRegUserCircle,FaHandsHelping } from "react-icons/fa";

import {Link} from 'react-router-dom'


export default class TobBar extends Component {
    render() {
        return (
            <>
            <Container fluid className="header-topbar">
                <Row>
                    <Col lg={4}>
                        <div className="topbar-left-navbar">
                            <spna> <FaPhoneAlt/> +0510-5454545</spna>
                            <spna> <FaRegEnvelope/> mamun@gmail.com</spna>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="topbar-center-navbar text-center">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, quasi.</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="topbar-right-navbar">
                            <Navbar>
                                <Nav className="ml-auto">
                                    <Link to="/help"><FaHandsHelping/></Link>
                                    <Link to="/account"><FaRegUserCircle/></Link>
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
