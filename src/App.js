
import './App.css';
import AddExpense from './components/AddExpense';
import ExpenseItemList from './components/ExpenseItemList';
import { useState } from 'react';

function App() {
  const [data , setData] = useState([]);
  
  function spliceNoMutate(myArray,indexToRemove) {
    return myArray.slice(0,indexToRemove).concat(myArray.slice(indexToRemove+1));
}
  const handleDelete = (index)=>{
    var data1 = data;
    if(data1.length!=1){
      data1 = spliceNoMutate(data1,index);
      setData(data1);
  }
    else
    {
    setData([]);
    }
    console.log("Delete");
  }

  const handleAddExpense = (info)=>{
    setData([...data,{
      "title" :  info.title,
      "on" : info.on,
      "amount" : info.amount
    }]);

  }

  return (
    
    <div className="App">
      <br></br>
      <AddExpense updateExpenseData={handleAddExpense}/>
      <br></br>
      <ExpenseItemList data={data} handleDelete={handleDelete}/>
      <br></br>
    </div>
  );
}

export default App;
