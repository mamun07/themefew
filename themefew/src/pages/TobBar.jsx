import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default class TobBar extends Component {
    render() {
        return (
            <>
                <Container fluid className="header-topbar">
                    <Row>
                        <Col lg={6}>
                            Left site
                        </Col>
                        <Col lg={6}>
                            <div className="float-right">
                                <ul>
                                    <li><Link exact to="/help">Help</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
