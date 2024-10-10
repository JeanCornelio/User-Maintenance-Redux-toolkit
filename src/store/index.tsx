//ConfigureStore
import { configureStore, Middleware } from "@reduxjs/toolkit";
import userReducer, { rollbackUser } from "./users/slice";
import modalReducer from "./modal/slice";
import { UserWithId } from "../types/user";
import { toast } from "sonner";

//middlewares

const persistenceUserLocalStorage: Middleware =
  (store) => (next) => (action) => {
    next(action);
    const currentState = store.getState();
    localStorage.setItem("_users_", JSON.stringify(currentState.users.list));
  };

const optimisticUserDelete: Middleware = (store) => (next) => (action) => {
  const { payload, type } = action;
  const previousState = store.getState();

  next(action);
  if (type === "userSlice/deleteUserById") {
    const currentListUsers = previousState.users.list
    const userIdToRemove = payload;
    console.log(previousState)
    fetch(`https://jsonplaceholder.dtypicode.com/users/${userIdToRemove}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          toast.success(`User ${userIdToRemove} deleted correctly `);
        } else {
          throw new Error("Error deleting user");
        }
      })
      .catch(() => {
        //Roolback
        toast.error(`Error deleating user ${userIdToRemove} `);

        if (userIdToRemove) {
          store.dispatch(rollbackUser(currentListUsers));
        }
      });
  }
};

export const store = configureStore({
  reducer: {
    users: userReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [persistenceUserLocalStorage, optimisticUserDelete];
  },
});
