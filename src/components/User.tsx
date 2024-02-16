import { useContext } from 'react'
import UsersContext from '../contexts/UsersContext';

export const User = ({id, name}: {id: number, name: string}) => {
  //const [active, setActive] = useState(false);
  const {activeUser, setActiveUser} = useContext(UsersContext);

  const handleClick = () => {
    //e.preventDefault();
    setActiveUser(id);
  }

  return (
    <div className={activeUser === id ? 'user active' : 'user'} onClick={handleClick}>{name}</div>
  )
}
