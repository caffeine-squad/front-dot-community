import { Divider, Input, Modal, Textarea, Button, Loader } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { createTopic } from "../../services/useTopic";
import { CreateTopic } from "../../Types/types";
import { ButtonFloating } from "./styles";
import { useAuth } from "../../context/useAuth";

interface ButtonFloatProps{
  checkTopic:()=> void
}

export function ButtonFloat({checkTopic}:ButtonFloatProps) {
  const [opened, setOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { user } = useAuth();
 

  const form = useForm({
    initialValues: {
      title: '',
      description: '',
      userId: user?.id,
    },
  });

 

  useEffect(() => {
    function HandleResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', HandleResize)
  })

  const handle_close_self = () => {
    setOpened(false)
    form.reset()
  }
  
  const create_topics = (values: CreateTopic) => {  
    const res = async () => {
      setLoading(false);
      const resposta = await createTopic(values)
      if (resposta?.status === 201) {
        setData(resposta?.data);
        checkTopic();
        handle_close_self();
      }
      setLoading(true)
    }
    res();
    
  }

  function criar(values: CreateTopic) {
    create_topics(values)
  }

return (
  <>
    <Modal
      withCloseButton={false}
      className=''
      size={windowWidth < 1000 ? '100%' : '65%'}
      overlayBlur={4}
      opened={opened}
      onClose={() => setOpened(false)}
    >
    <form onSubmit={form.onSubmit((values) => criar(values))}>
      {!loading ?
      <Loader/>
      : (
        <>
              <div className="flex">
        <HiOutlinePencil className=" flex self-center text-2xl" />
        <h1 className="font-bold text-xl ml-4">
          Criar Topico
        </h1>
      </div>
      <Divider my="sm" variant="dotted" color={'blue'} />
      <div className="flex flex-col p-4 font-semibold text-sm">
        <div className='my-2 flex flex-col lg:flex-row'>
          <label className='pr-4 min-w-[6rem] items-center'>Título</label>
          <Input
            required
            placeholder="Título do tópico"
            className='w-full'
            {...form.getInputProps('title')}
          />
        </div>
        <div className='my-2 flex flex-col lg:flex-row'>
          <label className='pr-4 min-w-[6rem] items-center'>Descrição</label>
          <Textarea
            placeholder="Digite algo aqui.."
            autosize
            minRows={4}
            className="w-full"
            {...form.getInputProps('description')}
          />
        </div>
      </div></>
      )}

      <div className="flex justify-end mr-1">
        <Button className=" button w-32 bg-primary-error hover:bg-secondary-error mr-4">Cancelar</Button>
        <Button className=" button w-32 bg-primary-accent hover:bg-secondary-accent " type="submit" >Criar</Button>
      </div>
      </form>
    </Modal>

    <ButtonFloating onClick={() => setOpened(true)} ><HiOutlinePencil className="flex inline-flex text-[1.2rem] mr-[0.4rem]/" />Criar Tópico</ButtonFloating>
  </>
)
}