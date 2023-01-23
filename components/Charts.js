import { Chart as ChartJS, Tooltip, Legend, LinearScale, CategoryScale, BarElement, Title } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { useState } from 'react';

ChartJS.register(LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend);

export const GainChart = ({ data }) => {

    const [chartData, setChartData] = useState({})
    const [options, setOptions] = useState({})


    useState(() => {
        setChartData({
            labels: data.map((itm) => itm.year),
            datasets: [{
                label: 'Gain',
                data: data.map((itm) => itm.gain),
                backgroundColor: [
                    '#ef9700',
                ],
            }]
        })

        setOptions({
            maintainAspectRatio: false,
            responsive: true
        })

    }, [])

    return (
        <>
            <div style={{ position: 'relative', width: '100%', height: 'inherit' }}>
                <Bar data={chartData} options={options} />
            </div>
        </>
    )
};