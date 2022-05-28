import { createContext, useContext, useReducer } from "react";
import { userDataReducer } from "../reducer/userDataReducer";

const UserDataContext = createContext(null);

const useUserData = () => useContext(UserDataContext);

const initial_user_data = [];

const UserDataProvider = ({ children }) => {
  const [user_data, setUserData] = useReducer(
    userDataReducer,
    initial_user_data
  );
  return (
    <UserDataContext.Provider value={{ user_data, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export { useUserData, UserDataProvider };
