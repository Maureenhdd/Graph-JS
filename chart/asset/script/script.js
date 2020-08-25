var myChart = document.querySelectorAll('.block_svg');

myChart.forEach(function(item) {
    var valueChart = item.getAttribute('data-chart').split(',');
    var chartLenght = valueChart.length;
    var chartWidth = 500 / chartLenght;
    valueChart.forEach(function(eachValue, index) {
        var arrayColor = ['ff9999', 'ffcc99', 'ffff99', 'ccff99', 'b3ff99', '99ffb3', '99ccff', '99b3ff', 'b399ff', 'ff99ff', 'ff99cc'];
        var randomColor = arrayColor[Math.floor(Math.random() * arrayColor.length)];
        color = "#" + randomColor;

        item.innerHTML += "<rect class=rect_svg x=" + (chartWidth * index) + " y=" + (300 - parseInt(eachValue)) + " height=" + eachValue + " width=" + (chartWidth - 5) + " fill=" + color + " stroke=black></rect>";

    })

})