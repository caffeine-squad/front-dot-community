import { Card } from '../../CardTopic/styles';
import { Grid, Text } from '@mantine/core';

interface TypeComment {
  nameUser: string,
	text: string
}

export function CardComment({nameUser, text}: TypeComment) {
	return (
		<Card className='p-10'>
			<Grid className="w-full">
				<Grid.Col span={6}>
					<Text className="pb-4 text-secondary-accent font-bold" >{nameUser}</Text>
				</Grid.Col>
				<Grid.Col span={6} className="inline-flex w-full justify-end self-center">
						<Text>19/11/2022</Text>
				</Grid.Col>
				<Grid.Col>
					<Text>
						{text}
					</Text>
				</Grid.Col>
			</Grid>
		</Card>
	);
}
