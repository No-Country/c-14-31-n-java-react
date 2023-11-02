import { useState } from "react";

export const useModal = (initialModal = false) => {
  const [isOpen, setIsOpen] = useState(initialModal);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return [isOpen, openModal, closeModal];
};
