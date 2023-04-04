$(document).ready(function () {

    $("#summary_button").on("click", function () {
        var status = $(this).attr("data-status");
        var text_invisible = $(this).attr("data-text1");
        var text_visible = $(this).attr("data-text2");
        if (status === "on") {
            $("#summary_list").addClass("d-none");
            $(this).attr("data-status", "off");
            $(this).find("i").attr("class", "far fa-eye mg-r-6");
            $(this).find("span").text(text_visible);
        } else {
            $("#summary_list").removeClass("d-none");
            $(this).attr("data-status", "on");
            $(this).find("i").attr("class", "far fa-eye-slash mg-r-6");
            $(this).find("span").text(text_invisible);
        }
    });

    $("#groups_button").on("click", function () {
        var status = $(this).attr("data-status");
        var text_invisible = $(this).attr("data-text1");
        var text_visible = $(this).attr("data-text2");
        if (status === "on") {
            $("#myTab .nav").addClass("d-none");
            $("#myTabContent").addClass("d-none");
            $(this).attr("data-status", "off");
            $(this).find("i").attr("class", "far fa-eye mg-r-6");
            $(this).find("span").text(text_visible);
        } else {
            $("#myTab .nav").removeClass("d-none");
            $("#myTabContent").removeClass("d-none");
            $(this).attr("data-status", "on");
            $(this).find("i").attr("class", "far fa-eye-slash mg-r-6");
            $(this).find("span").text(text_invisible);
        }
    });

    if ($("#chartDonut").length !== 0) {

        /** PIE CHART **/
        var datapie = {
            labels: ['Aktif %', 'Pasif %'],
            datasets: [{
                data: ['65', '35'],
                backgroundColor: ['#0168fa', '#8392a5']
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
        /** PIE CHART **/
        var datapie2 = {
            labels: ['Aktif %', 'Pasif %'],
            datasets: [{
                data: ['90', '10'],
                backgroundColor: ['#0168fa', '#8392a5']
            }]
        };
        var optionpie2 = {
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
        }); var ctx23 = document.getElementById('chartDonut2');
        var myDonutChart = new Chart(ctx23, {
            type: 'doughnut',
            data: datapie2,
            options: optionpie2
        });

    }

    if ($("#chartBar1").length !== 0) {

        var ctxLabel = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
        var ctxData1 = [20, 40, 44, 48, 0, 0, 0, 0, 0, 0, 0, 0];
        var ctxData2 = [10, 18, 17, 16, 0, 0, 0, 0, 0, 0, 0, 0];
        var ctxData3 = [12, 18, 15, 16, 0, 0, 0, 0, 0, 0, 0, 0];
        var ctxColor1 = '#10b759';
        var ctxColor2 = '#ffc107';
        var ctxColor3 = '#dc3545';

        // Bar chart
        var ctx1 = document.getElementById('chartBar1').getContext('2d');
        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ctxLabel,
                datasets: [{
                    data: ctxData1,
                    backgroundColor: ctxColor1
                }, {
                    data: ctxData2,
                    backgroundColor: ctxColor2
                }, {
                    data: ctxData3,
                    backgroundColor: ctxColor3
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    display: false,
                    labels: {
                        display: false
                    }
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: '#e5e9f2'
                        },
                        ticks: {
                            beginAtZero: true,
                            fontSize: 10,
                            fontColor: '#182b49',
                            max: 50
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        barPercentage: 0.6,
                        ticks: {
                            beginAtZero: true,
                            fontSize: 11,
                            fontColor: '#182b49'
                        }
                    }]
                }
            }
        });

    }

});