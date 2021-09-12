import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Layout } from "../components/Layout";
import { Table } from "../components/Table";
import useClients from "../hooks/useClients";

export default function Home() {

  const { 
    client,
    clients,
    selectedClient, 
    deletedClient, 
    newClient,
    clientSaved,
    tableVisible,
    showTable
  } = useClients();

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {tableVisible ? (
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
            canceled={() => showTable()}
          />
        )}
      </Layout>
    </div>
  )
}
