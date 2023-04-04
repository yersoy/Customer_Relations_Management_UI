$(document).ready(function() {

    var ornektab = $("#yetkilendirmeler_icerik #yetkilendirme-icerik-kontak").html();

    var teklificerik = ornektab.replaceAll("kontak_", "teklif_").replaceAll("Kontak", "Teklif");
    var urunlericerik = ornektab.replaceAll("kontak_", "urunler_").replaceAll("Kontak", "Ürünler");

    $("#yetkilendirmeler_icerik #yetkilendirme-icerik-teklif").html(teklificerik);
    $("#yetkilendirmeler_icerik #yetkilendirme-icerik-urunler").html(urunlericerik);

    $("#yetkilendirmeler_tab .cursor-pointer").click(function() {

        var idtam = $(this).attr("id");
        var id = idtam.replace("yetkilendirme-tab-", "");

        $("#yetkilendirmeler_tab .cursor-pointer.tx-primary").each(function() {
            $(this).removeClass("tx-primary").addClass("tx-secondary");
            $(this).removeClass("bg-primary-light").addClass("bg-ui-01");
        });

        $("#yetkilendirmeler_icerik .d-block").each(function() {
            $(this).removeClass("d-block").addClass("d-none");
        });

        $(this).addClass("tx-primary").removeClass("tx-secondary");
        $(this).addClass("bg-primary-light").removeClass("bg-ui-01");

        $("#yetkilendirmeler_icerik #yetkilendirme-icerik-" + id).removeClass("d-none").addClass("d-block");

    });
    //
    var ornektab = $("#yetkilendirmeler_icerik #yetkilendirme-icerik-kontak").html();

    var teklificerik = ornektab.replaceAll("kontak_", "teklif_").replaceAll("Kontak", "Teklif");
    var urunlericerik = ornektab.replaceAll("kontak_", "urunler_").replaceAll("Kontak", "Ürünler");

    $("#yetkilendirmeler_icerik #yetkilendirme-icerik-teklif").html(teklificerik);
    $("#yetkilendirmeler_icerik #yetkilendirme-icerik-urunler").html(urunlericerik);

    $("#yetkilendirmeler_tab .cursor-pointer").click(function() {

        var idtam = $(this).attr("id");
        var id = idtam.replace("yetkilendirme-tab-", "");

        $("#yetkilendirmeler_tab .cursor-pointer.tx-primary").each(function() {
            $(this).removeClass("tx-primary").addClass("tx-secondary");
            $(this).removeClass("bg-primary-light").addClass("bg-ui-01");
        });

        $("#yetkilendirmeler_icerik .d-block").each(function() {
            $(this).removeClass("d-block").addClass("d-none");
        });

        $(this).addClass("tx-primary").removeClass("tx-secondary");
        $(this).addClass("bg-primary-light").removeClass("bg-ui-01");

        $("#yetkilendirmeler_icerik #yetkilendirme-icerik-" + id).removeClass("d-none").addClass("d-block");

    });

    $("#personel_tabs_solmenu a").on("click", function() {
        var id = $(this).attr("href");
        $("#personel_tabs li.nav-item a.active").removeClass("active");
        $("#personel_tabs li.nav-item a").each(function() {
            if ($(this).attr("href") === id) {
                $(this).addClass("active");
            }
        });
    });

    $("#personel_tabs li.nav-item a").on("click", function() {
        var id = $(this).attr("href");
        $("#personel_tabs_solmenu a.active").removeClass("active");
        $("#personel_tabs_solmenu a").each(function() {
            if ($(this).attr("href") === id) {
                $(this).addClass("active");
            }
        });
    });

    $(".auth-switch .ritma-switch input").click(function() {
        if ($(this).val()) {
            $(this).parent(".auth-switch h6").css("display", "block");
        } else {
            $(this).parent(".auth-switch h6").css("display", "none");
        }
    });

    $("#work1").click(function() { $("#end-date").removeAttr("disabled"); });
    $("#work").click(function() { $("#end-date").attr("disabled", "disabled"); });

    var canvas = document.querySelector("canvas");
    var signaturePad = new SignaturePad(canvas);

    $(".ritma-switch input[type='checkbox']").change(function() {
        if ($(this).is(":checked")) {
            $(this).closest(".auth-switch").find("small").text("Tam Yetki");
        } else {
            $(this).closest(".auth-switch").find("small").text("Yetkisiz");
        }
    });

    $('.authopiton').click(function() { $('.authtext').text($(this).text()); });

    $(".cv-media").hover(function() {
        $(this).find(".edit-cv").css("display", "block");
    }, function() {
        $(this).find(".edit-cv").css("display", "none");
    });

});