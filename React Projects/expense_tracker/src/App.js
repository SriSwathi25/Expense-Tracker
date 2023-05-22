import logo from './logo.svg';
import './App.css';
import AddExpense from './components/AddExpense';
import ExpenseItemList from './components/ExpenseItemList';
import { useState } from 'react';

function App() {
  const [data , setData] = useState([ {
    "title" : "Groceries",
    "on" : "05/21/2023",
    "amount" : "1000"
  }]);
  

  

  const handleAddExpense = (info)=>{
    data.push();
    setData([...data,{
      "title" :  info.title,
      "on" : info.on,
      "amount" : info.amount
    }]);

  }

  return (
    
    <div className="App">
      <AddExpense updateExpenseData={handleAddExpense}/>
      <ExpenseItemList data = {data} />
    </div>
  );
}

export default App;
