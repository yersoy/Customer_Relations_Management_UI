
function minimize() {
    $('#modal_newinterview2').toggleClass('minimize');
}

function closeT() {
    $('body').removeClass('mail-content-show');
    if ($('#modal_newinterview2').hasClass('minimize') || $('#modal_newinterview2').hasClass('shrink')) {
        $('#modal_newinterview2').addClass('d-none');
        setTimeout(function () {
            $('#modal_newinterview2').attr('class', 'mail-compose');
        }, 500);
    } else {
        $('#modal_newinterview2').removeClass('show');
    }
}

function shrink() {
    $('#modal_newinterview2').toggleClass('shrink')
    $('#modal_newinterview2').removeClass('minimize')
}

$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip();

    if ($("#editor-ustbilgi").length !== 0) {
        var quill1 = new Quill('#editor-ustbilgi', {
            modules: { toolbar: '#editor-ustbilgi-toolbar' },
            theme: 'snow'
        });
    }

    if ($("#editor-altbilgi").length !== 0) {
        var quill2 = new Quill('#editor-altbilgi', {
            modules: { toolbar: '#editor-altbilgi-toolbar' },
            theme: 'snow'
        });
    }

    if ($("#editor-not").length !== 0) {
        var quillInline = new Quill('#editor-not', {
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline'],
                    [{ 'header': 1 }, { 'header': 2 }, 'link'],
                ]
            },
            bounds: '#editor-not',
            scrollingContainer: '#editor-not-container',
            theme: 'bubble'
        });
    }

    $("[aria-labelledby='filters_list'] > a").on('click', function () {
        var id = $(this).attr("id");
        $("#filters_contents").removeClass("d-none");
        $("#filters_contents").addClass("d-flex");
        $("#filters_contents #" + id + "_content").removeClass("d-none");
    });

    $('.off-canvas-menu').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $(target).addClass('show');
    });

    $('.off-canvas .close').on('click', function (e) {
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

    $("#modal_newitem_cats .nav-item").on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass('show') === true) {
            $(this).removeClass("show");
        } else {
            $(this).addClass("show");
        }
    });

    $('#modal_newinterview2_btn').on('click', function () {
        $('#modal_newinterview2').addClass('show');
    });

    $('#interniew_reminder1').on('change', function () {
        var status = $(this).prop('checked');
        if (status === true) {
            $('#interview_reminderdetails').removeClass("d-none");
        } else {
            $('#interview_reminderdetails').addClass("d-none");
        }
    });

    $('#interniew_reminder2').on('change', function () {
        var status = $(this).prop('checked');
        if (status === true) {
            $('#interview_reminderdate2').removeClass("d-none");
        } else {
            $('#interview_reminderdate2').addClass("d-none");
        }
    });

    $('#modal_invoiceinfos_newaddress1_btn').on('click', function () {
        $('#modal_invoiceinfos_newaddress1').addClass('d-none');
        $('#modal_invoiceinfos_newaddress1').addClass('d-block');
    });

    var countscroll;
    for (countscroll = 1; countscroll <= 14; ++countscroll) {
        if ($(".ritma-scrollbar" + countscroll).length !== 0) {
            const scrollone = new PerfectScrollbar('.ritma-scrollbar' + countscroll, {
                wheelPropagation: false,
                suppressScrollX: true
            });
        }
    }

    if ($(".ritma_anime1").length !== 0) {
        $(".ritma_anime1").addClass("animated tada");
        setTimeout(function () { $(".ritma_anime1").removeClass('animated tada'); }, 1200);
        setTimeout(function () { $(".ritma_anime1").addClass("animated tada"); }, 1300);
        setTimeout(function () { $(".ritma_anime1").removeClass('animated tada'); }, 2400);
        setTimeout(function () { $(".ritma_anime1").addClass("animated tada"); }, 2500);
        setTimeout(function () { $(".ritma_anime1").removeClass('animated tada'); }, 3600);
    }

});