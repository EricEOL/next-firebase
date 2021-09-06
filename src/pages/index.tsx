import { Button } from "../components/Button";
import { Layout } from "../components/Layout";
import { Table } from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client('Eric', 26, '1'),
    new Client('Panda', 45, '2'),
    new Client('Thamiris', 25, '3'),
    new Client('Carlos', 59, '4')
  ]

  function selectedClient(client: Client) {
    console.log(client.name)
  }

  function deletedClient(client: Client) {
    console.log(client.name)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <Button color="green" className="mb-4">Novo Cliente</Button>
        </div>
        <Table
          clients={clients}
          selectedClient={selectedClient}
          deletedClient={deletedClient}
        >
        </Table>
      </Layout>
    </div>
  )
}
