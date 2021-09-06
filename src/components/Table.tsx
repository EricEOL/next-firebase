import Client from "../core/Client";
import { DeleteIcon, EditIcon } from "./Icons";

interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void
  deletedClient?: (client: Client) => void
}

export function Table(props: TableProps) {

  const showActions = props.selectedClient || props.deletedClient;

  function tableHeader() {
    return (
      <tr>
        <th className="text-left p-3">Código</th>
        <th className="text-left p-3">Nome</th>
        <th className="text-left p-3">Idade</th>
        {showActions ? <th className="p-3">Ações</th> : false}
      </tr>
    )
  }

  function tableData() {
    return props.clients?.map((client, index) => {
      return (
        <tr
          key={client.id}
          className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td className="text-left p-3">{client.id}</td>
          <td className="text-left p-3">{client.name}</td>
          <td className="text-left p-3">{client.age}</td>
          {showActions ? tableAction(client) : false}
        </tr>
      )
    })
  }

  function tableAction(client: Client) {
    return (
      <td className="flex justify-center">
        {props.selectedClient ? (
          <button onClick={() => props.selectedClient?.(client)} className={`
            flex justify-center items-center
            text-green-600 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>
            {EditIcon}
          </button>

        ) : false}

        {props.deletedClient ? (
          <button onClick={() => props.deletedClient?.(client)} className={`
            flex justify-center items-center
            text-red-500 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>
            {DeleteIcon}
          </button>
        ) : false}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
        {tableHeader()}
      </thead>
      <tbody>
        {tableData()}
      </tbody>
    </table>
  )
}