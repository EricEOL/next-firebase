import { useEffect, useState } from "react";
import { CollectionClient } from "../backend/db/CollectionClient";
import { RepositoriesClient } from "../core/RepositoriesClient";
import Client from '../core/Client';
import useTableOrForm from "./useTableOrForm";

export default function useClients() {
  const repository: RepositoriesClient = new CollectionClient(); 

  const {
    tableVisible,
    formVisible, 
    showForm,
    showTable 
  } = useTableOrForm();

  const [clients, setClients] = useState([]);
  const [client, setClient] = useState<Client>(Client.void());

  useEffect(getAllClients, []);

  function getAllClients() {
    repository.all().then(setClients);
  }

  function newClient(){
    setClient(Client.void());
    showForm();
  }

  function selectedClient(client: Client) {
    setClient(client);
    showForm();
  }

  async function deletedClient(client: Client) {
    await repository.delete(client);
    getAllClients();
  }

  function clientSaved(client: Client) {
    repository.save(client);
    getAllClients();
    showTable();
  }

  return {
    client,
    clients,
    newClient,
    clientSaved,
    deletedClient,
    selectedClient,
    getAllClients,
    tableVisible,
    formVisible,
    showTable
  }
}