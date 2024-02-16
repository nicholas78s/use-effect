import { useEffect, useState } from 'react'

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
  const [user, setUser] = useState<IUserDetail>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (item && item.id) {
      setLoading(true);
      fetch(import.meta.env.VITE_API_USER_URL.replace('{id}', item.id))
        .then(res => res.json())
        .then(jsonData => {
          setUser(jsonData);
        })
        .catch(err => { throw err })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [item]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && user && user.id > 0 && 
        <div className='user-detail'>
          <div className='avatar'><img src={user.avatar}/></div>
          <div className="name">{user.name}</div>
          <div>City: {user.details.city}</div>
          <div>Company: {user.details.company}</div>
          <div>Position: {user.details.position}</div>
        </div>
      }
    </>
  )
}
