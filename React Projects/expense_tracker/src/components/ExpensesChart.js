import React from "react";
import Chart from "./chart";

const ExpensesChart = (props)=>{
    
    const chartDp = [
        { label : 'Jan', value : 0 },
        { label : 'Feb', value : 0 },
        { label : 'Mar', value : 0 },
        { label : 'Apr', value : 0 },
        { label : 'May', value : 0 },
        { label : 'Jun', value : 0 },
        { label : 'Jul', value : 0 },
        { label : 'Aug', value : 0 },
        { label : 'Sep', value : 0 },
        { label : 'Oct', value : 0 },
        { label : 'Nov', value : 0 },
        { label : 'Dec', value : 0 },

    ];

    for(var i of props.data){
        const month = i.on.getMonth();
        chartDp[month].value+=i.amount;
        console.log(chartDp);
    }

    return <Chart chartDp={chartDp} />;

};


export default ExpensesChart;