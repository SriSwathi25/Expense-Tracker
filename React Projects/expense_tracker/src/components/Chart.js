import React from "react";
import ChartBar from "./ChartBar";
const Chart  =(props) =>{
    return (
        props.dataPoints.map((dp) => (<ChartBar
            key={dp.label}
            value={dp.value}
            maxValue={null}
            label={dp.label}
            />
            ))
    )
};

export default Chart;