import React from 'react'
import Chartbar from './chartbar'
import './chart.css'

const Chart = (props) => {
    const datapointvalues = props.datapoints.map(datapoint => datapoint.value);
    const totalmaximum = Math.max(...datapointvalues);
    return(
        <div className="chart">{
        props.datapoints.map((datapoint)=> (<Chartbar
        key={datapoint.label}
        value={datapoint.value}
        maxvalue={totalmaximum}
        label={datapoint.label}
    ></Chartbar>
        
   
        
    ))};
    </div>
    );
}
export default Chart;