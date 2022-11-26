import { Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Container } from '../../shared/components/Forum/styles';
import { ManageTable } from '../../shared/components/Table';
import { useAuth } from '../../shared/context/useAuth';
import { GetAllUsers } from '../../shared/services/ManageUsers';
import { GetUser } from '../../shared/Types/types';

// export const data = [
//     {
//     "id": "1",
//     "name": "Robert Wolfkisser",
//     "userType": "Engineer",
//     "email": "rob_wolf@gmail.com"
//     },
//     {
//     "id": "2",
//     "name": "Jill Jailbreaker",
//     "userType": "Engineer",
//     "email": "jj@breaker.com"
//     },
//     {
//     "id": "3",
//     "name": "Henry Silkeater",
//     "userType": "Designer",
//     "email": "henry@silkeater.io"
//     },
//     {
//     "id": "4",
//     "name": "Bill Horsefighter",
//     "userType": "Designer",
//     "email": "bhorsefighter@gmail.com"
//     },
//     {
//     "id": "5",
//     "name": "Jeremy Footviewer",
//     "userType": "Manager",
//     "email": "jeremy@foot.dev"
//     }
// ]

export function ManageUser() {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<GetUser[]>([]);
  const [currentTopic, setCurrentTopic] = useState<number>();

  const list_users = async () => {
    const res = async () => {
      setLoading(true);
      const resposta = await GetAllUsers();
      if (resposta?.status == 200) {
        setData(resposta?.data);
      }
      setLoading(false);
    }
    res();
  }

  useEffect(() => {
    list_users()
  })
  
  return (
    <Container style={{flexDirection: "column"}}>

      <Title order={2} style={{padding: "auto", marginBottom: "2.125rem"}}>
        Gerenciamento de Usuários
      </Title>
      <ManageTable data={data} />

    </Container>
  );

}