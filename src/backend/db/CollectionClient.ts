import Client from "../../core/Client";
import { RepositoriesClient } from "../../core/RepositoriesClient";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from "../config";
import { v4 as uuidv4 } from 'uuid';

export class CollectionClient implements RepositoriesClient {

  async save(client: Client): Promise<Client> {
    try {
      const docRef = await addDoc(collection(db, "clients"), {
        id: uuidv4(),
        name: client.name,
        age: client.age
      });
    } catch (error) {
      console.error(`Error: ${error}`);
    }
    return null;
  }

  async delete(client: Client): Promise<void> {
    return null;
  }

  async all(): Promise<any> {
    const querySnapshot = await getDocs(collection(db, "clients"));
    
    return querySnapshot.docs.map(doc => doc.data());
  }
}