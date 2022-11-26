import { ActionIcon, Button, Divider, Group, Modal, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { IoCheckmarkSharp, IoPeopleSharp } from "react-icons/io5";
import { FiCheckSquare, FiEdit } from "react-icons/fi";
import { DatePicker } from "@mantine/dates";
import { InputText } from "../Inputs/InputText";
import { InputData } from "../Inputs/InputData";

export function EditUser(props: any) {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [disableInput, setDisableInput] = useState(true)
  const [currentUser, setCurrentUser] = useState("oi")



  useEffect(() => {
    setOpened(props.opened)
  }, [props])

  useEffect(() => {
    function HandleResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', HandleResize)
  })

  const handle_close_self = () => {
    props.onClose()
    setOpened(false)
    setLoading(false)
    // form.reset()
  }

  function renderEditUser() {
      return (
        <>
          <ActionIcon
            className="text-secondary-accent"
            onClick={() => {
              setDisableInput(!disableInput)
            }}
            type="submit"
          >

            {disableInput ? <FiEdit size={18} /> : <FiCheckSquare size={18} />}
          </ActionIcon>

        </>);
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
        <div className="flex">
          <IoPeopleSharp className=" flex self-center text-2xl"/>
          <h1 className="font-bold text-xl ml-4">
            Editar Usuário
          </h1>
        </div>

        <Divider my="sm" variant="dotted" color={'blue'} />

        <div className="flex flex-col p-4 font-semibold text-sm">
          <div className='my-2 flex flex-col lg:flex-row'>
            <InputText
            value={currentUser}
            title={"Nome"}
            />
            <InputData
            title={"Data de Nascimento"}
            />
          </div>
          <div className='my-2 flex flex-col lg:flex-row'>
            <InputText
            value={currentUser}
            title={"Email"}
            />
            <InputText
            value={currentUser}
            title={"Senha"}
            />
          </div>
          <div className='my-2 flex flex-col lg:flex-row'>
            <InputText
            value={currentUser}
            title={"Telefone"}
            />
            <InputText
            value={currentUser}
            title={"Tipo Sanguínio"}
            />
          </div>
          <div className='my-2 flex flex-col lg:flex-row'>
            <InputText
            value={currentUser}
            title={"Comorbidade"}
            />
            <InputText
            value={currentUser}
            title={"Tipo de usuário"}
            />
          </div>
          <div className='my-2 flex flex-col lg:flex-row'>
            <InputText
            value={currentUser}
            title={"Orgãos"}
            />
          </div>
          <Button>Salvar Alterações</Button>
        </div>
      </Modal>


      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  )
}