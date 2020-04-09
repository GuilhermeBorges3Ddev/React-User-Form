import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';

import '../styles/App.css';
import InputNames from './subcomponents/InputNames';
import GenderBirthPhone from './subcomponents/GenderBirthPhone';

export default function AppBody() {
    return (
        <Form className="d-flex w-75">
            <Row>
                <Col sm="12" md="12" className="text-center">
                    <InputNames />
                </Col>
                <Col sm="12" md="12" className="text-center">
                    <GenderBirthPhone />
                </Col>
                <Col sm="12" md="4">
                    <FormGroup>
                        <Label className="text-white" for="emailUser">Primeiro nome</Label>
                        <Input className="text-dark" type="mail" name="emailUser" id="emailUser" placeholder="email@dominio.com" />
                    </FormGroup>
                </Col>
                <Col sm="12" md="4" className="text-center">
                    <FormGroup tag="fieldset" className="mt-md-0 text-white">
                        <legend>Termos de Contrato</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="female" />{' '}
                                Li e aceito a <u>Politica de Privacidade</u>
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="male" />{' '}
                                Aceito receber msg no Whatsapp
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="male" />{' '}
                                Desejo receber propaganda direcionada
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="male" />{' '}
                                Aceito disponibilizar meus dados para IDFinance Spain e S.L.U
                            </Label>
                        </FormGroup>
                    </FormGroup>
                </Col>
                <Col sm="12" md="12" className="text-center">
                    <Button className="mt-md-4">
                        <span className="mx-4">
                            Ir ao passo seguinte
                        </span>
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

