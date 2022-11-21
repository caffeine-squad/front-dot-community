import { Grid, Textarea, Text, Button, Divider } from "@mantine/core";
import { IoChatbubblesOutline } from "react-icons/io5";
import { Card, Line } from "../CardTopic/styles";

export function CardPost() {
  return (
    <Card>
      <Line>
        <Grid className="w-full">
          <Grid.Col span={6}>
            <Text className="pb-4 text-secondary-accent font-bold" >Fulano</Text>
          </Grid.Col>
          <Grid.Col span={6} className="inline-flex w-full justify-end self-center">
            <Text>19/11/2022</Text>
          </Grid.Col>
          <Grid.Col>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </Grid.Col>
          <Grid.Col>
            <Divider my="sm" className="p-4" />
          </Grid.Col>
          <Grid.Col className="inline-flex items-center">
            <IoChatbubblesOutline className="text-2xl text-secondary-accent mr-1"/>
            <Text className="text-secondary-accent">Fulaninha</Text>
          </Grid.Col>
          <Grid.Col>
            <Textarea
              placeholder="Faça um comentário.."
              autosize
              minRows={3}
              className="pb-0"
            />
          </Grid.Col>
          <Grid.Col className="flex justify-end">
            <Button className="button w-32 bg-primary-accent hover:bg-secondary-accent">Comentar</Button>
          </Grid.Col>
        </Grid>
      </Line>
    </Card>
  )
}