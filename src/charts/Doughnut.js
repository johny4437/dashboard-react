import React from 'react';
import {Doughnut} from 'react-chartjs-2'

function Chart() {

    const data = {
        labels: [
            'PHP',
            'PYTHON',
            'NodeJS'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };
    return (
        <div className="chart">
          <Doughnut data={data}/>  
        </div>
    )
}

export default Chart
