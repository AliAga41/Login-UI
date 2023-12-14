import React, { useState } from 'react';
import Input from "./components/input/Input";
import Form from "./components/form/Form";
import Button from "./components/button/Button";
export function App() {
  
  const[user, setUser]=useState({ name: "",password: ""})
  
  const handleChange=(e)=>{
    if(e.target.type==="text")
    {
      setUser({...user, name:e.target.value});
    }
    else if (e.target.type==="password")
    {
      setUser({...user, password:e.target.value});
    }

  }

  const handleClick=()=>{
    if(user.name==="")
    {
      alert("Username cannot be empty")
    }
    else if(user.password==="")
    {
      alert("Password cannot be empty")
    }
    else {
      alert("Username:"+user.name+" "+"Password:"+user.password)
    }
  }

  return (
    <div className='App'>
      <h2>Log In Form</h2>
      <Form>
        <Input 
        type={"text"} 
        value={user.name} 
        placeHolder={"User Name"} 
        onChange={handleChange} 
        />

        <Input 
        type={"password"} 
        value={user.password} 
        placeHolder={"Password"} 
        onChange={handleChange} 
        />

        <Button 
        onClick={handleClick} 
        />

      </Form>
    </div>
  );
}

export default App;