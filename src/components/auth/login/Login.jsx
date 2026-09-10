import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";

const Login = ({onLogin}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
        setErrors({...errors, email: false})
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
        setErrors({...errors, password: false})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`El email ingresado es: ${email} y el password es ${password}`)
    }



    const handleLogin = (e) =>{
        e.preventDefault();

        if (!emailRef.current.value.length){
            setErrors({...errors, email: true});
            alert("Email vacio");
            emailRef.current.focus();
            return;
        }

        else if(!password.current.value.length || password.current.value.length < 7){
            setErrors({...errors, password: true});
            alert("Password vacio");
            passwordRef.current.focus();
            return;
        }

        onLogin();
        navigate("/library");
    }
    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row className="mb-2">
                    <h5>¡Bienvenidos a Books Champion!</h5>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="email"
                            required
                            ref={emailRef}
                            placeholder="Ingresar email"
                            onChange={handleEmailChange}
                            value={email} 
                            className={errors.email && "border border-danger"}/>
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="password"
                            required
                            ref={passwordRef}
                            placeholder="Ingresar contraseña"
                            onChange={handlePasswordChange}
                            value={password}
                            className={errors.password && "border border-danger"}
                        />
                    </FormGroup>
                    <Row>
                        <Col />
                        <Col md={6} className="d-flex justify-content-end">
                            <Button variant="secondary" type="submit">
                                Iniciar sesión
                            </Button>
                        </Col>
                    </Row>
                </Form>
                {(errors.mail || errors.password) && (
                    <p className="text-red-500">
                        Debe completar todos los campos para iniciar sesión.
                    </p>
                )}
            </Card.Body>
        </Card>
    );
};


export default Login;