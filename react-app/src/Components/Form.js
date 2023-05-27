function Form(){
    return(
    <div class="nav">
        <p class="nav-text">Source Name:</p>
        <input type="text" id="name" name="name" required></input>
        <p class="nav-text">Source Email:</p>
        <input type="text" id="email" name="email" required></input>
        <button class="addButton"><p class="button-text">ADD</p></button>
    </div>

    );
}
export default Form;