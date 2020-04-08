import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

import '../styles/App.css';

export default function AppBody() {
    return (
            <Form>
                <FormGroup>
                    <Label className="text-white" for="nomeID">Email</Label>
                    <Input type="text" name="nome" id="nomeID" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button>Submit</Button>
        </Form>
    )
}
