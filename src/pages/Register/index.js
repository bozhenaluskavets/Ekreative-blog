import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Container, Input, Title } from "../../globalStyles"
import { registerUser, removeError } from "../../store/slices/auth";
import { Content, Errors, Form } from "./style"

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [age, setAge] = useState('');
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
        const registerData = { email, password, firstname, lastname, age };

        let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEx.test(email) && email !== '') {
            setErrors('Email is not valid');
            return
        }

        if (password.length < 8) {
            setErrors('Password must contain at least 8 characters');
            return
        }

        if (password !== password2) {
            setErrors('Passwords are different');
            return
        }
    
        if (age < 10 || age > 100) {
            setErrors('Write correct age')
            return
        }

        dispatch(registerUser(registerData))
        // .then(async data => {
        //     const body = await data.json();
        //     console.log(body)
        //     if (data.ok) {
        //         navigate('/')
        //     } else {
        //         console.log(body.error.message);
        //     }
        // })
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
                <Title>Register</Title>
                <Form>
                    <Input type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} onClick={removeErrors} />
                    <Input type="password" placeholder="Password" value={password} minLength={8} onChange={event => setPassword(event.target.value)} onClick={removeErrors} />
                    <Input type="password" placeholder="Repeat password" value={password2} onChange={event => setPassword2(event.target.value)} onClick={removeErrors} />
                    <Input type="text" placeholder="First name" value={firstname} onChange={event => setFirstName(event.target.value)} onClick={removeErrors} />
                    <Input type="text" placeholder="Last name" value={lastname} onChange={event => setLastName(event.target.value)} onClick={removeErrors} />
                    <Input type="number" placeholder="Age" value={age} onChange={event => setAge(event.target.value)} onClick={removeErrors} />
                    <Errors>{ showErrors() }</Errors>
                    <Button disabled={!(email, password, password2, firstname, lastname, age)} onClick={onSubmit}>Register</Button>
                </Form>
            </Content>
        </Container>
    )
}