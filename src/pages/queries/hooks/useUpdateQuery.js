import {useState} from "react";
import {pfApi} from "../../../axios/axios.config";
import {useToast} from "@chakra-ui/react";
import {useSWRConfig} from "swr";

export const useUpdateQuery = () => {
  const [isUpdateQueryLoading, setLoading] = useState(false);
  const {mutate} = useSWRConfig()
  const toast = useToast();

  const updateQuery = async (queryId, updatedData, queries) => {
    try {
      setLoading(true);
      await pfApi.patch(`/queries/${queryId}`, updatedData);
      await mutate(`/queries/all?page=${queries.currentPage}`);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.error('Error in updateQuery:', e);
      const title = `Sorry something's wrong. Try again later. ${e.response?.data?.message || e.message}`;
      toast({title, status: 'error', position: 'top-right'});
    }
  }

  return {
    updateQuery,
    isUpdateQueryLoading,
  }
}