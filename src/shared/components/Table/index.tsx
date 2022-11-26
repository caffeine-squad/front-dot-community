import { Table, ScrollArea, Group, Text, ActionIcon } from '@mantine/core';
import { IoTrashOutline } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';

interface GetUser {
  data: { 
    id: string;
    name: string; 
    email: string; 
    cellPhone: string; 
  }[]
}

export function ManageTable({ data }: GetUser) {

  const rows = data.map((item) => {
    return (
      <tr key={item.id} >
        <td>
          <Group spacing="sm">
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
          </Group>
        </td>
        <td>{item.email}</td>
        <td>{item.cellPhone}</td>
        <td>
          <ActionIcon 
            style={{border: "1px solid #c41111", color:"#c41111"}}
          ><IoTrashOutline size={16} /></ActionIcon>
        </td>
        <td>
          <ActionIcon
            style={{border: "1px solid #228be6", color:"#228be6"}}
          ><FiEdit size={16} /></ActionIcon>
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{overflowX: "scroll"}}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th style={{ width: 40 }}>
            </th>
            <th style={{ width: 40 }}>
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}