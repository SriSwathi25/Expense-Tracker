import { useState } from "react";

export default function AddExpense(props){
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    
    return(
        <div class="w-50 m-auto p-5 jumbotron form-group">
        <h3 class="text-center">Add Expense Item</h3>
        <form onSubmit={(event)=>{
            event.preventDefault();
            const data = {
                "title" : title,
                "on" : new Date(date),
                "amount" : +amount
            }
            console.log(data);
            props.updateExpenseData(data);
            setTitle('');
            setAmount('');
            setDate('');
        }}>
        <label for="title">
        Title
        </label>
        <input class="form-control" name="title" type="text" placeholder="Expense Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <br/>
        <label for="date">
        Date
        </label>
        <br/>
        <input class="form-control" name="date" type="date" min="2019-01-01" max="2900-01-01" value={date} onChange={(e)=>setDate(e.target.value)} />
        <br/>
        <label for="Amount">
        Amount
        </label>
        <input class="form-control" name="amount" type="number" min="0.01" step="0.01" value={amount} onChange={(e)=>setAmount(e.target.value)} />
        <br />
        <div class="text-right">
        <input class="btn btn-primary" type="submit" value="Add" />
        <span class="p-2"></span>
        <input class="btn btn-warning" type="reset" value="Reset" onClick={(e)=>{setTitle('');setDate('');setAmount('');}} />
        </div>
        
        </form>
        </div>
    )
}