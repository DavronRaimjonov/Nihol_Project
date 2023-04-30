import { useMutation, useQueryClient } from "react-query";
import { useAxios } from "../useAxios";

const useEditFromChase = () => {
  const queryClient = useQueryClient();
  return (editData) => {
    return queryClient.setQueryData(`user${editData._id}`, (oldData) => {
      return { ...editData };
    });
  };
};

const useEditData = () => {
  const axios = useAxios();
  const editDataFromChase = useEditFromChase();
  return useMutation(({ editData, buildingNumber }) => {
    let editBuildingNumber = buildingNumber.slice(-1);
    editDataFromChase(editData);
    return axios({
      url: `/accomodation/${editBuildingNumber}/update-user`,
      method: "POST",
      body: editData,
    });
  });
};

export { useEditData };
