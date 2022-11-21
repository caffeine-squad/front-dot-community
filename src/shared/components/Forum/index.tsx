import { Grid, Title } from "@mantine/core";
import { CardTopic } from "../CardTopic";
import { Container } from "./styles";

export function ForumList() {
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
          <CardTopic/>
        </Grid.Col>
      </Grid>
    </Container>
  )

}