import { ButtonLink, Card, Line } from "./styles";
import { Grid, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

export function CardTopic() {
  return (

    <Card>
      <Line>
        <Grid className="w-full">
          <Grid.Col>
            <Link to='/forum/topico'><Title order={5} className="pb-4">Título</Title></Link>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text lineClamp={4}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </Text>
          </Grid.Col>
          <Grid.Col span={6} className="inline-flex w-full justify-end self-center">
            <Grid.Col span={2} className="flex justify-end">
              <Text>10</Text>
            </Grid.Col>
            <Grid.Col span={4} className="flex justify-end">
              <Text>19/11/2022</Text>
            </Grid.Col>
          </Grid.Col>
          <Grid.Col>
            <ButtonLink>Ver mais...</ButtonLink>
          </Grid.Col>
        </Grid>
      </Line>
    </Card>
  )
}