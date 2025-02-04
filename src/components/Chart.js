import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart  =(props) =>{
    const dpValues = props.chartDp.map((e)=>e.value);
    const totalMax = Math.max(...dpValues);
    return (
        <div className="chart">{
        props.chartDp.map((dp) => (<ChartBar
            key={dp.label}
            value={dp.value}
            maxValue={totalMax}
            label={dp.label}
            />
            ))}
            </div>
    )
}

export default Chart;