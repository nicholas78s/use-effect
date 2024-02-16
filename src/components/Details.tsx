import { useEffect, useState } from 'react'
//import UsersContext from '../contexts/UsersContext';

interface IItem {
  id: number;
  name: string;
}

interface IUserDetail {
  id: number;
  name: string;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  }
}

export const Details = ({item}: {item: IItem}) => {
  //const {users, activeUser} = useContext(UsersContext);
  const [user, setUser] = useState<IUserDetail>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    //setTimeout(func, 1000);
    if (item && item.id) {
      setLoading(true);
      //console.log(import.meta.env.VITE_API_USER_URL.replace('{id}', item.id));
      fetch(import.meta.env.VITE_API_USER_URL.replace('{id}', item.id))
        .then(res => res.json())
        .then(jsonData => {
          console.log('Loading user JSON: ', jsonData);
          setUser(jsonData);
          setLoading(false);
        })
        .catch(err => { throw err });
    }
  }, [item]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && user && user.id > 0 && 
      <div className='user-detail'>
        {/* user data: {JSON.stringify(user)} */}
        <div className='avatar'><img src={user.avatar}/></div>
        <div className="name">{user.name}</div>
        <div>City: {user.details.city}</div>
        <div>Company: {user.details.company}</div>
        <div>Position: {user.details.position}</div>
        {/* <div className="details">item-id: {item.id} item-name: {item.name} 
          {
            users
              .filter((user) => (user.id === activeUser))
              .map((user) => <div>{user.id} {user.name}</div>)
          }
        </div> */}
      </div>}
    </>
    
  )
}
