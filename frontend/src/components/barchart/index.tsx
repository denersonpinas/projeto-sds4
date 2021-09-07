import Chart from 'react-apexcharts'

function BarChart() {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        // A nossa estrutura SERIES, aceita mais que um parametro
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };

    return (
        <Chart 
            options={{...options, xaxis: mockData.labels}} // XAXIS = É onde fica nossas labels do eixo X
            series={mockData.series} // SERIES = É onde fica os valores das labels 
            type="bar"
            height="240"
        />
    );
}

export default BarChart;