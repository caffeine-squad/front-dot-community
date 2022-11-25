import { useState } from 'react';
import { Input, Grid, PasswordInput, Select, Title, MultiSelect } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import InputMask from 'react-input-mask';
import { Line } from './styles';

export function UserRegister() {
  const [bloodValue, setBloodValue] = useState('');
  const [comorbidityValue, setComorbidityValue] = useState('');
  const [typeUserValue, setTypeUserValue] = useState('');
  const [organValue, setOrganValue] = useState('');
  const [typeAccont, setTypeAccont] = useState('');
  return (
    <Line>
      <Grid>
        <Grid.Col>
          <Title order={3}>{typeAccont === 'Pessoal' ? "Dados Pessoais" : "Dados da Instituição"}</Title>
        </Grid.Col>
        <Grid.Col span={6}>
          <Select
            label="Tipo de conta"
            placeholder="Selecione o tipo de conta"
            searchable
            withAsterisk
            onSearchChange={setTypeAccont}
            defaultValue={'Pessoal'}
            searchValue={typeAccont}
            nothingFound="Não encontrado"
            data={['Instituição', 'Pessoal']}
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
          <Input.Wrapper
            withAsterisk
            label={typeAccont === 'Pessoal' ? "Nome Completo" : "Nome da Instituição"}
            placeholder="Nome Completo"
          >
            <Input placeholder="Nome Completo" required />
          </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={6}>
          {typeAccont === 'Pessoal' ?

            <DatePicker
              required
              placeholder="Data de nascimento"
              label="Data de Nascimento"
              inputFormat="DD/MM/YYYY"
              labelFormat="MM/YYYY"
              withAsterisk
              defaultValue={new Date()}
            />
            :
            <Input.Wrapper label="CNPJ" required>
              <Input component={InputMask} mask="99999-99999.999.999/9999-99" placeholder="99.999.999/9999-99" />
            </Input.Wrapper>
          }
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
        {typeAccont === 'Pessoal' ?
          <>
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
              <MultiSelect
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
                defaultValue={'Doador'}
                nothingFound="Não encontrado"
                data={['Doador', 'Receptor']}
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
              <MultiSelect
                label={typeUserValue === "Receptor" ? "Qual orgão ou tecido você deseja receber?" : "Qual orgão ou tecido você deseja doar?"}
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
          </>
          :
          <></>
        }
      </Grid>
    </Line>

  );
}