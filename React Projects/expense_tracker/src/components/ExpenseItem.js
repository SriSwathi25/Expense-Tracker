export default function ExpenseItem(props){
    return(
        <div class="card p-2">
        <h2>{props.title}</h2>
        <p>{props.on}</p>
        <p>{props.amount}</p>
        <div class="text-right">
        <input class="btn btn-warning" type="button" value="Edit" />
        <span class="p-2"></span>
        <input class="btn btn-danger" type="button" value="Delete" />        
        </div>
        </div>
    )
}