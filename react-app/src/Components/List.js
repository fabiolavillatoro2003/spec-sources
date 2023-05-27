function List({sourceList, handleDelete}){
    return(
    <>
    {sourceList.map((source, index) => (
        <ListItem sourceId={index} sourceName={source.sourceName} sourceEmail={source.sourceEmail} handleDelete={handleDelete}/>
    ))}
    </>
    );
}

export default List;

function ListItem({sourceId, sourceName, sourceEmail, handleDelete}){
    return(
        <div class="entry">
        <div class="item"><p class="entry-text">{sourceId+1}</p></div>
        <div class="item"><p class="entry-text">{sourceName}</p></div>
        <div><p class="entry-email">{sourceEmail}</p></div>
        <button class="deleteButton" onClick={() => handleDelete(sourceId)}><p class="button-text">DELETE</p></button>
        </div>
    );
}