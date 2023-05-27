function List(){
    return(
    <>
    <ListItem></ListItem>
    <ListItem></ListItem>
    <ListItem></ListItem>
    </>
    );
}

export default List;

function ListItem(){
    return(
        <div class="entry">
        <div class="item"><p class="entry-text">1</p></div>
        <div class="item"><p class="entry-text">Presbo</p></div>
        <div><p class="entry-email">presbo@columbia.edu</p></div>
        <button class="deleteButton"><p class="button-text">DELETE</p></button>
        </div>
    );
}