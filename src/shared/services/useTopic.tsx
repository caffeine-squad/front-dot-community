import { CreateTopic } from "../Types/types";
import { api } from "./api"


export const getAllTopic = async () => {
	const topics = await api.get('/topic');
	return topics;
};

export const getTopicById = async (id: number) => {
	const topic = await api.get(`/topic/${id}`);
	return topic.data;
}

export const createTopic = async (values: CreateTopic): Promise<any> => {
	return await api.post('/topic', values)
};

export const deleteTopic = async (id: number) => {
	return await api.delete(`/topic/${id}`)

}

export const updateTopic = async (values: CreateTopic, id: number) : Promise<any> =>{
	return await api.put(`/topic/${id}`, values)
}