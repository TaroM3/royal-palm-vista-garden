'use client';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '@/config/firebase';

interface FirestoreProps {
  database: string;
}

// type Data = {
//   id: string;
//   name: string;
//   day: Date;
// };

const useFirestore = ({ database }: FirestoreProps) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const collect = collection(db, database);
    getDocs(collect).then((res) => {
      const arrayData = res.docs.map((data) => {
        return { ...data.data(), id: data.id };
      });
      setData(arrayData);
    });
  }, [database]);
  return [data];
};

export default useFirestore;
