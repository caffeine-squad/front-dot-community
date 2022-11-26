import { useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Text, ActionIcon } from '@mantine/core';
import { IoTrashOutline } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

interface GetUser {
  data: { 
    id: string;
    name: string; 
    email: string; 
    userType: string; 
  }[]
}

export function ManageTable({ data }: GetUser) {

  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(['0']);

  const toggleRow = (id: string) => {
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    )
  };

  const toggleAll = () => {
    setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));
  }

  const rows = data.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Group spacing="sm">
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
          </Group>
        </td>
        <td>{item.email}</td>
        <td>{item.userType}</td>
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
            <th>Usuario</th>
            <th>Email</th>
            <th>Tipo do Usuário</th>
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