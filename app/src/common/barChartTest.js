import Utils from './constants'

const data = {
    datasets: [{
      label: 'Dataset with string point data',
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      borderColor: Utils.CHART_COLORS.red,
      fill: false,
      data: [{
        x: Utils.newDateString(0),
        y: Utils.rand(0, 100)
      }, {
        x: Utils.newDateString(2),
        y: Utils.rand(0, 100)
      }, {
        x: Utils.newDateString(4),
        y: Utils.rand(0, 100)
      }, {
        x: Utils.newDateString(6),
        y: Utils.rand(0, 100)
      }],
    }, {
      label: 'Dataset with date object point data',
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      borderColor: Utils.CHART_COLORS.blue,
      fill: false,
      data: [{
        x: Utils.newDate(0),
        y: Utils.rand(0, 100)
      }, {
        x: Utils.newDate(2),
        y: Utils.rand(0, 100)
      }, {
        x: Utils.newDate(5),
        y: Utils.rand(0, 100)
      }, {
        x: Utils.newDate(6),
        y: Utils.rand(0, 100)
      }]
    }]
  };

export const barConfig = {
    data: data,
    options: {
        spanGaps: 1000 * 60 * 60 * 24 * 2, // 2 days
        responsive: true,
        interaction: {
            mode: 'nearest',
        },
        plugins: {
            title: {
            display: true,
            text: 'Chart.js Time - spanGaps: 172800000 (2 days in ms)'
            },
        },
        scales: {
            x: {
            // type: 'time',
            display: true,
            title: {
                display: true,
                text: 'Date'
            },
            ticks: {
                callback: function(value, index, ticks) {
                    return `<div>
                    1
                    </div>`;
                }
            }
            },
            y: {
            display: true,
            title: {
                display: true,
                text: 'value'
            }
            }
        }
    },
};