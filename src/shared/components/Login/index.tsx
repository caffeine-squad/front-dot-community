import { Grid, Input, PasswordInput, Image, Button, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginImage from "../../../assets/login.png"
import { auth } from "../../services/authenticateService";
import { ButtonLink, Line, LoginSection } from "./styles";
import { useAuth } from "../../context/useAuth";



export function LoginForm() {
  const [loading, setLoading] = useState(false)
  const {onLogin} = useAuth();


  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
    },
  });

  return (
    <LoginSection>
      <Grid className="self-center">
        <Grid.Col className="justify-center" span={6}>
          <Image
            radius="md"
            src={LoginImage}
            alt="Random unsplash image"
          />
        </Grid.Col>
        <Grid.Col className="self-center" span={6}>
          <Line>
            <form onSubmit={form.onSubmit((values) => onLogin(values))}>
              <Grid.Col>
                <Title order={3} className="flex justify-center">Login</Title>
              </Grid.Col>

              <Grid.Col>

                <Input.Wrapper
                  withAsterisk
                  label="Email"
                >

                  <Input placeholder="Email"
                    {...form.getInputProps('email')}
                  />
                </Input.Wrapper>
              </Grid.Col>
              <Grid.Col >
                <PasswordInput
                  placeholder="Senha"
                  label="Senha"
                  withAsterisk
                  className="focus:border-[primary-accent]"
                  {...form.getInputProps('password')}
                />
              </Grid.Col>
              <Grid.Col className="flex justify-center">
                <Button type="submit" className=" button w-56 bg-primary-accent hover:bg-secondary-accent " >
                  ENTRAR
                </Button>

              </Grid.Col>
              <Grid.Col className="flex justify-center p-0">
                <Text fz="xs" className="inline-flex">
                  Não Possui uma conta ?
                  <Link to='/cadastro'><ButtonLink>Cadastre-se</ButtonLink></Link>
                </Text>
              </Grid.Col>
            </form>
          </Line>
        </Grid.Col>
      </Grid>
    </LoginSection>
  )
}