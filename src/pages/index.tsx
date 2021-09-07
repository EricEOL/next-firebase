import { useState } from "react";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
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

  function clientSaved(client: Client) {
    console.log(client);
  }

  const [visible, setVisible] = useState<'table' | 'form'>('table');

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button
                onClick={() => setVisible('form')} 
                color="green" 
                className="mb-4">
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}
            >
            </Table>
          </>
        ) : (
          <Form 
            client={clients[0]}
            clientChange={clientSaved} 
            canceled={() => setVisible('table')}
          />
        )}
      </Layout>
    </div>
  )
}
