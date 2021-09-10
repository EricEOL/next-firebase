import { useEffect, useState } from "react";
import { CollectionClient } from "../backend/db/CollectionClient";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Layout } from "../components/Layout";
import { Table } from "../components/Table";
import Client from "../core/Client";
import { RepositoriesClient } from "../core/RepositoriesClient";

export default function Home() {

  const repository: RepositoriesClient = new CollectionClient(); 

  useEffect(getAllClients, []);

  const [visible, setVisible] = useState<'table' | 'form'>('table');
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState<Client>(Client.void());

  function getAllClients() {
    repository.all().then(setClients);
  }

  function newClient(){
    setClient(Client.void());
    setVisible('form');
  }

  function selectedClient(client: Client) {
    setClient(client);
    setVisible('form');
  }

  function deletedClient(client: Client) {
    console.log(client.name)
  }

  function clientSaved(client: Client) {
    repository.save(client);
    getAllClients();
    setVisible('table');
  }

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
                onClick={newClient} 
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
            client={client}
            clientChange={clientSaved} 
            canceled={() => setVisible('table')}
          />
        )}
      </Layout>
    </div>
  )
}
