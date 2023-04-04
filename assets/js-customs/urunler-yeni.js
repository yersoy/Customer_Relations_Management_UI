$(document).ready(function () {

    if ($("#editor1").length !== 0) {
        var quill1 = new Quill('#editor1', {
            modules: { toolbar: '#editor1-toolbar' },
            theme: 'snow'
        });
    }

    if ($("#editor2").length !== 0) {
        var quill2 = new Quill('#editor2', {
            modules: { toolbar: '#editor2-toolbar' },
            theme: 'snow'
        });
    }

    if ($("#editor3").length !== 0) {
        var quill3 = new Quill('#editor3', {
            modules: { toolbar: '#editor3-toolbar' },
            theme: 'snow'
        });
    }

    if ($("#accordion1").length !== 0) {
        $('#accordion1').accordion({
            heightStyle: 'content',
            collapsible: true,
            active: false
        });
    }

    if ($("input[name=fiyattipi]").length !== 0) {

        $("input[name=fiyattipi]").on("change", function () {
            var ftval = $(this).val();
            //console.log(ftval);
            if (ftval === "vade") {
                $("#fiyattipi1_content").removeClass("d-none").addClass("d-block");
                $("#fiyattipi2_content").removeClass("d-block").addClass("d-none");
            } else if (ftval === "profil") {
                $("#fiyattipi1_content").removeClass("d-block").addClass("d-none");
                $("#fiyattipi2_content").removeClass("d-none").addClass("d-block");
            }
        });

    }

    var countscroll;
    for (countscroll = 1; countscroll <= 19; ++countscroll) {
        if ($(".ritma-scrollbar" + countscroll).length !== 0) {
            const scrollone = new PerfectScrollbar('.ritma-scrollbar' + countscroll, {
                wheelPropagation: false,
                suppressScrollX: true
            });
        }
    }

});