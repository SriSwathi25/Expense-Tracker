import ExpenseItem from "./ExpenseItem";

export default function ExpenseItemList(props){
    var data = props.data;
    const items = data.map((d,i)=> <ExpenseItem key={i} title={d.title}  on={d.on}   amount={d.amount} />);
    return(
        <div class="w-50 m-auto p-2 m-1">
        {items}
                    </div>
    )
}