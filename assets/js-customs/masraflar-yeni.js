$(document).ready(function () {

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
    for (countscroll = 1; countscroll <= 1; ++countscroll) {
        if ($(".ritma-scrollbar" + countscroll).length !== 0) {
            const scrollone = new PerfectScrollbar('.ritma-scrollbar' + countscroll, {
                suppressScrollX: true
            });
        }
    }

});