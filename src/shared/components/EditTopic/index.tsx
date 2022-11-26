import { Divider, Input, Modal, Textarea, Loader, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { updateTopic } from "../../services/useTopic";
import { CreateTopic, TypeTopic } from "../../Types/types";
interface EditTopicProps {
  opened: boolean,
  data?: TypeTopic,
  onChangeModalEdit: (data: TypeTopic) => void
  checkTopic: () =>void
}
export function EditTopic({ opened, data, onChangeModalEdit, checkTopic }: EditTopicProps) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);

  const form = useForm({
    initialValues: {
      title: 'isabel',
      description: data?.description ?? '',
    },
  });

  const update_topics = (values: CreateTopic, id: number) => {
    const res = async () => {
      setLoading(false);
      const resposta = await updateTopic(values, id)
      if (resposta?.status === 204) {
        handle_close_self();
        checkTopic();
      }
      setLoading(true)
    }
    res();

  }

  useEffect(() => {
    function HandleResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', HandleResize)
  })

  const handle_close_self = () => {
    onChangeModalEdit(data as TypeTopic)
  }

  return (
    <>
      <Modal
        withCloseButton={false}
        className=''
        size={windowWidth < 1000 ? '100%' : '65%'}
        overlayBlur={4}
        opened={opened}
        onClose={() => onChangeModalEdit(data as TypeTopic)}
      >
        <form onSubmit={form.onSubmit((values) => update_topics(values, data?.id as number))}>
          {!loading ?
            <Loader />
            : (
              <>
                <div className="flex">
                  <HiOutlinePencil className=" flex self-center text-2xl" />
                  <h1 className="font-bold text-xl ml-4">
                    Editar Topico
                  </h1>
                </div>
                <Divider my="sm" variant="dotted" color={'blue'} />
                <div className="flex flex-col p-4 font-semibold text-sm">
                  <div className='my-2 flex flex-col lg:flex-row'>
                    <label className='pr-4 min-w-[6rem] items-center'>Título</label>
                    <Input
                      defaultValue={data?.title}
                      required
                      placeholder="Título do tópico"
                      className='w-full'
                      {...form.getInputProps('title')}
                    />
                  </div>
                  <div className='my-2 flex flex-col lg:flex-row'>
                    <label className='pr-4 min-w-[6rem] items-center'>Descrição</label>
                    <Textarea
                      defaultValue={data?.description}
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
            <Button className=" button w-32 bg-primary-error hover:bg-secondary-error mr-4" onClick={() => onChangeModalEdit(data as TypeTopic)}>Cancelar</Button>
            <Button className=" button w-32 bg-primary-accent hover:bg-secondary-accent " type="submit" >Editar</Button>
          </div>
        </form>
      </Modal>

    </>
  )
}
