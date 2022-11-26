import { ButtonLink, Card, Line } from "./styles";
import { ActionIcon, Grid, Loader, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteTopic, getAllTopic, getTopicById } from "../../services/useTopic";
import { TypeTopic } from "../../Types/types";
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import {useAuth} from "../../context/useAuth"

interface CardTopicProps {
  newTopic: boolean
  onChangeModalEdit: (data: TypeTopic) => void
}

export function CardTopic({ newTopic, onChangeModalEdit }: CardTopicProps) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TypeTopic[]>([]);
  const [currentTopic, setCurrentTopic] = useState<number>();
  const [checkDelete, setCheckDelete] = useState(true)
  const {user, authenticated} = useAuth()

  const list_forum = () => {
    const res = async () => {
      const resposta = await getAllTopic()
      setData(resposta?.data);
    }
    res();
  }

  const topicId = async (id: TypeTopic) => {
    const topic = await getTopicById(id.id as number);
    setCurrentTopic(topic.data.id.id);
  }
  console.log(currentTopic)

  const onDeleteTopic = async (id?: number) => {
    const res = async () => {

      const resposta = await deleteTopic(id as number)
      if (resposta?.status === 204) {
        setCheckDelete(!checkDelete)
      }
      setLoading(false)
    }
    res();
  }

  function deletar(id?: number) {
    // console.log(id)
    setLoading(true);
    onDeleteTopic(id)
    // 
  }

  useEffect(() => {
    list_forum();
  }, [newTopic, checkDelete])

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
                    <Grid.Col>
                      <Text className="pb-4 text-secondary-accent font-bold" >{data.userName}</Text>
                    </Grid.Col>
                    <Grid.Col className="inline-flex">
                      <Grid.Col span={6}>
                        <Link to='/forum/topico/:id'><Title  order={5} className="pb-4">{data.title}</Title></Link>
                      </Grid.Col>
                      {authenticated===true && user?.userType==='Admin'? <Grid.Col span={6} className="flex justify-end self-center">
                        <ActionIcon variant="outline" style={{ color: "#228be6", border: "solid 1px #228be6", marginRight: "1rem" }} onClick={() => onChangeModalEdit(data)}><FiEdit size={16} /></ActionIcon>
                        <ActionIcon variant="outline" style={{ color: "#c41111", border: "solid 1px #c41111" }} onClick={() => deletar(data.id)}><IoTrashOutline size={16} /></ActionIcon>
                      </Grid.Col>: <></>}
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Text lineClamp={4}>
                        {data.description}
                      </Text>
                    </Grid.Col>
                    <Grid.Col span={6} className="inline-flex w-full justify-end self-center">
                      <Grid.Col span={2} className="flex justify-end">
                        <Text>{data.numberOfComments.Comment}</Text>
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