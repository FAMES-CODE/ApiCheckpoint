import './App.css';
import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'



function App() {



  return (

    <div className="App">


<MyList />


      
  
    </div>
  );
}


function MyList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);



  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          console.log(data)
          setItems(...data.items);
          console.log(data.items)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return  <ProgressBar animated now={95} />
     

  } else {
    return (
      <div>
        {items.map((item) => {
          const { name } = item;

          return (<Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
            <Card.Text>
        
              
        
            </Card.Text>
          </Card.Body>
        </Card>
        )})}
       </div>        

      ) } }
      



export default App;
