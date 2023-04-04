var cellClassRules = {
    'header-cell': 'data.section === "big-title"',
};

// DATA

var rowData = [
    { section: 'big-title', Kod: 'ZY Elektrikli / Z Traktör', Islemler: "1" },
    {
        Kod: 'BAK01',
        MaddeAdi: 'Satış Öncesi Teknik Bakım',
        Aciklama: "0",
        Garanti: "1",
        Adet: 2,
        Doviz: 1,
        BirimFiyat: 0,
        Iskonto: 0,
        KDV: 8,
        ToplamFiyat: 0,
        Islemler: "2",
        GarantiDurumu: "1",
    },
    { section: 'big-title', Kod: 'Malzeme', Islemler: "3" },
    {
        Kod: 'MSS-177',
        MaddeAdi: 'Motor Soğutma Sistemi',
        Aciklama: "1",
        Garanti: "1",
        Adet: 2,
        Doviz: 1,
        BirimFiyat: 1250,
        Iskonto: 0,
        KDV: 18,
        ToplamFiyat: 1250,
        Islemler: "2",
        GarantiDurumu: "2",
    },
    {
        Kod: 'TÖF-99',
        MaddeAdi: 'Traktör Ön Farı',
        Aciklama: "1",
        Garanti: "1",
        Adet: 2,
        Doviz: 1,
        BirimFiyat: 950,
        Iskonto: 0,
        KDV: 18,
        ToplamFiyat: 1900,
        Islemler: "2",
        GarantiDurumu: "3",
    },
    { section: 'big-title', Kod: 'İşçilik', Islemler: "3" },
    {
        Kod: 'İŞ-19',
        MaddeAdi: 'İşçilik Ücreti',
        Aciklama: "0",
        Garanti: "1",
        Adet: 1,
        Doviz: 1,
        BirimFiyat: 740,
        Iskonto: 0,
        KDV: 18,
        ToplamFiyat: 740,
        Islemler: "4",
        GarantiDurumu: "4",
    },
];

// GRID OPTIONS

var gridOptions = {
    columnDefs: [
        {
            headerName: '',
            field: '',
            maxWidth: 42,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: '#',
            field: 'Opt',
            maxWidth: 42,
            rowDrag: true,
            filter: false,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            field: 'Kod',
            filter: true,
            maxWidth: 130,
            colSpan: function (params) {
                if (isHeaderRow(params)) {
                    return 10;
                } else {
                    return 1;
                }
            },
            editable: false,
            cellClassRules: cellClassRules,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: 'Ürün Adı',
            field: 'MaddeAdi',
            filter: true,
            editable: false,
            flex: 1,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: 'Açıklama',
            field: 'Aciklama',
            editable: false,
            filter: false,
            width: 50,
            cellRenderer: grid_aciklama,
            cellStyle: { 'display': 'flex', 'justify-content': 'center', 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: "Garanti Kapsamı",
            field: "Garanti",
            editable: false,
            filter: false,
            maxWidth: 152,
            cellRenderer: grid_garanti,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: 'Adet',
            field: 'Adet',
            type: 'rightAligned',
            width: 80,
            cellRenderer: grid_adet,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: "Para Birimi",
            field: "Doviz",
            editable: false,
            filter: false,
            maxWidth: 120,
            cellRenderer: grid_doviz,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: 'Birim Fiyat',
            field: 'BirimFiyat',
            maxWidth: 100,
            type: 'numberColumn, rightAligned',
            valueFormatter: formatCurrency2,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: "İskonto",
            field: "Iskonto",
            maxWidth: 100,
            type: 'numberColumn, rightAligned',
            valueFormatter: formatCurrency2,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: "KDV",
            field: "KDV",
            editable: false,
            filter: false,
            maxWidth: 97,
            cellRenderer: grid_kdv,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: 'Toplam',
            field: 'ToplamFiyat',
            maxWidth: 100,
            type: 'numberColumn, rightAligned',
            valueFormatter: formatCurrency2,
            cellStyle: { 'color': 'black', 'fontWeight': 'bold' }
        },
        {
            headerName: 'İşlemler',
            field: 'Islemler',
            width: 105,
            cellRenderer: grid_islem,
            initialPinned: 'right',
            filter: false,
            type: 'rightAligned',
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: 'Garanti Durumu',
            field: 'GarantiDurumu',
            width: 135,
            cellRenderer: grid_garantidurum,
            initialPinned: 'right',
            filter: false,
            type: 'rightAligned',
        },
    ],
    defaultColDef: {
        editable: true,
        sortable: true,
        resizable: true,
        headerCheckboxSelection: isFirstColumn,
        checkboxSelection: isFirstColumn,
    },
    autoGroupColumnDef: {
        headerName: 'Arıza Nedeni Ürün',
        minWidth: 200,
    },
    columnTypes: {
        numberColumn: { width: 130 },
    },
    suppressRowClickSelection: true,
    rowSelection: 'multiple',
    onSelectionChanged: onSelectionChanged,
    rowData: null,
    rowDragManaged: true,
    animateRows: true,
    debug: true,
    components: {
        customLoadingCellRenderer: CustomLoadingCellRenderer,
        grid_aciklama: grid_aciklama,
        grid_garantidurum: grid_garantidurum,
        grid_adet: grid_adet,
        grid_islem: grid_islem,
    },
    loadingCellRenderer: 'customLoadingCellRenderer',
    loadingCellRendererParams:{
        loadingMessage: 'Lütfen Bekleyiniz',
    },
};

// GRID DEFAULT FUNCS

function isFirstColumn(params) {
    var displayedColumns = params.columnApi.getAllDisplayedColumns();
    var thisIsFirstColumn = displayedColumns[0] === params.column;
    return thisIsFirstColumn;
}

function isHeaderRow(params) {
    return params.data.section === 'big-title';
}

// GRID SELECTED FUNCS

function onSelectionChanged() {
    var selectedRows = gridOptions.api.getSelectedRows();
    if (selectedRows.length) {
        selectedRows.forEach(function (selectedRow, index) {
            $("#grid_bulkactions_count").removeAttr("style");
            $("#grid_bulkactions_count").html("<strong>" + selectedRows.length + "</strong>" + "&nbsp;adet seçili");
            $("#grid_noselected").removeClass("d-flex").addClass("d-none");
            $("#grid_bulkactions").removeClass("d-none").addClass("d-flex");
        });
    }
    else {
        $("#grid_noselected").removeClass("d-none").addClass("d-flex");
        $("#grid_bulkactions").removeClass("d-flex").addClass("d-none");
    }

}

$("#grid_bulkactions_cancel").on("click", function () {
    gridOptions.api.deselectAll();
    $("#grid_noselected").removeClass("d-none").addClass("d-flex");
    $("#grid_bulkactions").removeClass("d-flex").addClass("d-none");
});
$("#grid_addwithcode_btn").on("click", function () {
    $("#grid_noselected").removeClass("d-flex").addClass("d-none");
    $("#grid_bulkactions").removeClass("d-flex").addClass("d-none");
    $("#grid_addwithcode").removeClass("d-none").addClass("d-flex");
});
$("#grid_addwithcode_cancel").on("click", function () {
    $("#grid_noselected").removeClass("d-flex").addClass("d-flex");
    $("#grid_bulkactions").removeClass("d-flex").addClass("d-none");
    $("#grid_addwithcode").removeClass("d-flex").addClass("d-none");
});

// GRID ROW FEATURES

function formatNumber1(number) {
    return parseFloat(number).toFixed(2)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
function formatCurrency1(params) {
    if (params.value !== undefined) {
        return "₺ " + formatNumber1(params.value);
    }
}
function formatCurrency2(params) {
    if (params.value !== undefined) {
        return formatNumber1(params.value);
    }
}

// GRID ROW COMBOS

function grid_garanti(params) {

    if (params.value !== undefined) {

        var rowIndex = params.rowIndex;

        var eSelect = document.createElement("select");
        eSelect.setAttribute('class', 'custom-select custom-select-sm tx-12');
        eSelect.setAttribute('style', 'padding:0 40px 0 10px; width: 100%;');
        eSelect.setAttribute('name', params.colDef.field);
        eSelect.setAttribute('id', params.colDef.field + "_" + rowIndex);

        if (params.colDef.field === "Garanti") {
            var eOption1 = document.createElement("option");
            eOption1.text = "Garantidışı";
            eOption1.value = 1;
            eSelect.appendChild(eOption1);
            var eOption2 = document.createElement("option");
            eOption2.text = "Garantiye Sor";
            eOption2.value = "2";
            eSelect.appendChild(eOption2);
        }

        return eSelect;

    }

}

function grid_kdv(params) {

    if (params.value !== undefined) {

        var rowIndex = params.rowIndex;

        var eSelect = document.createElement("select");
        eSelect.setAttribute('class', 'custom-select custom-select-sm tx-12');
        eSelect.setAttribute('style', 'padding:0 40px 0 10px; width: 100%;');
        eSelect.setAttribute('name', params.colDef.field);
        eSelect.setAttribute('id', params.colDef.field + "_" + rowIndex);

        if (params.colDef.field === "KDV") {
            var eOption1 = document.createElement("option");
            eOption1.text = "%0";
            eOption1.value = "0";
            eSelect.appendChild(eOption1);
            var eOption2 = document.createElement("option");
            eOption2.text = "%8";
            eOption2.value = "8";
            eSelect.appendChild(eOption2);
            var eOption3 = document.createElement("option");
            eOption3.text = "%18";
            eOption3.value = "18";
            eSelect.appendChild(eOption3);
        }

        return eSelect;

    }

}

function grid_doviz(params) {

    if (params.value !== undefined) {

        var rowIndex = params.rowIndex;

        var eSelect = document.createElement("select");
        eSelect.setAttribute('class', 'custom-select custom-select-sm tx-12');
        eSelect.setAttribute('style', 'padding:0 40px 0 10px; width: 100%;');
        eSelect.setAttribute('name', params.colDef.field);
        eSelect.setAttribute('id', params.colDef.field + "_" + rowIndex);

        if (params.colDef.field === "Doviz") {
            var eOption1 = document.createElement("option");
            eOption1.text = "TL (₺)";
            eOption1.value = "1";
            eSelect.appendChild(eOption1);
            var eOption2 = document.createElement("option");
            eOption2.text = "Dolar ($)";
            eOption2.value = "2";
            eSelect.appendChild(eOption2);
            var eOption3 = document.createElement("option");
            eOption3.text = "Euro (€)";
            eOption3.value = "3";
            eSelect.appendChild(eOption3);
        }

        return eSelect;

    }

}

function grid_aciklama() { }
grid_aciklama.prototype.init = function (params) {
    var gd_div = document.createElement('div');
        gd_div.style.cssText = "width: 100%; display: block;";
    this.eGui = gd_div;
    var grid_aciklama_html = '';
    if (params.value === "0") {
        grid_aciklama_html = '<a data-toggle="modal" href="#modal_aciklama"><i class="far fa-comment-alt-slash tx-secondary valign-middle"></i></button>';
    } else if (params.value === "1") {
        grid_aciklama_html = '<a data-toggle="modal" href="#modal_aciklama"><i class="fa fa-comment-alt tx-primary valign-middle"></i></button>';
    } 
    this.eGui.innerHTML = '<div class="d-flex" data-tooltip title="Açıklama">' + grid_aciklama_html + '</div>'
};
grid_aciklama.prototype.getGui = function () { return this.eGui; }
grid_aciklama.prototype.destroy = function () { this.eGui.removeEventListener('click', this.btnClickedHandler); }
grid_aciklama.prototype.btnClickedHandler = function (event) { this.params.clicked(this.params.value); }

function grid_adet() { }
grid_adet.prototype.init = function (params) {
    var gd_div = document.createElement('div');
    gd_div.style.cssText = "width: 100%; display: block;";
    this.eGui = gd_div;
    var grid_islem_html = '';
    if (params.value > "1") {
        grid_islem_html = '';
    } else if (params.value <= "1") {
        grid_islem_html = '<a data-toggle="modal" href="#modal_stockchecker"><i class="fa fa-exclamation-triangle tx-primary valign-middle mg-l-10"></i></button>';
    }
    this.eGui.innerHTML = '<div class="d-flex">' + params.value + grid_islem_html + '</div>';
};
grid_adet.prototype.getGui = function () { return this.eGui; }
grid_adet.prototype.destroy = function () { this.eGui.removeEventListener('click', this.btnClickedHandler); }
grid_adet.prototype.btnClickedHandler = function (event) { this.params.clicked(this.params.value); }

function grid_islem() { }
grid_islem.prototype.init = function (params) {
    var gd_div = document.createElement('div');
    gd_div.style.cssText = "width: 100%; display: block;";
    this.eGui = gd_div;
    var grid_islem_html = '';

    if (params.value === "1") {
        grid_islem_html = '<a class="btn btn-xs btn-primary pd-x-8 pd-y-4" data-toggle="modal" href="#modal_products2"><i class="fal fa-pen valign-middle mg-r-6"></i>Düzenle</button>';
    } else if (params.value === "2") {
        grid_islem_html = '<a class="btn btn-xs btn-primary pd-x-8 pd-y-4" data-toggle="modal" href="#modal_grid_product"><i class="fal fa-pen valign-middle mg-r-6"></i>Düzenle</button>';
    } else if (params.value === "3") {
        grid_islem_html = '<a class="btn btn-xs btn-primary pd-x-8 pd-y-4" data-toggle="modal" href="#modal_grid_title"><i class="fal fa-pen valign-middle mg-r-6"></i>Düzenle</button>';
    } else if (params.value === "4") {
        grid_islem_html = '<a class="btn btn-xs btn-primary pd-x-8 pd-y-4" data-toggle="modal" href="#modal_grid_product"><i class="fal fa-pen valign-middle mg-r-6"></i>Düzenle</button>';
    }
    this.eGui.innerHTML = '<div class="d-inline-flex">' + grid_islem_html + '</div>';
};
grid_islem.prototype.getGui = function () { return this.eGui; }
grid_islem.prototype.destroy = function () { this.eGui.removeEventListener('click', this.btnClickedHandler); }
grid_islem.prototype.btnClickedHandler = function (event) { this.params.clicked(this.params.value); }

function grid_garantidurum() { }
grid_garantidurum.prototype.init = function (params) {
    var gd_div = document.createElement('div');
        gd_div.style.cssText = "width: 113px; display: block;";
    this.eGui = gd_div;
    var grid_garantidurum_html = '';
    if (params.value === "0") {
        grid_garantidurum_html = '';
    } else if (params.value === "1") {
        grid_garantidurum_html = '<a class="btn btn-xs btn-block btn-primary pd-x-8 pd-y-4" data-toggle="modal" href="#modal_sendApproval"><i class="far fa-shield-check valign-middle mg-r-6"></i>Onaya Gönder</button>';
    } else if (params.value === "2") {
        grid_garantidurum_html = '<a class="btn btn-xs btn-block btn-outline-success pd-x-8 pd-y-4" data-toggle="modal" href="#modal_grid_product"><i class="far fa-shield-check valign-middle mg-r-6"></i>Onaylı</button>';
    } else if (params.value === "3") {
        grid_garantidurum_html = '<a class="btn btn-xs btn-block btn-outline-light pd-x-8 pd-y-4" data-toggle="modal" href="#modal_grid_product"><i class="far fa-clock valign-middle mg-r-6"></i>Bekliyor</button>';
    } else if (params.value === "4") {
        grid_garantidurum_html = '<a class="btn btn-xs btn-block btn-outline-danger pd-x-8 pd-y-4" data-toggle="modal" href="#modal_grid_product"><i class="far fa-ban valign-middle mg-r-6"></i>Reddedildi</button>';
    }
    this.eGui.innerHTML = '<div class="d-flex">' + grid_garantidurum_html + '</div>'
};
grid_garantidurum.prototype.getGui = function () { return this.eGui; }
grid_garantidurum.prototype.destroy = function () { this.eGui.removeEventListener('click', this.btnClickedHandler); }
grid_garantidurum.prototype.btnClickedHandler = function (event) { this.params.clicked(this.params.value); }

// GRID STARTING

document.addEventListener('DOMContentLoaded', function () {
    agGrid.LicenseManager.setLicenseKey("For_Trialing_ag-Grid_Only-Not_For_Real_Development_Or_Production_Projects-Valid_Until-1_May_2021_[v2]_MTYxOTgyMzYwMDAwMA==a717ffda041154ad580159495341d1fd");
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
    gridOptions.api.setRowData(rowData);
});
