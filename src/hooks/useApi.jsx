import { useContext } from "react";
import ApiContext from "../context/apiContext";

const useApi = () => {
  return useContext(ApiContext);
};

export default useApi;
