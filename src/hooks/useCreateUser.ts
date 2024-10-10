import { useEffect, useState } from "react";
import { useModal } from "./useModal";
import { useUserActions } from "./useUserActions";
import { useAppSelector } from "./store";
import { User } from "../types/user";

const formValue: User = {
  name: "",
  email: "",
  gitHub: "",
};

export const useCreateUser = () => {
  const [error, setError] = useState<"ko" | "ok" | null>(null);
  const { setOpenModal, openModal } = useModal();
  const { addUser, modifyUserInformation, clearUser } = useUserActions();
  const [formData, setFormData] = useState(formValue);
  const currentUser = useAppSelector(({ users }) => users.userToEdit);
  const { name, email, gitHub } = formData;

  useEffect(() => {
    if (currentUser) {
      const { name, email, gitHub } = currentUser;
      setFormData({ name, email, gitHub });
    }
  }, [currentUser]);

  const handleModal = (value: boolean) => {
    setOpenModal(value);
  };

  const closeModal = () => {
    setOpenModal(false);
    resetForm();
    clearUser();
    setError(null);
  };

  const setInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData(formValue);
  };

  const submit = () => {
    setError(null);

    if (!name || !email || !gitHub) return setError("ko");
    !currentUser
      ? addUser({ name, email, gitHub })
      : modifyUserInformation({ id: currentUser.id, name, email, gitHub });
    setError("ok");
    closeModal();
  };

  return {
    name,
    email,
    gitHub,
    handleModal,
    setInputValue,
    submit,
    error,
    currentUser,
    openModal,
    closeModal,
  };
};
