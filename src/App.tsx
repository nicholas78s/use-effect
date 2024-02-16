import { useEffect, useState } from 'react'
import './App.css'
import { List, UserType } from './components/List'
import UsersContext from './contexts/UsersContext'
import { Details } from './components/Details';

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [activeUser, setActiveUser] = useState<number>(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    //setTimeout(func, 1000);
    fetch(import.meta.env.VITE_API_URL)
      .then(res => res.json())
      .then(jsonData => {
        console.log('Checkout this JSON! ', jsonData);
        setUsers(jsonData);
        setLoading(false);
      })
      .catch(err => { throw err });
  }, []);
  
  const item = {id: activeUser, name: ''};
  return (
    <>
      <UsersContext.Provider value={{users, setUsers, activeUser, setActiveUser}}>
        {isLoading && <div>Loading...</div>}
        <div className="container">
          <List />
          <Details item={item}/>
        </div>
      </UsersContext.Provider>
    </>
  )
}

export default App
