export default function ExpenseItem(props){
    const deleteItem  = ()=>{props.handleDelete(props.index)}
    return(
        <div class="card p-2">
        <h2>{props.title}</h2>
        <p>{props.on}</p>
        <p>{props.amount}</p>
        <div class="text-right">
        <input class="btn btn-danger" type="button" value="Delete" onClick={deleteItem} />        
        </div>
        </div>
    )
}