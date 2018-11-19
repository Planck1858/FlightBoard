$(document).ready(function () {
    //JSON data to table
    $.getJSON("flightData.json", function (data) {
        var flight_data = '';

        $.each(data, function (key, value) {
            flight_data += '<tr position ="' + value.Status + '">';
            flight_data += '<td>' + '✈ ' + value.From + '</td>';
            flight_data += '<td>' + value.To + '</td>';
            flight_data += '<td>' + value.Departure + '</td>';
            flight_data += '<td>' + value.Arrival + '</td>';
            flight_data += '<td>' + value.BoardNumber + '</td>';
            flight_data += '</tr>';
        });
        $('#flight tbody').append(flight_data);
    });

    //show departure flights
    $('body').on('click', '#button_departure',function () {
        var rows = $("table#flight > tbody > tr");
        var selected = this.value;

        if (selected == "Departure") {
            rows.filter("[position=" + selected + "]").show();
            rows.not("[position=" + selected + "]").hide();
            var visibleRows = rows.filter("[position=" + selected + "]");
        }
    });

    //show arrival flights
    $('body').on('click', '#button_arrival',function () {
        var rows = $("table#flight > tbody > tr");
        var selected = this.value;

        if (selected == "Arrival") {
            rows.filter("[position=" + selected + "]").show();
            rows.not("[position=" + selected + "]").hide();
            var visibleRows = rows.filter("[position=" + selected + "]");
        }
    });

    //show delayd flights
    $('body').on('click', '#button_delayd_flights',function () {
        var rows = $("table#flight > tbody > tr");
        var selected = this.value;

        if (selected == "Delayd") {
            rows.filter("[position=" + selected + "]").show();
            rows.not("[position=" + selected + "]").hide();
            var visibleRows = rows.filter("[position=" + selected + "]");
        }
    });

    //search input
    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();

        $("table#flight > tbody > tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
