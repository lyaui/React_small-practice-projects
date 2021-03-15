import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy('createAt', 'desc')
      .onSnapshot((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((snapshot) => {
          data = [...data, snapshot.data()];
        });
        setDocs(data);
      });
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFireStore;
