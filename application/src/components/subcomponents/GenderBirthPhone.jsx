import React from 'react';
import {FormGroup, Label, Input, Col} from 'reactstrap';

export default function GenderBirthPhone() {
    return (
        <div>
            <FormGroup tag="fieldset" className="mt-md-4 text-white">
                <legend>Sexo</legend>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="female" />{' '}
                        Feminino
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="male" />{' '}
                        Masculino
                    </Label>
                </FormGroup>
            </FormGroup>
            <FormGroup className="text-white">
                <Label for="exampleDate">Data de Aniversário</Label>
                <Input
                    className="text-dark"
                    type="date"
                    name="dateBirth"
                    id="dateBirth"
                    placeholder="dd/mm/aaaa"
                />
            </FormGroup>
            <FormGroup>
                <Label className="text-white" for="mobilePhone">Telefone</Label>
                <Input className="text-dark" type="text" name="mobilePhone" id="mobilePhone" placeholder="(35)98888- 8888" />
            </FormGroup>
        </div>
    )
}
