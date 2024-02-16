import { createContext } from "react"

interface UserType {
  id: number;
  name: string;
}

interface IContext {
  users: UserType[],
  setUsers: React.Dispatch<React.SetStateAction<UserType[]>>,
  activeUser: number,
  setActiveUser: React.Dispatch<React.SetStateAction<number>>
}

const initialContext: IContext = {
  users: [],
  setUsers: () => {},
  activeUser: 0,
  setActiveUser: () => {}
}

const UsersContext = createContext<IContext>(initialContext);

export default UsersContext;