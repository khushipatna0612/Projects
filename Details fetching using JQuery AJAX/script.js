$(document).ready(function(){
    $('#fetchData').click(function() {
        $.ajax({
            url: 'data.json', 
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                displayData(data);
            },
            error: function(error) {
                console.log('Error fetching data:', error);
            }
        });
    });

    function displayData(data) {
        var tbody = $('#datalist tbody');
        tbody.empty(); 

        data.forEach(function(item) {
            tbody.append('<tr>' + '<td>' + item.name + '</td>' + '<td>' + item.age + '</td>' + '<td>' + item.company + '</td>' + '</tr>');
        });
    }
});
