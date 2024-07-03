"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
//chart.js 의 필요한 요소들 ArcElement, Tooltip, legend 을 가져오고 등록

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const accountNames = accounts.map((a) => a.name);
  const balances = accounts.map((a) => a.currentBalance);

  const data = {
    datasets: [ // datasets 은 차트의 데이터와 스타일을 설정, data인덱스와 컬러 인덱스는 일치해야함
        {
            label: 'Banks',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        }
    ],
    labels: ['원','투','쓰리','풔','파이브','식서']
  }

  return (
    <Doughnut
        data={data} // 위에 정의한 변수 넣어줘야 차트 데이터 들어감
        options={{
            // cutout: '60%',
            plugins: {
                legend: {
                    display: false, //범례를 표시하지 않도록설정
                },
                tooltip: {
                    enabled: true //툴팁
                }
            }
        }}
    />
  )
}

export default DoughnutChart