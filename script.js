function contactForm() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Language', 'Ranking in proficiency'],
        ['Html', 90],
        ['BOOTSTRAP', 75],
        ['Css', 65],
        ['Sass', 65],
        ['JavaScript', 55],
        ['Vue', 50],
        ['JQuery', 35],
        ['JSON', 20],
        ['MongoDB', 25],
        ['SQLite', 15],
        ['C#', 25],
        ['.Net', 25],
        ['Java', 15],
        ['Ruby', 50],
        ['Project Management', 50],
        ['Node.js', 45],
        ['GitHub', 50]
    ]);

    var options = {
        title: 'Skills Breakdown'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}