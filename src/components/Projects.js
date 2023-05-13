import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardComp from './CardComp';
import CardComp2 from './CardComp2';
import CardComp3 from './CardComp3';

function Projects() {
    return (
        <Container fluid="md" className='cprojects'>
        <div className='section-title'><h1>Projects</h1></div>
        <Row className="justify-content-md-center">
            <Col>
            <CardComp></CardComp>
        
            </Col>
        <Col>
        <CardComp2></CardComp2>
        
        </Col>

        <Col>
        <CardComp3></CardComp3>
        
        </Col>
        
        </Row>
        </Container>

        );
    }
    
    export default Projects;