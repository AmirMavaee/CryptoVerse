import React from 'react';
//chart
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
//styles
import styles from './LineChart.module.css'
//data
import { seprateData } from '../../../Functions/SeprateData';


const labels = ["2:20 AM","2:55 AM","3:30 AM","4:5 AM","4:40 AM","5:15 AM",
"5:50 AM","6:25 AM","7:1 AM","7:35 AM","8:10 AM","8:45 AM","9:20 AM","9:55 AM",
"10:30 AM","11:5 AM","11:40 AM","12:15 AM","12:50 AM","1:25 PM","2:0 PM","2:35 PM",
"3:10 PM","3:45 PM","4:20 PM","4:55 PM","5:31 PM","6:5 PM","6:40 PM","7:15 PM",
"7:50 PM","8:35 PM","9:1 PM","9:35 PM","10:10 PM","10:45 PM","11:21 PM","11:55 PM"
,"0:30 PM","1:5 PM","1:40 PM","2:14 PM"];



function LineChart({value , name}) {

    console.log(name);


    return (
        <div className={styles.Chartcontainer}>
            <Line data={{
                labels: labels,
                datasets: [
                  {
                    label: name + " Chart",
                    backgroundColor: "transparent",
                    borderColor: "#87ceeb",
                    data: seprateData(value,0,100).map(item => item.current_price > 5 && item.current_price + 14379)
                  },
                ],
            }}/>
        </div>
    );
}

export default LineChart;