import './App.css';
import React,{useState,useEffect} from "react";

function App(){
  const[users,setUsers]=useState([]);
  const [loading,setLoding]=useState(true);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data =>{
      // console.log(data);
      setUsers(data);
      setLoding(false);
    })  
    .catch(error =>{
      console.error("if it is not loading");
      setLoding(false);
    })
  },[]);
  // console.log(users[0])
  if(loading){
    return <p>Loading...</p>
  }
  return(
    <div>
      <ul>
        <h1>User List</h1>
        {users.map((user) =>(
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
