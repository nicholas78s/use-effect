import { useContext } from 'react'
import UsersContext from '../contexts/UsersContext';

export const User = ({id, name}: {id: number, name: string}) => {
  const {activeUser, setActiveUser} = useContext(UsersContext);

  const handleClick = () => {
    setActiveUser(id);
  }

  return (
    <div className={activeUser === id ? 'user active' : 'user'} onClick={handleClick}>{name}</div>
  )
}
