
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

    if ($("#btn_lockoffer").length !== 0) {
        var BoLock = 0;
        $("#btn_lockoffer").on("click", function () {
            console.log("x");
            if (BoLock === 0) {
                $("#btnAddItemButtonGroup").removeClass("d-flex").addClass("d-none");
                document.getElementById("btnCustomerSelect").style.display = "none";
                document.getElementById("btnOfferEdit").style.display = "none";
                document.getElementById("btnStatusEdit").style.display = "none";
                document.getElementById("btnExchangeRates").style.display = "none";
                document.getElementById("btnFileUpload").style.display = "none";
                document.getElementById("btnSave").style.display = "none";
                document.getElementById("btnOperation").style.display = "none";
                document.getElementById("btnOfferState").disabled = true;
                $("#btn_lockoffer").html("<i class='far fa-unlock mg-r-6'></i>Kilidi Aç");
                BoLock = 1;

            }
            else {
                $("#btnAddItemButtonGroup").removeClass("d-none").addClass("d-flex");
                document.getElementById("btnCustomerSelect").style.display = "block";
                document.getElementById("btnOfferEdit").style.display = "block";
                document.getElementById("btnStatusEdit").style.display = "block";
                document.getElementById("btnExchangeRates").style.display = "block";
                document.getElementById("btnFileUpload").style.display = "block";
                document.getElementById("btnSave").style.display = "block";
                document.getElementById("btnOperation").style.display = "block";
                document.getElementById("btnOfferState").disabled = false;
                $("#btn_lockoffer").html("<i class='far fa-lock mg-r-6'></i>Kilitle");
                BoLock = 0;
            }
        });
    }

    if ($("#aciklama_editor").length !== 0) {

        Quill.prototype.getHtml = function () {
            return this.container.querySelector('.ql-editor').innerHTML;
        };

        var quill1 = new Quill('#aciklama_editor', {
            modules: { toolbar: '#aciklama_editor-toolbar' },
            theme: 'snow'
        });

        var quillEd_txtArea_1 = document.createElement('textarea');
        var attrQuillTxtArea = document.createAttribute('quill__html');
        quillEd_txtArea_1.setAttributeNode(attrQuillTxtArea);

        var quillCustomDiv = quill1.addContainer('ql-custom');
        quillCustomDiv.appendChild(quillEd_txtArea_1);

        var quillsHtmlBtns = document.querySelectorAll('.ql-html');
        for (var i = 0; i < quillsHtmlBtns.length; i++) {
            quillsHtmlBtns[i].addEventListener('click', function (evt) {
                var wasActiveTxtArea_1 =
                    (quillEd_txtArea_1.getAttribute('quill__html').indexOf('-active-') > -1);

                if (wasActiveTxtArea_1) {
                    //html editor to quill
                    quill1.pasteHTML(quillEd_txtArea_1.value);
                    evt.target.classList.remove('ql-active');
                } else {
                    //quill to html editor
                    quillEd_txtArea_1.value = quill1.getHtml();
                    evt.target.classList.add('ql-active');
                }

                quillEd_txtArea_1.setAttribute('quill__html', wasActiveTxtArea_1 ? '' : '-active-');
            });
        }

    }

});