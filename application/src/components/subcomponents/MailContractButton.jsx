import React from 'react';
import {FormGroup, Label, Input, Button} from 'reactstrap';

export default function MailContractButton() {
    return (
        <div>
            <FormGroup>
                <Label className="text-white" for="emailUser">Email de contato</Label>
                <Input className="text-dark" type="mail" name="emailUser" id="emailUser" placeholder="email@dominio.com" />
            </FormGroup>
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
            <Button className="my-md-4">
                <span className="mx-4">
                    Ir ao passo seguinte
                </span>
            </Button>          
        </div>
    )
}