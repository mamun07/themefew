import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'



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
                                Right site
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
