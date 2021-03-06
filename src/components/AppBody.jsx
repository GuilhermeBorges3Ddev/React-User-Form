import React from 'react';
import { Form, Row, Col} from 'reactstrap';

import '../styles/App.css';
import InputNames from './subcomponents/InputNames';
import GenderBirthPhone from './subcomponents/GenderBirthPhone';
import MailContractButton from './subcomponents/MailContractButton';

export default function AppBody() {
    return (
        <Form className="d-flex justify-content-center align-tems-center w-75 h-100 p-0 m-0">
            <Row>
                <Col sm="12" md="12" lg="12" className="text-center">
                    <InputNames />
                </Col>
                <Col sm="12" md="12" lg="12" className="text-center">
                    <GenderBirthPhone />
                </Col>
                <Col sm="12" md="12" lg="12" className="text-center">
                    <MailContractButton />
                </Col>
            </Row>
        </Form>
    )
}

