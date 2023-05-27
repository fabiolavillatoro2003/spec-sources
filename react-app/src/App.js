import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import React, {useEffect, useState} from 'react';


const initialList = [{sourceName: "Presbo", sourceEmail: "presbo@columbia.edu"},
                    {sourceName: "John Jay Mouse", sourceEmail: "mouse@columbia.edu"}, 
                    {sourceName: "Water Bottle Man", sourceEmail: "flipper@columbia.edu"}]


function App() {

  const [sourceList, setSourceList] = useState([]);
  useEffect(() => {fetchData();});
  //FIXED VIA STACK OVERFLOW - error was destroy is not a function



  //const refers to this two-item array, but not necessarily the vars within
  //sourceList we are modifying!

  /*
  //two methods here
  function handleDelete(sourceIndex){
    const updatedList = sourceList.slice(0, sourceIndex).concat(sourceList.slice(sourceIndex+1));

    setSourceList(updatedList);
  }
  
  function handleAdd(sourceName, sourceEmail){
    const updatedList = [...sourceList, {sourceName: sourceName, sourceEmail: sourceEmail}]
    setSourceList(updatedList);
  }
  */


  const fetchData = async() => {
    fetch(`/api/sources`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }})
      .then(response => {
        if(response.status >= 200 & response.status < 300){
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

  let new_id = sourceList.length-1

  const handleDelete = (index)=>{
    fetch(`/api/delete_source/${index}`, {
      method: 'POST',
      headers: {
        'Content Type': 'application/json'
      }})
      .then(response => {
        if(response.status >= 200 && response.status <300) {
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

  const handleAdd = (sourceName, sourceEmail)=>{
    if(sourceName!=""){
      const newSource = {
        "id": new_id, "sourceName": sourceName, "email": sourceEmail
      };
      new_id+=1;
      fetch(`/api/add_source`, {
        method: 'POST',
        body: JSON.stringify({source: newSource}),
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(response => {
          if(response.status>=200 && response.status <300) {
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

    <List sourceList ={sourceList} handleDelete = {handleDelete}></List>

    </div>
  );
}

export default App;
