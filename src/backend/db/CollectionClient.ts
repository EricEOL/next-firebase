import Client from "../../core/Client";
import { RepositoriesClient } from "../../core/RepositoriesClient";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore"; 
import { db } from "../config";

export class CollectionClient implements RepositoriesClient {

  async save(client: Client): Promise<Client> {
    
    const clientExists = client?.id;

    if(clientExists) {
      const docRef = await doc(db, "clients", client.id);

      try {
        await updateDoc(docRef, {
          name: client.name,
          age: client.age
        });
      } catch (error) {
        console.log(`Update doc error: ${error}`)
      }

    } else {
      try {
        await addDoc(collection(db, "clients"), {
          name: client.name,
          age: client.age
        });
      } catch (error) {
        console.error(`Insert new doc error: ${error}`);
      }
    }

    return;
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