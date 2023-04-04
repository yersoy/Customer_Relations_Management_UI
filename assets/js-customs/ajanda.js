$(document).ready(function () {

    $("#agenda_personal_types button").on("click", function () {
        var type = $(this).attr("data-type");
        $("#agenda_personal_types button").each(function () { $(this).removeClass("active"); });
        $(this).addClass("active");
        if (type === "selectable") {
            $("#agenda_personal_selectable").removeClass("d-none");
        } else {
            $("#agenda_personal_selectable").addClass("d-none");
        }
    });

});