
// export const Register = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [password2, setPassword2] = useState('');
//     const [firstname, setFirstName] = useState('');
//     const [lastname, setLastName] = useState('');
//     const [age, setAge] = useState('');
//     const [errors, setErrors] = useState('');

//     const dispatch = useDispatch();

//     const reduxData = useSelector((state) => {
//         return {
//             error: state.auth.error
//         }
//     })

//     const onSubmit = (event) => {
//         setErrors('')
//         event.preventDefault();
//         const registerData = { email, password, firstname, lastname, age };

//         dispatch(registerUser(registerData))
//         // .then(async data => {
//         //     const body = await data.json();
//         //     console.log(body)
//         //     if (data.ok) {
//         //         navigate('/')
//         //     } else {
//         //         console.log(body.error.message);
//         //     }
//         // })
//     }


import { useForm } from "react-hook-form";
import { Button, Container, Error, Input, Title } from "../../globalStyles";
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

    return (
        <Container>
            <Content>
                <Title>Register</Title>
                <Form onSubmit={handleSubmit((data) => console.log(data))}>
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
                        },
                        maxLength: {
                            value: 30,
                            message: 'Password must be at most 30 characters long'
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

                    <Input {...register("firstName", {
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

                    <Input {...register("lastName", {
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