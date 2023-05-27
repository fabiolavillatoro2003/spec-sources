import './App.css';
import Form from './Components/Form';
import List from './Components/List';

function App() {
  return (
    <div class="App">
      <div><img src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png " style={{width:'25%', height: '25%'}}></img></div>
    <h1 class="heading">Spectator's Sources</h1>
    <Form></Form>

    <List></List>
    </div>
  );
}

export default App;
