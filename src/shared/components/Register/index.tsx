import {
  Line,
  RegisterSection
} from "./styles";
import { UserRegister } from '../UserRegister';
import { Button, Grid, Input, Title } from "@mantine/core";
import InputMask from 'react-input-mask';

export function Register() {
  return (
    <RegisterSection>
      <Title order={1}>Cadastro</Title>
      <UserRegister />
      <Line>
        <Grid>
          <Grid.Col>
            <Title order={3}>Endereço</Title>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper label="CEP" required>
              <Input component={InputMask} mask="99999-999" placeholder="99999-999" />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              withAsterisk
              label="Logadouro"
              placeholder="Logadouro"
              required
            >
              <Input placeholder="Logadouro" />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              withAsterisk
              label="Bairro"
              placeholder="Bairro"
              required
            >
              <Input placeholder="Bairro" />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              withAsterisk
              label="Complemento"
              placeholder="Complemento"
            >
              <Input placeholder="Complemento" />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              withAsterisk
              label="Cidade"
              placeholder="Cidade"
              required
            >
              <Input placeholder="Cidade" />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Wrapper
              withAsterisk
              label="UF"
              placeholder="UF"
              required
            >
              <Input placeholder="UF" />
            </Input.Wrapper>
          </Grid.Col>
        </Grid>
      </Line>
      <Button className=" w-56 button bg-primary-accent hover:bg-secondary-accent" >
        CADASTRAR
      </Button>
    </RegisterSection>
  );
}