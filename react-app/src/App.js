import './App.css';

function App() {
  return (
    <div class="App">
      <div><img src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png " style={{width:'25%', height: '25%'}}></img></div>
    <h1 class="heading">Spectator's Sources</h1>
    
    <div class="nav">
        <div class = "input-display">
            <p class="nav-text">Source Name:</p>
            <div><input type="text" id="name" name="name" required></input></div>
        </div>
        <div class="input-display">
            <p class="nav-text">Source Email:</p>
            <div class = "input-display"><input type="text" id="email" name="email" required></input></div>
        </div>
        <button class="addButton"><p class="button-text">ADD</p></button>
    </div>


    <div class="entry">
        <div><p class="entry-text">1</p></div>
        <div><p class="entry-text">Presbo</p></div>
        <div><p class="entry-email">presbo@columbia.edu</p></div>
        <button class="deleteButton"><p class="button-text">DELETE</p></button>
    </div>

    <div class="entry">
        <div><p class="entry-text">2</p></div>
        <div><p class="entry-text">John Jay Mouse</p></div>
        <div><p class="entry-email">mouse@columbia.edu</p></div>
        <button class="deleteButton"><p class="button-text">DELETE</p></button>
    </div>
    <div class="entry">
        <div><p class="entry-text">1</p></div>
        <div><p class="entry-text">Water Bottle Man</p></div>
        <div><p class="entry-email">flipper@columbia.edu</p></div>
        <button class="deleteButton"><p class="button-text">DELETE</p></button>
    </div>
    </div>
  );
}

export default App;
