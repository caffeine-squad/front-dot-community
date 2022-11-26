import { ActionIcon, Input, TextInput } from "@mantine/core";
import { useState } from "react";
import { FiCheckSquare, FiEdit } from "react-icons/fi";

interface TypeInput {
  title: string,
  value: string,
}

export function InputText({title, value}: TypeInput) {
  const [disableInput, setDisableInput] = useState(true)
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
      <label className='pr-4 flex items-center'>{title}</label>

      <div className='flex pr-4'>
        <Input
          required
          value={value}
          disabled={disableInput}
          className='w-72'
        />
        {renderEditUser()}
      </div>
    </>
  )
}

