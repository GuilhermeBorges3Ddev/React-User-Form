import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';

export default function InputNames() {
    return (
        <div>
            <FormGroup>
                <Label className="text-white" for="firstName">Primeiro nome</Label>
                <Input type="text" name="nome" id="firstName" placeholder="" />
            </FormGroup>         
            <FormGroup>
                <Label className="text-white" for="middleName">Nome do meio</Label>
                <Input type="text" name="nome" id="middleName" placeholder="" />
            </FormGroup>
            <FormGroup>
                <Label className="text-white" for="lastName">Último nome</Label>
                <Input type="text" name="nome" id="lastName" placeholder="" />
            </FormGroup>
            <FormGroup check className="mt-4">
                <Label check className="text-white">
                <Input type="checkbox" name="hasLastName" />{' '}
                    <small>Marque aqui se você possuir um segundo nome</small>
                </Label>
            </FormGroup>
        </div>
    )
}
