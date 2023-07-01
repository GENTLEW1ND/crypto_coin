import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

 ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart =({ arr = [], currency, days }) => {
const prices =[]
const date=[]

for (let i = 0; i < array.length; i++) {
  if(days==="24h") date.push(new date(arr[i][0]).toLocaleTimeSting())
  date.push(new date(arr[i][0]).toLocaleDateString())
  prices.push(arr[i][1])
  
}
const data={};
  return (
    <Line
      options={{
        responsive: true,
      }}
      data={{
        labels: data,
        datasets: [
          {
            label: `Price in ${currency}`,
            data: prices,
            borderColor: "rgb(255,99,132)",
            backgroundColor: "rgba(255,99,132,0.5)",
          },
        ],
      }}
    />
  );
};

export default Chart;
