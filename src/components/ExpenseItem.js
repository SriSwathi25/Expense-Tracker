import Date from "./Date";
import './ExpenseItem.css';
export default function ExpenseItem(props){
    const deleteItem  = ()=>{props.handleDelete(props.index)}
    const month = props.on.toLocaleString('en-US', { month: 'long' });
  const day = props.on.toLocaleString('en-US', { day: '2-digit' });
  const year = props.on.getFullYear();
    return(
        <div class="card p-2 m-2">
        <div className="expense_item">
        <Date  month={month} day={day} year={year} />
        <h2 >{props.title}</h2>
        <p className="text-center">{'INR : '+props.amount}</p>
        </div>
        <div class="text-right">
        <input class="btn btn-danger delete" type="button" value="Delete" onClick={deleteItem} />        
        </div>
        </div>
    )
}