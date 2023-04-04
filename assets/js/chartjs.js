
$(function(){
    'use strict'
  
    var ctxLabel = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
    var ctxData1 = [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30];
    var ctxData2 = [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20];
    var ctxColor1 = '#0168fa';
    var ctxColor2 = '#8392a5';
  
       // Stacked chart
       var ctx3 = document.getElementById('chartBar3').getContext('2d');
       new Chart(ctx3, {
         type: 'bar',
         data: {
           labels: ctxLabel,
           datasets: [{
             data: ctxData1,
             backgroundColor: ctxColor1
           }, {
             data: ctxData2,
             backgroundColor: ctxColor2
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
               stacked: true,
               gridLines: {
                 color: '#e5e9f2'
               },
               ticks: {
                 beginAtZero:true,
                 fontSize: 10,
                 fontColor: '#182b49'
               }
             }],
             xAxes: [{
               stacked: true,
               gridLines: {
                 display: false
               },
               barPercentage: 0.6,
               ticks: {
                 beginAtZero:true,
                 fontSize: 11,
                 fontColor: '#182b49'
               }
             }]
           }
         }
       });
     
  
  })
  