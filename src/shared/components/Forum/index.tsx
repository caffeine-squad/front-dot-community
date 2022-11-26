import { Grid, Title } from "@mantine/core";
import { useState } from "react";
import { CreateTopic, TypeTopic } from "../../Types/types";
import { ButtonFloat } from "../ButtonFloat";
import { CardTopic } from "../CardTopic";
import { EditTopic } from "../EditTopic";
import { Container } from "./styles";

export function ForumList() {
  const [newTopic, setNewTopic] = useState(true);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<TypeTopic | undefined>();

  const checkTopic = () => {
    setNewTopic(!newTopic);
  }
  const onChangeModalEdit = (data:TypeTopic) =>{
    setOpen(!open)
    setData(data)
  }
  return (
    <Container>
      <Grid className="w-full">
        <Grid.Col span={4}>
          <Title order={4}>Tópico</Title>
        </Grid.Col>
        <Grid.Col span={8} className="inline-flex justify-end">
            <Title order={4} className="pr-16">Comentários</Title>
            <Title order={4} className="pr-8">Data</Title>
        </Grid.Col>
        <Grid.Col>
            <CardTopic onChangeModalEdit={onChangeModalEdit}  newTopic={newTopic}/>
        
        </Grid.Col>
      </Grid>
      <ButtonFloat checkTopic={checkTopic}/>

      <EditTopic checkTopic={checkTopic} onChangeModalEdit={onChangeModalEdit} opened={open} data={data}/>
    </Container>
  )

}