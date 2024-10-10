import { Label, TextInput, Button, Modal, Alert } from "flowbite-react";
import { useCreateUser } from "../hooks/useCreateUser";


export const CreateUser = () => {
  const {
    handleModal,
    openModal,
    closeModal,
    error,
    name,
    email,
    gitHub,
    setInputValue,
    submit,
    currentUser,
  } = useCreateUser();

  return (
    <>
      <Button className="m-3" onClick={() => handleModal(true)}>
        New User
      </Button>
      <Modal show={openModal} onClose={closeModal}>
        <Modal.Header>Create User</Modal.Header>
        <Modal.Body>
          {error === "ko" && (
            <Alert color="red" className="p-2 mb-3">
              All information are required.
            </Alert>
          )}

          <form className="flex flex-col gap-4 w-full">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput
                id="name"
                name="name"
                value={name}
                type="text"
                onChange={setInputValue}
                placeholder="Your name"
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                id="email"
                value={email}
                onChange={setInputValue}
                type="email"
                name="email"
                placeholder="name@flowbite.com"
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="gitHub" value="GiHub" />
              </div>
              <TextInput
                id="gitHub"
                value={gitHub}
                onChange={setInputValue}
                type="text"
                name="gitHub"
                placeholder="Your profile"
                shadow
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={submit} type="submit">
            {currentUser ? "Edit" : "Create"}
          </Button>
          <Button color="gray" onClick={closeModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
