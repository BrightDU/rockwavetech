import React from 'react';
import { Row, Preloader, Col } from 'react-materialize';

export const Loading = () => {
    return(//fa-3x 3 times the speed, fa-fw forward spinner
        <Row>
            
            <Col l={4}>
                <Preloader flashing size="big"/>
            </Col>
           
        </Row>
    );
}

