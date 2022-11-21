import { Grid, Input, PasswordInput, Image, Button, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import LoginImage from "../../../assets/login.png"
import { auth } from "../../services/authenticateService";
import { ButtonLink, Dropdown, DropDownContent,  Line, LoginSection } from "./styles";

export function LoginForm() {

  const userToken = async () => {
    const data = await auth("andrezaleal@admin", "admin")
    console.log('aqui', data)
  };

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
            <Grid.Col>
              <Title order={3} className="flex justify-center">Login</Title>
            </Grid.Col>

            <Grid.Col>
              <Input.Wrapper
                withAsterisk
                label="Email"
              >
                <Input placeholder="Email" />
              </Input.Wrapper>
            </Grid.Col>
            <Grid.Col >
              <PasswordInput
                placeholder="Senha"
                label="Senha"
                withAsterisk
                className="focus:border-[primary-accent]"
              />
            </Grid.Col>
            <Grid.Col className="flex justify-center">
              <Button className=" button w-56 bg-primary-accent hover:bg-secondary-accent " onClick={userToken}>
                ENTRAR
              </Button>
            </Grid.Col>
            <Grid.Col className="flex justify-center p-0">
              <Text fz="xs" className="inline-flex">
                Não Possui uma conta ?
                  <Link to='/cadastro'><ButtonLink>Cadastre-se</ButtonLink></Link>
              </Text>
            </Grid.Col>
          </Line>
        </Grid.Col>
      </Grid>
    </LoginSection>
  )
}