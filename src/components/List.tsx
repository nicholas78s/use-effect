import React, { useContext } from 'react'
import UsersContext from '../contexts/UsersContext';
import { User } from './User';

export interface UserType {
  id: number;
  name: string;
  active?: boolean;
}

export const List: React.FC = () => {
  //const [users, setUsers] = useState<UserType[]>([]);
  const {users} = useContext(UsersContext);

  return (
    <div className="users-list">
      {/* {users.map((user) => <div key={user.id} onClick={handleClick}>{user.name}</div>)} */}
      {users.map((user) => <User key={user.id} id={user.id} name={user.name} />)}
    </div>
  )
}
