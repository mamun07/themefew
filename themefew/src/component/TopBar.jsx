import React, { Component } from 'react'
import './Topbar.css';
import {Container, Row, Col, Navbar,Nav} from 'react-bootstrap'
import { FaPhoneAlt, FaRegEnvelope,FaRegUserCircle,FaHandsHelping } from "react-icons/fa";

import {Link} from 'react-router-dom'


export default class TopBar extends Component {


    render() {
        return (
            <>
            <div className="header-topbar-bg">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <div className="header-topbar-area">
                                <div className="topbar-left-navbar">
                                    <spna> <FaPhoneAlt/> {this.props.phone}</spna>
                                    <spna> <FaRegEnvelope/> {this.props.mail}</spna>
                                </div>
                                <div className="topbar-center-navbar text-center">
                                    <p>{this.props.note}</p>
                                </div>
                                <div className="topbar-right-navbar">
                                    <Navbar className="p-0">
                                        <Nav className="ml-auto">
                                            <Link className="mr-3" to="/help"><FaHandsHelping/></Link>
                                            <Link to="/account"><FaRegUserCircle/></Link>
                                        </Nav>
                                    </Navbar>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
        )
    }
}
