import { useQuery } from "react-query";
import { useAxiosHandler } from "../useAxios";
export const useQueryHandler = () => {
  const axios = useAxiosHandler();
  return ({ pathName, url }) => {
    return useQuery(pathName, () => axios({ url }), {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    });
  };
};
