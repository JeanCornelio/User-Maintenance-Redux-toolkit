import { clearUserToEdit, createUser, deleteUserById, setUserToEdit, editUser } from "../store/users/slice"
import { User, UserId, UserWithId } from "../types/user"
import { useAppDispatch } from "./store"
import { useModal } from "./useModal"


export const useUserActions = () => {
    const {setOpenModal} = useModal()
    const dispatch = useAppDispatch()
    
    const removeUser = (id: UserId) =>dispatch(deleteUserById(id))
    
    const addUser = ({name, email, gitHub}: User  ) => dispatch(createUser({name, email, gitHub}))
    
    const modifyUserInformation = (user: UserWithId) =>{
      dispatch(editUser(user))
    }
    const prepareUserToEdit = (user: UserWithId) =>{
      dispatch(setUserToEdit(user))
      setOpenModal(true)
    }

    const clearUser = () =>{
      dispatch(clearUserToEdit())
    }
    return {
        removeUser,
        addUser,
        modifyUserInformation,
        prepareUserToEdit,
        clearUser
  }
}
