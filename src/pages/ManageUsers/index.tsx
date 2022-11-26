import { Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Container } from '../../shared/components/Forum/styles';
import { ManageTable } from '../../shared/components/Table';
import { GetAllUsers } from '../../shared/services/ManageUsers';
import { GetUser } from '../../shared/Types/types';

export function ManageUser() {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<GetUser[]>([]);

  const list_users = async () => {
    const res = async () => {
      setLoading(true);
      const response = await GetAllUsers();
      if (response?.status == 200) {
        setData(response?.data);
      }
    }
    res();
  }

  useEffect(() => {
    list_users()
  }, []);

  return (
    <Container style={{flexDirection: "column"}}>

      <Title order={2} style={{padding: "auto", marginBottom: "2.125rem"}}>
        Gerenciamento de Usuários
      </Title>
      <ManageTable data={data} />

    </Container>
  );

}