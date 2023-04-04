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

    $('#newconversation_open1, #newconversation_open2').on('click', function (e) {
        $("#newconversation_open2").removeClass('d-flex').addClass('d-none');
        $("#newconversation").removeClass('d-none');
    });

    $('#newconversation_close1, #newconversation_close2').on('click', function (e) {
        $("#newconversation_open2").addClass('d-flex').removeClass('d-none');
        $("#newconversation").addClass('d-none');
    });

    $('#newconversation_maximize').on('click', function (e) {
        var html = $("#newconversation #editor-container > .ql-editor").html();
        $('#mailCompose #editor-container2 > .ql-editor').html(html);
        $('#mailCompose').addClass('show');

    });

    if ($("#editor-container").length !== 0) {
        var quill1 = new Quill('#editor-container', {
            modules: { toolbar: '#toolbar-container' },
            theme: 'snow',
            placeholder: 'Bir şeyler yazın.'
        });
    }

    $("[msg-contact]").on('click', "[item-delete]", function (e) { $(this).parent("div").remove(); });
    $("[msg-persons]").on('click', "[item-delete]", function (e) { $(this).parent("div").remove(); });

    $("[msg-contact] [msg-contact-list], [msg-contact] [msg-contact-list] > input").on('click', function (e) {
        var tagname = $(e.target).prop('tagName');
        if (tagname === "DIV" || tagname === "INPUT") {
            $("[msg-contact] [msg-contact-list] > input").focus();
            var position = $("[msg-contact] [msg-contact-list] > input").position();
            $("[msg-contact] [msg-contact-search]").css("margin-left", position.left);
            $("[msg-contact] [msg-contact-search]").css("margin-top", position.top);
            $("[msg-contact] [msg-contact-search]").removeClass("d-none");
        }
    });

    $("[msg-persons] [msg-persons-list], [msg-persons] [msg-persons-list] > input").on('click', function (e) {
        var tagname = $(e.target).prop('tagName');
        if (tagname === "DIV" || tagname === "INPUT") {
            $("[msg-persons] [msg-persons-list] > input").focus();
            var position = $("[msg-persons] [msg-persons-list] > input").position();
            $("[msg-persons] [msg-persons-search]").css("margin-left", position.left);
            $("[msg-persons] [msg-persons-search]").css("margin-top", position.top);
            $("[msg-persons] [msg-persons-search]").removeClass("d-none");
        }
    });

    $("[msg-persons] [msg-persons-search]").on('click', "[search-id]", function (e) {
        var id = $(this).attr("search-id");
        $("[msg-persons] [msg-persons-search] [search-id]").each(function () { $(this).removeClass("tx-primary").removeClass("bg-ui-01").addClass("tx-color-03"); });
        $("[msg-persons] [msg-persons-search] [search-list]").each(function () { $(this).addClass("d-none"); });
        $(this).removeClass("tx-color-03").addClass("tx-primary").addClass("bg-ui-01");
        $("[msg-persons] [msg-persons-search] [search-list=" + id + "]").removeClass("d-none");
    });

    $("[msg-contact] [msg-contact-search] [search-list]").on('click', "[search-item]", function (e) {
        add_contact($(this).attr("search-item"), $(this).attr("search-item-type"));
    });

    $("[msg-persons] [msg-persons-search] [search-list]").on('click', "[search-item]", function (e) {
        add_person($(this).attr("search-item"), $(this).attr("search-item-type"));
    });

    $(document).on('click', function (e) {
        var newtag_html
        if ($("[msg-contact] [msg-contact-list] > input").val() !== '') {
            var newtag_contact = $("[msg-contact] [msg-contact-list] input").val();
            add_contact(newtag_contact, "");
            $("[msg-contact] [msg-contact-list] input").val("");
            $("[msg-contact] [msg-contact-search]").addClass("d-none");
        }
        if ($("[msg-persons] [msg-persons-list] > input").val() !== '') {
            var newtag_person = $("[msg-persons] [msg-persons-list] input").val();
            add_person(newtag_person, "");
            $("[msg-persons] [msg-persons-list] input").val("");
            $("[msg-persons] [msg-persons-search]").addClass("d-none");
        }
    });

    $(document).mouseup(function (e) {
        var container1 = $("[msg-contact] [msg-contact-search]");
        var container2 = $("[msg-persons] [msg-persons-search]");
        if (!container1.is(e.target) && container1.has(e.target).length === 0) { container1.addClass("d-none"); }
        if (!container2.is(e.target) && container2.has(e.target).length === 0) { container2.addClass("d-none"); }
    });

    $("#red").treeview({
        animated: "fast",
        collapsed: true,
        control: "#treecontrol"
    });

});

function add_contact(newtag_contact, type) {
    var listcount = $("[msg-contact] [msg-contact-list] > [msg-contact-item]").length;
    if (listcount === 0) {
        if (type === "MT") {
            tagcolour = "forestgreen"
        } else if (type === "MA") {
            tagcolour = "lightgreen"
        } else if (type === "ŞB") {
            tagcolour = "#2196f3"
        } else {
            tagcolour = "#c0ccda"
        }
        newtag_html = '<div msg-contact-item class="d-inline-flex align-items-center pos-relative pd-4 bg-ui-02 rounded mg-y-2 mg-r-4">' +
            '   <div class="d-flex align-items-center mg-r-6">' +
            '   <div><div class="avatar avatar-xs lh-0 mg-r-6"><div class="avatar-initial ht-25-f rounded pd-x-5" style="background-color: ' + tagcolour + ';">' + type + '</div></div></div>' +
            '   <div class="text-muted tx-13 tx-normal text-ellipsis">' + newtag_contact + '</div>' +
            '</div>' +
            '<a item-delete class="cursor-pointer text-muted lh-0-f"><i class="far fa-times"></i></a>' +
            '</div>';
        $("[msg-contact] [msg-contact-list] > input").before(newtag_html);
        $("[msg-contact] [msg-contact-list] > input").focus();
        var position = $("[msg-contact] [msg-contact-list] > input").position();
        $("[msg-contact] [msg-contact-search]").css("margin-left", position.left);
        $("[msg-contact] [msg-contact-search]").css("margin-top", position.top);
    } else {
        alert("En fazla bir kontak seçebilirsiniz");
    }
    $("[msg-contact] [msg-contact-search]").addClass("d-none");

}

function add_person(newtag_person, type) {
    if (type === "our") { tagcolour = "bg-primary-light" } else { tagcolour = "bg-ui-02" }
    newtag_html = '<div msg-persons-item class="d-inline-flex align-items-center pd-4 ht-30 ' + tagcolour + ' rounded mg-y-2 mg-r-4">' +
        '<div class="text-muted tx-13 pd-x-6">' + newtag_person + '</div>' +
        '<a item-delete class="cursor-pointer text-muted lh-0-f mg-l-6"><i class="far fa-times"></i></a>' +
        '</div>';
    $("[msg-persons] [msg-persons-list] > input").before(newtag_html);
    $("[msg-persons] [msg-persons-list] > input").focus();
    var position = $("[msg-persons] [msg-persons-list] > input").position();
    $("[msg-persons] [msg-persons-search]").css("margin-left", position.left);
    $("[msg-persons] [msg-persons-search]").css("margin-top", position.top);
    $("[msg-persons] [msg-persons-search]").addClass("d-none");
}