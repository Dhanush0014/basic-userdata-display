import {useState} from 'react'
import AddUser from './Component/USER/AddUser';
import UserList from './Component/USER/UserList';

function App() {

  const [users,setUsers] = useState([]);

  const addUserHandler =(userName,age)=>{
    setUsers((prevUsers)=>{
         return [...prevUsers,{name:userName, age: age}];
    })
  }
  return (
    <div className="App">
       <AddUser  onNewUser={addUserHandler}></AddUser>
       <UserList users={users}></UserList>
    </div>
  );
}

export default App;
