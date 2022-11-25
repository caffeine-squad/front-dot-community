import { Topic } from "../../pages/Topic";
import { CreateTopic, TypeTopic } from "../Types/types";
import { api } from "./api"

export const getAllTopic = async () => {
  const topics = await api.get('/topic');
  return topics;
};

export const getTopicById = async (id: number) => {
  const topic = await api.get(`/topic/${id}`);
  return topic;
}

export const createTopic = async(values: CreateTopic) : Promise<any> =>{
  const resposta = await api 
		.post('/topic', { values })
		.then((res) => res.data)
		.catch((e) => {
			console.log(e);
		});
		return resposta
};