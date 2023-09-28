import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState({email:""})

  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
  });

  const clickSubmit = (() => {
    //Call fetch
    alert(JSON.stringify(formValues))
  })

  function searchUser(data){
    
  }

  function getContent() {
    let url = `https://github.com/L1nkM3tal555/parcial1/blob/release_inicial/login.json`;
    let target = document.getElementById('visualization-area');
    /*$.ajax( {
        url: url,
        responseType:'application/json',
        success: function(data) {
            target.removeAttribute("hidden");
            target.querySelector("#content").innerHTML = searchUser(data);
            target.querySelector("#success-msg").innerText = "Información obtenida exitosamente"
        
        }, 
        error: function(xhr, status, error) {   
            target.querySelector("#success-msg").innerText = `Hubo un error al leer el archivo:\n${error}`
        }
    });
    */
  }
  document.getElementById("fetch-button").onclick = getContent
  return (
    <div>
     <h1>Inicie sesión</h1>
    
     <Form>
     <Form.Group className="mb-6" controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email}/>
       <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
     </Form.Group>
    
     <Button variant="primary" onClick={clickSubmit}>
       Submit
     </Button>
   </Form>
   </div>
 );
}


export default App;
