import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import React, {useState} from 'react';

const initialList = [{sourceName: "Presbo", sourceEmail: "presbo@columbia.edu"},
                    {sourceName: "John Jay Mouse", sourceEmail: "mouse@columbia.edu"}, 
                    {sourceName: "Water Bottle Man", sourceEmail: "flipper@columbia.edu"}]

function App() {

  const [sourceList, setSourceList] = useState(initialList);
  //const refers to this two-item array, but not necessarily the vars within
  //sourceList we are modifying!

  //two methods here

  function handleDelete(sourceIndex){
    const updatedList = sourceList.slice(0, sourceIndex).concat(sourceList.slice(sourceIndex+1));

    setSourceList(updatedList);
  }
  
  function handleAdd(sourceName, sourceEmail){
    const updatedList = [...sourceList, {sourceName: sourceName, sourceEmail: sourceEmail}]
    setSourceList(updatedList);
  }

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
