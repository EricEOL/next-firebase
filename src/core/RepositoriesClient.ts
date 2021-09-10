import Client from "./Client";

export interface RepositoriesClient {
  save(client: Client): Promise<Client>;
  delete(client: Client): Promise<void>;
  all(): Promise<Client[]>;
}