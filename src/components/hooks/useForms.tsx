import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const useForms = () => {
	return useContext(FormContext);
};

export default useForms;
