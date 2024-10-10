import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserId, users, UserWithId } from "../../types/user";

const localStorageUsers = () => {
  const localSotage = localStorage.getItem("_users_");
  return localSotage ? JSON.parse(localSotage) : users;
};

interface initialState  {
    list: UserWithId[];
    userToEdit: UserWithId | null
}

const initialState: initialState = {
  list: localStorageUsers(),
  userToEdit: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    //In this part we need to create our reducers
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      state.list = state.list.filter((user: UserWithId) => user.id !== id);
    },
    createUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      const { payload } = action;
      state.list.push({ id, ...payload });
    },
    rollbackUser: (state, action: PayloadAction<UserWithId[]>) => {
      const { payload } = action;
      state.list = payload;
    },
    editUser: (state, action: PayloadAction<UserWithId>) => {
      const { payload } = action;
      const userId = payload.id;

      const newStateModify = state.list.map((user: UserWithId) => {
        if (user.id === userId) {
          return {
            ...user,
            ...payload,
          };
        }
        return user;
      });
      state.list = newStateModify;
    },
    setUserToEdit: (state, action: PayloadAction<UserWithId>) => {
      const { payload } = action;
      state.userToEdit = payload;
    },
    clearUserToEdit: (state) => {
      state.userToEdit = null;
    },
  },
});

//Export our reducer

export default userSlice.reducer;

export const {
  deleteUserById,
  createUser,
  rollbackUser,
  setUserToEdit,
  clearUserToEdit,
  editUser,
} = userSlice.actions;
