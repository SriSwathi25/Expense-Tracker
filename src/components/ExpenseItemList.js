import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

export default function ExpenseItemList(props){    
    
    const [filterYear, setFilterYear] = useState("All");
    const handleChange = (event)=>{

        setFilterYear(event.target.value);
    }
    const filteredExpenses = props.data.filter(expense => {
        return expense.on.getFullYear().toString() === filterYear;
});

    return(
        <Card className="w-50 m-auto p-2 m-1 ">
        <span className="container"><strong><p>Filter By Year : </p></strong>
        <select className="form-control" value={filterYear} onChange={handleChange}>
            <option selected>All</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
        </select>
        </span>
        <ExpensesChart data = {filteredExpenses} />
        {
            filterYear === "All" ? 
            props.data.map((d,i)=>(<ExpenseItem key={i} index={i} title={d.title}  on={d.on}  month={d.on.toLocaleString('en-US', { month: 'long' })} day={d.on.toLocaleString('en-US', { day: '2-digit' })} year={d.on.getFullYear()}  amount={d.amount} handleDelete={props.handleDelete} />)) : 
        
            filteredExpenses.map((d,i)=>(<ExpenseItem key={i} index={i} title={d.title}  on={d.on}  month={d.on.toLocaleString('en-US', { month: 'long' })} day={d.on.toLocaleString('en-US', { day: '2-digit' })} year={d.on.getFullYear()}  amount={d.amount} handleDelete={props.handleDelete} />))}
                    
        </Card>
    )
}