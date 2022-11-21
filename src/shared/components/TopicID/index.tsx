import { Grid, Title } from "@mantine/core";
import { CardPost} from "../CardPost";
import { CardComment } from "./CardComment";
import { Section } from "./styles";

export function TopicID() {
  return (
    <Section>
      <Grid>
        <Grid.Col>
          <Title order={2} className="text-center">Titulo do Topico</Title>
        </Grid.Col>
        <Grid.Col>
            
            <CardPost/>

          <CardComment nameUser="Cricrano" text="É verdade, Fulano. Concordo!"/>
        </Grid.Col>
      </Grid>
    </Section>
  )
}