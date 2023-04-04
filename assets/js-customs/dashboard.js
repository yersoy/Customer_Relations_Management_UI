$(document).ready(function () {

    var countscroll;
    for (countscroll = 1; countscroll <= 20; ++countscroll) {
        if ($(".ritma-scrollbar" + countscroll).length !== 0) {
            const scrollone = new PerfectScrollbar('.ritma-scrollbar' + countscroll, {
                wheelPropagation: false,
                suppressScrollX: true
            });
        }
    }

    var counteditor;
    for (counteditor = 1; counteditor <= 5; ++counteditor) {
        if ($("#editor-not" + counteditor).length !== 0) {
            var pholder = $("#editor-not" + counteditor).attr("data-placeholder");
            var quillInline = new Quill("#editor-not" + counteditor, {
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline'],
                        [{ 'header': 1 }, { 'header': 2 }, 'link'],
                    ]
                },
                bounds: "#editor-not" + counteditor,
                scrollingContainer: "#note" + counteditor,
                theme: 'bubble',
                placeholder: pholder,
            });
        }
    }

    if ($("input[name=filter_personal_type]").length !== 0) {
        $("input[name=filter_personal_type]").on('change', function () {
            var val = $(this).val();
            if (val === "1") {
                console.log("1");
                $("#filter_personal_deps").removeClass("d-none").addClass("d-block");
                $("#filter_personal_pers").removeClass("d-block").addClass("d-none");
            } else if (val === "2") {
                console.log("2");
                $("#filter_personal_deps").removeClass("d-block").addClass("d-none");
                $("#filter_personal_pers").removeClass("d-none").addClass("d-block");
            }
        });
    }

    if ($(".card .card-footer a[href='#new_comment']").length !== 0) {
        $(".card .card-footer a[href='#new_comment']").on('click', function () {
            $(this).parents(".card").find(".comment_area").removeClass("d-none").addClass("d-block");
        });
    }
	
    if ($("#currencies-more-button").length !== 0) {
        $("#currencies-more-button").on('click', function () {
			var status = $("#currencies-more").data("status");
			var textmore = $(this).data("textmore");
			var textless = $(this).data("textless");
			//console.log("status: " + status);
			//console.log("textmore: " + textmore);
			//console.log("textless: " + textless);
			if (status === "off") {
				$("#currencies-more").data("status","on")
				$("#currencies-more").removeClass("d-none")
				$(this).find("> span").html(textless);
			} else if (status === "on") {
				$("#currencies-more").data("status","off")
				$("#currencies-more").addClass("d-none")
				$(this).find("> span").html(textmore);
			}
        });
    }

});