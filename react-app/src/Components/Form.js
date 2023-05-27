function Form(){
    return(
        <div>
    <div class="nav">
        <p id="nav-text">Source Name:</p>
        <input type="text" id="name" name="name" required></input>
        <p id="nav-text">Source Email:</p>
        <input type="text" id="email" name="email" required></input>
        <button class="addButton"><p class="button-text">ADD</p></button>
    
    </div>
    <div class="test">
        
    </div>
    </div>
    );
}
export default Form;