/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React,{ useRef, useContext} from 'react';
import { Container, Body, Forms } from './styles'
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";
import getValidationErrors from "../../../utils/getValidationErrors";

function SignIN () {

    const formRef = useRef(null);
    const history = useHistory();
  
    // // useEffect(() => {
    // //   if (getToken() != null) {
    // //     history.push("/dashboard");
    // //   }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
  
     const { signIn: login } = useContext(AuthContext);
    const handleSubmit = async (data) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          login: Yup.string().required("Login obrigatório"),
          senha: Yup.string().required("Senha obrigatória"),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        formRef.current?.setErrors({});
        // eslint-disable-next-line no-unused-vars
       const resp = await login(data);
        history.push("/dashboard");
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    };
  
    return (
        <>
        <Container>
            {" "}
            <Body>
                <h1>ENTRAR</h1>
                <span>O seu passaporte para o futuro</span>
                <Forms ref={formRef} onSubmit={handleSubmit}>
          <span>E-mail</span>
          <Input name="login" placeholder="DigiteSeu@email.com" />
          <span>Senha</span>
          <Input
            name="senha"
            placeholder="Digite sua senha"
            type="password"
          />
          <Button>LOGIN</Button>
        </Forms>
               
                <div>Possui uma conta ? <a href="/registrar"> Registre-se</a></div>
            </Body>
        </Container>
        </>
            
        
    );
}

export default SignIN;
