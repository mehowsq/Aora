import { isLoading } from "expo-font";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Models } from "react-native-appwrite";

const useAppwrite = (fn: () => Promise<Models.Document[]>) => {
  const [data, setData] = useState<Models.Document[]>([]);
  const [loading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fn();
      setData(response);
    } catch (error: any) {
      Alert.alert("Error", error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => fetchData();

  return { data, isLoading, refetch };
};

export default useAppwrite;
