$(document).ready(function () {

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

    var countscroll;
    for (countscroll = 1; countscroll <= 20; ++countscroll) {
        if ($(".ritma-scrollbar" + countscroll).length !== 0) {
            const scrollone = new PerfectScrollbar('.ritma-scrollbar' + countscroll, {
                wheelPropagation: false,
                suppressScrollX: true
            });
        }
    }

    $('#modal_taxinfos_newaddress_btn').on('click', function () {
        $('#modal_taxinfos_newaddress').addClass('d-none');
        $('#modal_taxinfos_newaddress').addClass('d-block');
    });

});