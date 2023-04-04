$(function () {  
    if ($("#showPaletteOnly").length !== 0) {        
        $('#colorpicker').spectrum({
            color: '#17A2B8'
        });
        $('#showAlpha').spectrum({
            color: 'rgba(23,162,184,0.5)',
            showAlpha: true
        });
        $('#showPaletteOnly').spectrum({
            showPaletteOnly: true,
            color: '#DC3545',
            palette: [
                ['#1D2939', '#fff', '#0866C6', '#23BF08', '#F49917'],
                ['#DC3545', '#17A2B8', '#6610F2', '#fa1e81', '#72e7a6']
            ]
        });
    }
});

$(document).ready(function () {

    var langcode = $("html").attr("lang");

    var openstate = false;

    $("#file-filter-button").click(function () {
        if (openstate === false) {
            $(".file-filter-section").removeClass("d-none");
            openstate = true;
        }
        else {
            $(".file-filter-section").addClass("d-none");
            openstate = false;
        }
    });
   
    $('[data-toggle="tooltip"]').tooltip();

    $('[data-tooltip]').tooltip();

    $('[data-toggle="popover"]').popover({
        trigger: 'hover',
        container: 'body',
        placement: 'top',
        template:   '<div class="popover popover-header-primary" role="tooltip">'+
                    '   <div class="arrow"></div>'+
                    '   <div class="popover-body tx-12 pd-b-10-f"></div>'+
                    '</div>'
    });

    if ($(".select2").length !== 0) {
        $('.select2').select2({
            allowClear: true,
            width: '100%'
        });
        $('.select2Multi').select2({
            tags: true,
            width: '100%',
        });
        $('.select2Search').select2({
            minimumResultsForSearch: Infinity,
        });
    }    

    if ($(".accordion, #accordion").length !== 0) {
        $('.accordion').accordion({
            heightStyle: 'content'
        });
    }

    if ($(".datepicker").length !== 0) {
        $('.datepicker').datepicker({
            lang: 'tr',
            showOtherMonths: true,
            selectOtherMonths: true
        });
    }

    if ($(".datetimepicker").length !== 0) {
        $('.datetimepicker').datepicker({
            lang: langcode,
            showOtherMonths: true,
            selectOtherMonths: true
        });
    }

    $('.off-canvas-menu').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $(target).addClass('show');
    });

    $('.off-canvas .close, .off-canvas .closecanvas').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.off-canvas').removeClass('show');
    });

    $(document).on('click touchstart', function (e) {
        e.stopPropagation();
        if (!$(e.target).closest('.off-canvas-menu').length) {
            var offCanvas = $(e.target).closest('.off-canvas').length;
            if (!offCanvas) {
                $('.off-canvas.show').removeClass('show');
            }
        }
    });

});