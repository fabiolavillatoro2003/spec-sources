function Form(){
    return(
        <div>
    <div class="nav">
        <label for="name" id="nav-text">Source Name:</label>
        <input type="text" id="name" required></input>
        <label for="email" id="nav-text">Source Email:</label>
        <input type="text" id="email" name="email" required></input>
        <button class="addButton"><p class="button-text">ADD</p></button>
    
    </div>
    <div class="test">
        
    </div>
    </div>
    );
}
export default Form;