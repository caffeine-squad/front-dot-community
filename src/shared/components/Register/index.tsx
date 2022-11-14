import { useState } from 'react';
import { Button, Input, Grid, PasswordInput, Select } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import InputMask from 'react-input-mask';
import {
  RegisterSection
} from "./styles";

export function Register() {
  const [bloodValue, setBloodValue] = useState('');
  const [comorbidityValue, setComorbidityValue] = useState('');
  const [typeUserValue, setTypeUserValue] = useState('');
  const [organValue, setOrganValue] = useState('');
  return (
    <RegisterSection>
      <Grid>
        <Grid.Col>
          <Input.Wrapper
            withAsterisk
            label="Nome Completo"
            placeholder="Nome Completo"
          >
            <Input placeholder="Nome Completo" />
          </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={6}>
          <DatePicker
            placeholder="Data de nascimento"
            label="Data de Nascimento"
            inputFormat="DD/MM/YYYY"
            labelFormat="MM/YYYY"
            withAsterisk
            defaultValue={new Date()}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Input.Wrapper label="Telefone" required>
            <Input component={InputMask} mask="+55 (99) 99999-9999" placeholder="+55(99)99999-9999" />
          </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={6}>
          <Input.Wrapper
            withAsterisk
            label="Email"
          >
            <Input placeholder="Email" />
          </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={6}>
          <PasswordInput
            placeholder="Senha"
            label="Senha"
            withAsterisk
            className="focus:border-[primary-accent]"
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Select
            label="Tipo Sanguíneo"
            placeholder="Selecione um tipo Sanguíneo"
            searchable
            withAsterisk
            onSearchChange={setBloodValue}
            searchValue={bloodValue}
            nothingFound="Não encontrado"
            data={['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']}
            styles={() => ({
              item: {
                '&[data-selected]': {
                  '&, &:hover': {
                    backgroundColor:
                      "#62D2A2",
                    color: "#000",
                  },
                },
                '&[data-hovered]': {},
              },
            })}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Select
            label="Comorbidade"
            placeholder="Selecione uma comorbidade"
            searchable
            withAsterisk
            onSearchChange={setComorbidityValue}
            searchValue={comorbidityValue}
            nothingFound="Não encontrado"
            data={['Diabetes', 'HIV', 'Obesidade']}
            styles={() => ({
              item: {
                '&[data-selected]': {
                  '&, &:hover': {
                    backgroundColor:
                      "#62D2A2",
                    color: "#000",
                  },
                },
                '&[data-hovered]': {},
              },
            })}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Select
            label="Tipo de usuário"
            placeholder="Selecione um tipo de usuário"
            searchable
            withAsterisk
            onSearchChange={setTypeUserValue}
            searchValue={typeUserValue}
            nothingFound="Não encontrado"
            data={['Doador', 'Receptor', 'Transplatado e Doador']}
            styles={() => ({
              item: {
                '&[data-selected]': {
                  '&, &:hover': {
                    backgroundColor:
                      "#62D2A2",
                    color: "#000",
                  },
                },
                '&[data-hovered]': {},
              },
            })}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Select
            label= { typeUserValue=== "Receptor" ? "Qual orgão ou tecido você deseja receber?": "Qual orgão ou tecido você deseja doar?"}
            placeholder="Selecione um orgão"
            searchable
            withAsterisk
            onSearchChange={setOrganValue}
            searchValue={organValue}
            nothingFound="Não encontrado"
            data={['Coração', 'Pulmão', 'Fígado']}
            styles={() => ({
              item: {
                '&[data-selected]': {
                  '&, &:hover': {
                    backgroundColor:
                      "#62D2A2",
                    color: "#000",
                  },
                },
                '&[data-hovered]': {},
              },
            })}
          />
        </Grid.Col>
        <Grid.Col>
          <Button className="bg-primary-accent hover:bg-secondary-accent">
            Cadastrar
          </Button>
        </Grid.Col>
      </Grid>
    </RegisterSection>

  );
}