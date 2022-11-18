import { Grid, Input, PasswordInput, Image, Button, Text, Title } from "@mantine/core";
import LoginImage from "../../../assets/login.png"
import { Line, LoginSection } from "./styles";

export function Login() {
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
              <Button className=" button-add bg-primary-accent hover:bg-secondary-accent w-60" >
                ENTRAR
              </Button>
            </Grid.Col>
            <Grid.Col className="flex justify-center p-0">
              <Text fz="xs">Não Possui uma conta ?</Text>
            </Grid.Col>
          </Line>
        </Grid.Col>
      </Grid>
    </LoginSection>
  )
}