import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
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
                                    <ul>
                                        <li><FaPhoneAlt/> {this.props.phone}</li>
                                        <li><FaRegEnvelope/> {this.props.mail}</li>
                                    </ul>
                                </div>
                                <div className="topbar-center-navbar text-center">
                                    <p>{this.props.note}</p>
                                </div>
                                <div className="topbar-right-navbar">
                                    <ul>
                                        <li><Link to="/help"><FaHandsHelping/></Link></li>
                                        <li><Link to="/account"><FaRegUserCircle/></Link></li>
                                    </ul>
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
