
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

    var countscroll;
    for (countscroll = 1; countscroll <= 14; ++countscroll) {
        if ($(".ritma-scrollbar" + countscroll).length !== 0) {
            const scrollone = new PerfectScrollbar('.ritma-scrollbar' + countscroll, {
                wheelPropagation: false,
                suppressScrollX: true
            });
        }
    }

    var counteditor;
    for (counteditor = 1; counteditor <= 3; ++counteditor) {
        if ($("#editor" + counteditor).length !== 0) {
            var quillInline = new Quill("#editor" + counteditor, {
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline'],
                        [{ 'header': 1 }, { 'header': 2 }, 'link'],
                    ]
                },
                bounds: "#aciklama" + counteditor,
                scrollingContainer: "#editor_div" + counteditor,
                theme: 'bubble'
            });
        }
    }

    $('#modal_profiles .modal-footer [href="#modal_profiles_new"]').on('click', function () {
        $('#modal_profiles .modal-footer [data-dismiss="modal"]').trigger("click");
        setTimeout(function () {
            $("body").append('<button id="modal_profiles_new_clicker" style="d-none" data-toggle="modal" href="#modal_profiles_new"></button>');
            $('#modal_profiles_new_clicker').trigger("click");
            $('#modal_profiles_new_clicker').remove();
        }, 500);
    });

    $('#modal_profiles_invoiceinfo_newaddress1_btn').on('click', function () {
        $('#modal_profiles_invoiceinfo_newaddress1').addClass('d-none');
        $('#modal_profiles_invoiceinfo_newaddress1').addClass('d-block');
    });

    $('#modal_addbarcode_opener').on('click', function () {
        $("#modal_addbarcode #barcode_active").addClass("d-none");
        $("#modal_addbarcode .modal-dialog-centered").removeClass("modal-xl");
        $("#modal_addbarcode #info_barcode").addClass("col-sm-12").remove("col-sm-6");
        $("#modal_addbarcode #info_serialno").addClass("d-none");
    });

    $('#modal_addbarcode #info_barcode_bttn').on('click', function () {
        $("#modal_addbarcode #barcode_active").removeClass("d-none");
        $("#modal_addbarcode .modal-dialog-centered").addClass("modal-xl");
        $("#modal_addbarcode #info_barcode").removeClass("col-sm-12").addClass("col-sm-6");
        $("#modal_addbarcode #info_serialno").removeClass("d-none");
    });

});