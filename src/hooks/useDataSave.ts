import Router from "next/router";
import { firestore } from "firestore";
import { useCallback, useState } from "react";

export const useDataSave = (collection: string) => {
  const [dbErr, setDbErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const saveData = useCallback(
    async <T>(data: T) => {
      setLoading(true);

      try {
        const res = await firestore.collection(collection).add(data);
        const id = res.id;

        Router.push({
          pathname: "/success",
          query: { id },
        });
      } catch (err) {
        setDbErr(err.message);
      } finally {
        setLoading(false);
      }
    },
    [collection]
  );
  return { dbErr, loading, saveData };
};
