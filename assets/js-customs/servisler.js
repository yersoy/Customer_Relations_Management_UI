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

    $("#filterAlist button").on("click", function () {
        var id = $(this).attr("id");
        var newid = id.replace("filterA", "");
        $("#filterAlist button").each(function () { $(this).removeClass("active"); });
        $("#filterAlist_detail canvas.d-block").removeClass("d-block").addClass("d-none");
        $(this).addClass("active");
        $("#filterAlist_detail canvas#chartBar" + newid).removeClass("d-none").addClass("d-block");
    });

    $("#filterBlist button").on("click", function () {
        var id = $(this).attr("id");
        var newid = id.replace("filterB", "");
        $("#filterBlist button").each(function () { $(this).removeClass("active"); });
        $("#filterBlist_detail .d-block").removeClass("d-block").addClass("d-none");
        $(this).addClass("active");
        $("#filterBlist_detail #filterReport" + newid).removeClass("d-none").addClass("d-block");
    });

    if ($("#chartArea1").length !== 0) {

        var ctxLabel = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
        var ctxData1 = [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30];
        var ctxData2 = [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20];
        var ctxColor1 = '#001737';
        var ctxColor2 = '#0168fa';

        // For a pie chart
        // Area chart
        var ctx0 = document.getElementById('chartArea1');
        new Chart(ctx0, {
            type: 'line',
            data: {
                labels: ctxLabel,
                datasets: [{
                    label: '2020',
                    data: ctxData1,
                    borderColor: ctxColor1,
                    borderWidth: 1,
                    backgroundColor: 'rgba(0,23,55, .5)'
                }, {
                    label: '2021',
                    data: ctxData2,
                    borderColor: ctxColor2,
                    borderWidth: 1,
                    backgroundColor: 'rgba(1,104,250, .5)'
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: true,
                    labels: {
                        display: false
                    }
                },
                scales: {
                    yAxes: [{
                        stacked: true,
                        gridLines: {
                            color: '#e5e9f2'
                        },
                        ticks: {
                            beginAtZero: true,
                            fontSize: 10
                        }
                    }],
                    xAxes: [{
                        stacked: true,
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            beginAtZero: true,
                            fontSize: 11
                        }
                    }]
                }
            }
        });

    }

    if ($("#chartBar1").length !== 0) {

        var ctx1Label = ['Satış Öncesi Teknik Bakım', 'Garantili Bakım', 'İyi Niyet Garantisi', 'Yedek Parça Garantisi', '* Diğer'];
        var ctx1Data = [18, 40, 6, 12, 22];
        var ctx1Color = '#0168fa';

        // Bar chart
        var ctx1 = document.getElementById('chartBar1').getContext('2d');
        new Chart(ctx1, {
            type: 'horizontalBar',
            data: {
                labels: ctx1Label,
                datasets: [{
                    data: ctx1Data,
                    backgroundColor: ctx1Color
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
                        barPercentage: 0.6,
                        gridLines: {
                            color: '#e5e9f2'
                        },
                        afterFit: function (scaleInstance) {
                            scaleInstance.width = 120; // sets the width to 100px
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

    if ($("#chartBar2").length !== 0) {

        var ctx2Label = ['Bakım', 'Shaft', 'Aktarma', 'Fren Sistemi', '* Diğer'];
        var ctx2Data = [71, 14, 22, 36, 42];
        var ctx2Color = '#0168fa';

        // Bar chart
        var ctx2 = document.getElementById('chartBar2').getContext('2d');
        new Chart(ctx2, {
            type: 'horizontalBar',
            data: {
                labels: ctx2Label,
                datasets: [{
                    data: ctx2Data,
                    backgroundColor: ctx2Color
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    display: false,
                    labels: {
                        display: false,
                    }
                },
                scales: {
                    yAxes: [{
                        barPercentage: 0.6,
                        gridLines: {
                            color: '#e5e9f2'
                        },
                        afterFit: function (scaleInstance) {
                            scaleInstance.width = 120; // sets the width to 100px
                        },
                        ticks: {
                            beginAtZero: false,
                            fontSize: 10,
                            fontColor: '#182b49',
                            max: 50,
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

    if ($("#chartBar3").length !== 0) {

        var ctx3Label = ['Kadıoğlu Tarım Ltd.', 'Erkunt Traktör A.Ş.', 'Pekcanlar Tarım', 'Akgünler Traktör Servisi', '* Diğer'];
        var ctx3Data = [12, 10, 8, 3, 29];
        var ctx3Color = '#0168fa';

        // Bar chart
        var ctx3 = document.getElementById('chartBar3').getContext('2d');
        new Chart(ctx3, {
            type: 'horizontalBar',
            data: {
                labels: ctx3Label,
                datasets: [{
                    data: ctx3Data,
                    backgroundColor: ctx3Color
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    display: false,
                    labels: {
                        display: false,
                    }
                },
                scales: {
                    yAxes: [{
                        barPercentage: 0.6,
                        gridLines: {
                            color: '#e5e9f2'
                        },
                        afterFit: function (scaleInstance) {
                            scaleInstance.width = 120; // sets the width to 100px
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