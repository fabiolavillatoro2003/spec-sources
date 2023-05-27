const sourceList = [{sourceName: "Presbo", sourceEmail: "presbo@columbia.edu"},
                    {sourceName: "John Jay Mouse", sourceEmail: "mouse@columbia.edu"}, 
                    {sourceName: "Water Bottle Man", sourceEmail: "flipper@columbia.edu"}]

function List(){
    return(
    <>
    {sourceList.map((source, index) => (
        <ListItem sourceId={index+1} sourceName={source.sourceName} sourceEmail={source.sourceEmail}/>
    ))}
    </>
    );
}

export default List;

function ListItem({sourceId, sourceName, sourceEmail}){
    return(
        <div class="entry">
        <div class="item"><p class="entry-text">{sourceId}</p></div>
        <div class="item"><p class="entry-text">{sourceName}</p></div>
        <div><p class="entry-email">{sourceEmail}</p></div>
        <button class="deleteButton"><p class="button-text">DELETE</p></button>
        </div>
    );
}