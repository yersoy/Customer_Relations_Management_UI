$(document).ready(function () {

    /** PIE CHART **/
    var datapie = {
        labels: ['Yemek', 'Yol', 'Ziyaret'],
        datasets: [{
            data: [20, 20, 30],
            backgroundColor: ['#f77eb9', '#7ebcff', '#7ee5e5']
        }]
    };

    var optionpie = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };

    // For a pie chart
    var ctx2 = document.getElementById('chartDonut');
    var myDonutChart = new Chart(ctx2, {
        type: 'doughnut',
        data: datapie,
        options: optionpie
    });

});