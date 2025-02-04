import Date from "./Date";
import './ExpenseItem.css';
export default function ExpenseItem(props){
    const deleteItem  = ()=>{props.handleDelete(props.index)}
    
    return(
        <div class="card p-2 m-2">
        <div className="expense_item">
        <Date  month={props.month} day={props.day} year={props.year} />
        <h2 >{props.title}</h2>
        <p className="text-center">{'$'+props.amount}</p>
        </div>
        <div class="text-right">
        <input class="btn btn-danger delete" type="button" value="Delete" onClick={deleteItem} />        
        </div>
        </div>
    )
}