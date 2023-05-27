import React, {useState} from 'react';

function Form({handleAdd}){
    const [sourceName, setSourceName] = useState();
    const [sourceEmail, setSourceEmail] = useState();

    return(

    <div class="nav">
        <label for="name" id="nav-text">Source Name:</label>
        <input type="text" id="name" onChange={(e) => setSourceName(e.target.value)}></input>
        <label for="email" id="nav-text">Source Email:</label>
        <input type="text" id="email" name="email" onChange={(e) => setSourceEmail(e.target.value)}></input>
        <button class="addButton" onClick={() => handleAdd(sourceName, sourceEmail)}><p class="button-text">ADD</p></button>
    
    </div>
    
    );
}
export default Form;