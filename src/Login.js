import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import './App.css';

function Login(auth) {
    var emailgood = false;
    var auth = false;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logins, setLogins] = useState([]);

  const handleEmailChange = ((e) => {
    setEmail({email, email: e.target.value})
  });

  const handlePasswordChange = ((e) => {
    setPassword({password, password: e.target.value})
  });

  const clickSubmit = (() => {
    //Call fetch
    if (emailgood === false){ //email screen
        const existUser = logins.some(user => user.email === email)
        if (existUser){
            emailgood = true
        }
        else{
            console.log("incorrect email")
        }
    }
    else{ //password screen
        const existUserAuth = logins.some(user => user.email === email && user.password === password)
        if (existUserAuth){
            auth = true
        }
        else{
            console.log("incorrect password")
        }
    }
  })

  function setLoginStep(){
    if(emailgood){
        return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={password} />
                <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>
            </Form.Group>
        </Form>);
    }
    else{
        return(
        <Form>
            <Form.Group className="mb-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={email}/>
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
        </Form>);
    }
  }

  useEffect(() => {
    let url = `https://github.com/L1nkM3tal555/parcial1/blob/release_inicial/login.json`;
    //let target = document.getElementById('visualization-area');
    
    fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        })
        .then((data) => data.json())
        .then((data) => {
            setLogins(data);
        });
    }, []);

  return (
    <div>
     <h1>Inicie sesión</h1>
    
     {setLoginStep()}
    
     <Button variant="primary" onClick={clickSubmit}>
       Submit
     </Button>
   </div>
 );
}

export default Login;