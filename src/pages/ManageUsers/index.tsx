import { Title } from '@mantine/core';
import { Container } from '../../shared/components/Forum/styles';
import { ManageTable } from '../../shared/components/Table';

export const data = [
    {
    "id": "1",
    "name": "Robert Wolfkisser",
    "userType": "Engineer",
    "email": "rob_wolf@gmail.com"
    },
    {
    "id": "2",
    "name": "Jill Jailbreaker",
    "userType": "Engineer",
    "email": "jj@breaker.com"
    },
    {
    "id": "3",
    "name": "Henry Silkeater",
    "userType": "Designer",
    "email": "henry@silkeater.io"
    },
    {
    "id": "4",
    "name": "Bill Horsefighter",
    "userType": "Designer",
    "email": "bhorsefighter@gmail.com"
    },
    {
    "id": "5",
    "name": "Jeremy Footviewer",
    "userType": "Manager",
    "email": "jeremy@foot.dev"
    }
]

export function ManageUser() {

    return (
      <Container style={{flexDirection: "column"}}>

        <Title order={2} style={{padding: "auto", marginBottom: "2.125rem"}}>
          Gerenciamento de Usuários
        </Title>
        <ManageTable data={data} />

      </Container>
    );

}