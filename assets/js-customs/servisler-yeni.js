
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
        if ($("#editor-not" + counteditor).length !== 0) {
            var quillInline = new Quill("#editor-not" + counteditor, {
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline'],
                        [{ 'header': 1 }, { 'header': 2 }, 'link'],
                    ]
                },
                bounds: "#editor-not" + counteditor,
                scrollingContainer: "#note" + counteditor,
                theme: 'bubble'
            });
        }
    }

    $('#modal_profiles_invoiceinfo_newaddress1_btn').on('click', function () {
        $('#modal_profiles_invoiceinfo_newaddress1').addClass('d-none');
        $('#modal_profiles_invoiceinfo_newaddress1').addClass('d-block');
    });

    $("[aria-labelledby=filters_list] > a").on('click', function () {
        var id = $(this).attr("id");
        $("#filters_contents").removeClass("d-none");
        $("#filters_contents").addClass("d-inline-flex");
        $("#filters_contents #" + id + "_content").removeClass("d-none");
    });

    $('#modal_profiles .modal-footer [href="#modal_profiles_new"]').on('click', function () {
        $('#modal_profiles .modal-footer [data-dismiss="modal"]').trigger("click");
        setTimeout(function () {
            $("body").append('<button id="modal_profiles_new_clicker" style="d-none" data-toggle="modal" href="#modal_profiles_new"></button>');
            $('#modal_profiles_new_clicker').trigger("click");
            $('#modal_profiles_new_clicker').remove();
        }, 500);
    });

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
