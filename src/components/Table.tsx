import Client from "../core/Client";

interface TableProps {
  clients: Client[];
}

export function Table(props: TableProps) {

  function tableHeader() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    )
  }

  function tableData() {
    return props.clients?.map((client, index) => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.age}</td>
        </tr>
      )
    })
  }

  return (
    <table>
      <thead>
        {tableHeader()}
      </thead>
      <tbody>
        {tableData()}
      </tbody>
    </table>
  )
}