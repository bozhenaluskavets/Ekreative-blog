import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Input, Title } from "../../globalStyles";
import { loginUser, removeError } from "../../store/slices/auth";
import { Errors } from "../Register/style";
import { Content, Form } from "./style";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const dispatch = useDispatch();

    const reduxData = useSelector((state) => {
        return {
            error: state.auth.error
        }
    })

    const onSubmit = (event) => {
        setErrors('')
        event.preventDefault();
        const loginData = { email, password };

        let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEx.test(email) && email !== '') {
            setErrors('Email is not valid');
            return
        }
        dispatch(loginUser(loginData))
    }

    const showErrors = () => {
        if (errors?.length) {
            return errors
        }
        return reduxData.error;
    }

    const removeErrors = () => {
        dispatch(removeError())
    }


    return (
        <Container>
            <Content>
                <Title>Log in</Title>
                <Form>
                    <Input type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} onClick={removeErrors()}/>
                    <Input type="password" placeholder="Password" value={password} minLength={8} onChange={event => setPassword(event.target.value)} onClick={removeErrors()} />
                    <Errors>{ showErrors() }</Errors>
                    <Button disabled={!(email, password)} onClick={onSubmit}>Log in</Button>
                </Form>
            </Content>
        </Container>

    )
}