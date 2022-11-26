import React from 'react'
import './chartbar.css'
const ChartBar = (props) => {
    let barFillHeight = '0%'

    if (props.maxvalue > 0) {
        barFillHeight= Math.round((props.value / props.maxvalue) * 100) + '%';
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div
                    className='chart-bar__fill'
                    style={{ height: barFillHeight}}
                ></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );

};
export default ChartBar;