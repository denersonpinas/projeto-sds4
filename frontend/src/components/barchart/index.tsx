import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}

function BarChart() {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        // A nossa estrutura SERIES, aceita mais que um parametro
        series: [
            {
                name: "",
                data: []                   
            }
        ]
    })

    useEffect(() => {
        axios.get(BASE_URL + '/sales/success-by-seller')
             .then(response => {
                 const data = response.data as SaleSuccess[];
                 const myLabels = data.map(x => x.sellerName)
                 const mySeries = data.map(x => round(100 * x.deals / x.visited, 1))
                 
                 setChartData({
                    labels: {
                        categories: myLabels
                    },
                    // A nossa estrutura SERIES, aceita mais que um parametro
                    series: [
                        {
                            name: "(%) Sucesso",
                            data: mySeries                   
                        }
                    ]
                })
             })
    })

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    // const mockData = {
    //     labels: {
    //         categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //     },
    //     // A nossa estrutura SERIES, aceita mais que um parametro
    //     series: [
    //         {
    //             name: "% Sucesso",
    //             data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
    //         }
    //     ]
    // };

    return (
        <Chart 
            options={{...options, xaxis: chartData.labels}} // XAXIS = É onde fica nossas labels do eixo X
            series={chartData.series} // SERIES = É onde fica os valores das labels 
            type="bar"
            height="240"
        />
    );
}

export default BarChart;