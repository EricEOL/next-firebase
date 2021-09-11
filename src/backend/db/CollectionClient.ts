import Client from "../../core/Client";
import { RepositoriesClient } from "../../core/RepositoriesClient";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"; 
import { db } from "../config";
import { v4 as uuidv4 } from 'uuid';

export class CollectionClient implements RepositoriesClient {

  async save(client: Client): Promise<Client> {
    try {
      const docRef = await addDoc(collection(db, "clients"), {
        name: client.name,
        age: client.age
      });
    } catch (error) {
      console.error(`Error: ${error}`);
    }
    return null;
  }

  async delete(client: Client): Promise<void> {
    try {
      await deleteDoc(doc(db, "clients", client.id));
    } catch (error) {
      console.log(error);
    }
  }

  async all(): Promise<any> {
    const querySnapshot = await getDocs(collection(db, "clients"));
    
    const data = querySnapshot.docs.map(doc => {
      const {age, name} = doc.data();
      return {
        id: doc.id,
        age,
        name
      }
    });
    return data;
  }
}