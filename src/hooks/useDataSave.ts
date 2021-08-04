import { firestore } from "firestore";
import { useCallback, useState } from "react";

export const useDataSave = (collection: string) => {
  const [dbErr, setDbErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const saveData = useCallback(
    async <T>(data: T) => {
      setLoading(true);
      setDbErr(null);

      try {
        const res = await firestore.collection(collection).add(data);
        return res.id;
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
