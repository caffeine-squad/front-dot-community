import { Grid, Textarea, Text, Button } from "@mantine/core";
import { Card } from "../CardTopic/styles";

export function InputComment() {
  return (
    <Card className="px-10 py-5 my-8">
      <Grid>
        <Grid.Col>
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

    </Card>
  )
}