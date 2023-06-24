import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import React, {useEffect, useState} from 'react';

/*
const initialList = [{sourceName: "Presbo", sourceEmail: "presbo@columbia.edu"},
                    {sourceName: "John Jay Mouse", sourceEmail: "mouse@columbia.edu"}, 
                    {sourceName: "Water Bottle Man", sourceEmail: "flipper@columbia.edu"}]

*/

//corrections commit test
function App() {

  const [sourceList, setSourceList] = useState([]);

  //solution from stack overflow, or else results in destroy function error
  useEffect(()=> {
    fetchData();
  });

  const fetchData = async () => {
    fetch(`http://localhost:8080/api/sources`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }})
      .then(response => {
          if (response.status >= 200 && response.status < 300) {
              return response;
            }
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;
            console.log(error);
            throw error;
      })
      .then(response => response.json())
      .then(json => {
          console.log(json);
          setSourceList(json.data);
      })
      .catch(error => console.log(error));
  };
  
  let new_id = sourceList.length+1;

  const handleDelete = (index)=>{
    fetch(`http://localhost:8080/api/delete_source/${index}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }})
      .then(response => {
          if (response.status >= 200 && response.status < 300) {
              return response;
            }
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;
            console.log(error);
            throw error;
      })
      .then(response => response.json())
      .then(json => {
          console.log(json);
          setSourceList([json.data]);
      })
      .catch(error => console.log(error));
  };
  const handleAdd = (sourceName,sourceEmail)=> {
    if (sourceName!==""){
      const newSource = {
        "sourceId":new_id, "sourceName": sourceName,"sourceEmail": sourceEmail
      };
      new_id +=1;
      fetch(`http://localhost:8080/api/add_source`, {
        method: 'POST',
        body: JSON.stringify({source: newSource}),
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response;
              }
              const error = new Error(`HTTP Error ${response.statusText}`);
              error.status = response.statusText;
              error.response = response;
              console.log(error);
              throw error;
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setSourceList([json.data]);
        })
        .catch(error => console.log(error));
    
    }
  };



  return (
    <div class="App">
      <div><img src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png " class="logo"></img></div>
    <h1 class="heading">Spectator's Sources</h1>
    <Form handleAdd={handleAdd}></Form>
      <List 
            sourceList = {sourceList}
            handleDelete = {handleDelete}>
      </List>
    </div>
  );
  
}

export default App;
