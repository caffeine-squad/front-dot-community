import { ButtonLink, Card, Line } from "./styles";
import { Grid, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllTopic, getTopicById } from "../../services/useTopic";
import { TypeTopic } from "../../Types/types";

export function CardTopic() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TypeTopic[]>([]);
  const [currentTopic, setCurrentTopic] = useState<number>();

  const list_forum = async () => {
    const res = async () => {
      setLoading(true)
      const resposta = await getAllTopic()
      if (resposta?.status == 200) {
        setData(resposta?.data);
      }
      setLoading(false)
    }
    res();
  }

  const TopicId  = async (id: number) => {
      const topic = await getTopicById(id);
      setCurrentTopic(topic.data.id);
  }

  console.log('teste',currentTopic)

  useEffect(() => {
    list_forum()
  }, [])

  return (
    <>
      {
        data.map((data: TypeTopic, index: number) => {
          console.log(data.creationDate)
          const dataFormatted = new Date(data.creationDate)
          return (
            <>
              <Card key={index}>
                <Line>
                  <Grid className="w-full">
                    <Grid.Col >
                      <Link to='/forum/topico/:topicoID'><Title  onClick={() => TopicId(currentTopic as number)} order={5} className="pb-4">{data.title}</Title></Link>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Text lineClamp={4}>
                        {data.description}
                      </Text>
                    </Grid.Col>
                    <Grid.Col span={6} className="inline-flex w-full justify-end self-center">
                      <Grid.Col span={2} className="flex justify-end">
                        <Text>10</Text>
                      </Grid.Col>
                      <Grid.Col span={4} className="flex justify-end">
                      <Text>{`${dataFormatted.getDate()}/${dataFormatted.getMonth()}/${dataFormatted.getFullYear()}`}</Text>
                      </Grid.Col>
                    </Grid.Col>
                    <Grid.Col>
                      <ButtonLink>Ver mais...</ButtonLink>
                    </Grid.Col>
                  </Grid>
                </Line>
              </Card >
            </>
          )
        })
      }
    </>
  )
}