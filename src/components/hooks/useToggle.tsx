import { useState } from "react";

const useToggle = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	// console.log(isOpen);

	return { isOpen, toggleModal, closeModal };
};

export default useToggle;
