import { useContext } from "react";
import { Context } from "../context/script";

const useAppContext = () => {
    return useContext(Context);
};

export default useAppContext;
