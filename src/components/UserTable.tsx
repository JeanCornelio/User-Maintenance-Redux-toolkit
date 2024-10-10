



import { Button, Table } from "flowbite-react";
import { UserWithId } from "../types/user";
import { useAppSelector } from "../hooks/store";
import { useUserActions } from "../hooks/useUserActions";
import { CreateUser } from "./CreateUser";

export function UserTable() {
const users = useAppSelector(({users}) => users.list)
const {removeUser, prepareUserToEdit} = useUserActions()


  return (
    <div className="overflow-x-auto">
        <div className="">
            <CreateUser />
        </div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Avatar</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Github</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
     
        <Table.Body className="divide-y">
        {
            users.map((user: UserWithId) => (
                <Table.Row key={user.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user.id}
                </Table.Cell>
                <Table.Cell>
                <img className="w-14 rounded-full border border-blue-700" src={`https://unavatar.io/github/${user.gitHub}`} alt={`${user.name}'s github avatar`} />
                    </Table.Cell>
                <Table.Cell>
                {user.name}
                </Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.gitHub}</Table.Cell>
                <Table.Cell >
                    <div className="flex  gap-4">
                        <Button  color="yellow" onClick={() => prepareUserToEdit(user)} >Edit</Button>
                        <Button color="red" onClick={() => removeUser(user.id)}>Remove</Button>
                    </div>
               
                </Table.Cell>
              </Table.Row>
            ))
        }
       
        </Table.Body>
      </Table>
    </div>
  );
}

