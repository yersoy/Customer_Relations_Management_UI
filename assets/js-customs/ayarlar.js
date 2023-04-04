$(document).ready(function () {

    var ornektab = $("#yetkilendirmeler_icerik #yetkilendirme-icerik-kontak").html();

    var teklificerik = ornektab.replaceAll("kontak_", "teklif_").replaceAll("Kontak", "Teklif");
    var urunlericerik = ornektab.replaceAll("kontak_", "urunler_").replaceAll("Kontak", "Ürünler");

    $("#yetkilendirmeler_icerik #yetkilendirme-icerik-teklif").html(teklificerik);
    $("#yetkilendirmeler_icerik #yetkilendirme-icerik-urunler").html(urunlericerik);

    $("#yetkilendirmeler_tab .cursor-pointer").click(function () {

        var idtam = $(this).attr("id");
        var id = idtam.replace("yetkilendirme-tab-", "");

        $("#yetkilendirmeler_tab .cursor-pointer.tx-primary").each(function () {
            $(this).removeClass("tx-primary").addClass("tx-secondary");
            $(this).removeClass("bg-primary-light").addClass("bg-ui-01");
        });

        $("#yetkilendirmeler_icerik .d-block").each(function () {
            $(this).removeClass("d-block").addClass("d-none");
        });

        $(this).addClass("tx-primary").removeClass("tx-secondary");
        $(this).addClass("bg-primary-light").removeClass("bg-ui-01");

        $("#yetkilendirmeler_icerik #yetkilendirme-icerik-" + id).removeClass("d-none").addClass("d-block");

    });

    $("[modul-permissions] .card").each(function () {
        $(this).attr("modul-status", "off");
        $(this).find(".card-header").removeClass("bg-light");
        $(this).find(".card-body").css("display", "none");

    });

    $("[modul-permissions] [perms-opener]").on('click', function () {
        var status = $(this).parents(".card").attr("modul-status");

        if (status == "off") {
            $(this).parents(".card").attr("modul-status", "on");
            $(this).parents(".card").find(".card-header").addClass("bg-light");
            $(this).parents(".card").find(".card-body").slideDown("slow", function () { });
            $(this).parents(".card").find(".fa-chevron-right").animate(
                { deg: 90 },
                {
                    duration: 600,
                    step: function (now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                    }
                }
            );
        }
        if (status == "on") {
            $(this).parents(".card").attr("modul-status", "off");
            $(this).parents(".card").find(".card-header").removeClass("bg-light");
            $(this).parents(".card").find(".card-body").slideUp();
            $(this).parents(".card").find(".fa-chevron-right").animate(
                { deg: 0 },
                {
                    duration: 400,
                    step: function (now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                    }
                }
            );
        }
    });

});