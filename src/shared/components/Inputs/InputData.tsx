import { ActionIcon, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useState } from "react";
import { FiCheckSquare, FiEdit } from "react-icons/fi";

interface TypeInput {
  title: string,
  value?: Date,
}

export function InputData({ title, value }: TypeInput) {
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

      <div className='flex '>
        <DatePicker
          required        
          inputFormat="DD/MM/YYYY"
          labelFormat="MM/YYYY"
          withAsterisk
          defaultValue={new Date()}
          disabled={disableInput}
          className="w-full"
        />
        {renderEditUser()}
      </div>
    </>
  )
}

