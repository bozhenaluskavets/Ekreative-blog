import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Container, Error, Input, Title } from "../../globalStyles";
import { registerUser } from "../../store/slices/auth";
import { Content, Form } from "./style";

export const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid }
    } = useForm({
        mode: 'onChange'
    });

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const {isAuthenticated} = useSelector((state) => {
        return {isAuthenticated: state.auth.isAuthenticated}
    })

    useEffect(() => {
        if (isAuthenticated) navigate('/')
    }, [isAuthenticated])

    return (
        <Container>
            <Content>
                <Title>Register</Title>
                <Form onSubmit={handleSubmit((data) => {
                    delete data['passwordConfirm'];
                    dispatch(registerUser(data));
                })}>
                    <Input {...register("email", {
                        required: "Please enter your Email",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }
                    })}
                        placeholder="Email"
                        type="email"
                    />
                    <Error>{errors.email?.message}</Error>

                    <Input {...register("password", {
                        required: 'Please enter your password',
                        minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters long'
                        }
                    })}
                        placeholder="Password"
                        type="password"
                    />
                    <Error>{errors.password?.message}</Error>

                    <Input {...register("passwordConfirm", {
                        required: 'Please repeat your password',
                        validate: (value) => {
                            if (watch('password') != value) {
                              return "Passwords are different";
                            }
                          },
                    })}
                        placeholder="Repeat password"
                        type="password"
                    />
                    <Error>{errors.passwordConfirm?.message}</Error>

                    <Input {...register("firstname", {
                        required: 'Please enter your firstname',
                        minLength: {
                            value: 3,
                            message: 'Firstname must be at least 3 characters long'
                        }
                    })}
                        placeholder="Firstname"
                        type="text"
                    />
                    <Error>{errors.firstName?.message}</Error>

                    <Input {...register("lastname", {
                        required: 'Please enter your lastName',
                        minLength: {
                            value: 3,
                            message: 'LastName must be at least 3 characters long'
                        }
                    })}
                        placeholder="LastName"
                        type="text"
                    />
                    <Error>{errors.lastName?.message}</Error>

                    <Input {...register("age", {
                        required: 'Please enter valid age',
                        min: {
                            value: 10,
                            message: 'Please enter valid age'
                        },
                        max: {
                            value: 99,
                            message: 'Please enter valid age'
                        }
                    })}
                        placeholder="Age"
                        type="number"
                    />
                    <Error>{errors.age?.message}</Error>

                    <Button type="submit" disabled={ !isValid }>Register</Button>
                </Form>
            </Content>
        </Container>
    );
}