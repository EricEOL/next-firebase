import { useState } from "react";
import Client from "../core/Client";
import { Input } from "./Input";
import { Button } from './Button';

interface FormProps {
  client?: Client;
  clientChange?: (client: Client) => void;
  canceled?: () => void;
}

export function Form(props: FormProps) {

  const id = props.client?.id;

  const [name, setName] = useState(props.client?.name ?? '');
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id ? (
        <Input
          readOnly
          text="Código"
          value={id}
          className="mb-5"
        />
      ) : false}
      <Input
        text="Nome"
        value={name}
        onChange={setName}
        className="mb-5"
      />
      <Input
        text="Idade"
        type="number"
        value={age}
        onChange={setAge}
      />

      <div className="flex justify-end mt-7">
        <Button 
          onClick={() => props.clientChange?.(new Client(name, Number(age), id))}
          color="blue" 
          className="mr-2"
        >
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button onClick={props.canceled}>
          Cancelar
        </Button>
      </div>
    </div>
  )
}