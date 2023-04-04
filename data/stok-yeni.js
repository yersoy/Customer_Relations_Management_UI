// DATA

var rowData = [
    {
        Kod: 'ZY-L-001',
        Adi: 'Traktör Lastiği',
        Depo: "Merkez",
        Miktar: 2,
        Fiyat: 2000,
        KDV: "%18",
        ToplamFiyat: 4720,
        Siparis: 'SF10008',
        Ozellik: '1',
        Islemler: '2',
    },
    {
        Kod: 'TÖF-99',
        Adi: 'Traktör Ön Farı',
        Depo: "Kocaeli",
        Miktar: 1,
        Fiyat: 950,
        KDV: "Dahil",
        ToplamFiyat: 950,
        Siparis: 'SIP10477',
        Ozellik: '2',
        Islemler: '3',
    },
    {
        Kod: 'RÖMK-99',
        Adi: 'Römork',
        Depo: "Kocaeli",
        Miktar: 1,
        Fiyat: 14500,
        KDV: "Dahil",
        ToplamFiyat: 14500,
        Siparis: 'SIP10001',
        Ozellik: '0',
        Islemler: '1',
    },
    {
        Kod: 'SİL-0174',
        Adi: 'Traktör Sileceği',
        Depo: "Kocaeli",
        Miktar: 1,
        Fiyat: 268,
        KDV: "Dahil",
        ToplamFiyat: 268,
        Siparis: '',
        Ozellik: '0',
        Islemler: '1',
    },
];

// GRID OPTIONS

var gridOptions = {
    columnDefs: [
        {
            headerName: '',
            field: '',
            maxWidth: 45,
            initialPinned: 'left',
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: '',
            field: 'Opt',
            maxWidth: 46,
            rowDrag: true,
            filter: false,
            initialPinned: 'left',
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            field: 'Kod',
            filter: true,
            maxWidth: 130,
            editable: false,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: 'Ürün Adı',
            field: 'Adi',
            filter: true,
            editable: false,
            minWidth: 300,
            flex: 1,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: 'Alış Fiyatı',
            field: 'Miktar',
            editable:true,
            maxWidth: 100,
            type: 'numberColumn',
            valueFormatter: formatCurrency1,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: 'Satış Fiyatı',
            field: 'Fiyat',
            editable:true,
            maxWidth: 100,
            type: 'numberColumn',
            valueFormatter: formatCurrency1,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: "KDV",
            field: "KDV",
            editable: false,
            filter: false,
            maxWidth: 110,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: 'Toplam',
            field: 'ToplamFiyat',
            maxWidth: 100,
            type: 'numberColumn',
            valueFormatter: formatCurrency1,
            initialPinned: 'right',
            cellStyle: { 'color': 'black', 'fontWeight': 'bold', 'border-right': '1px solid #e2e2e2' },
        },
        {
            headerName: 'Sipariş',
            field: 'Siparis',
            width: 56,
            cellRenderer: 'list_siparis',
            initialPinned: 'right',
            editable: false,
            filter: false,
            cellStyle: { 'border-right': '1px solid #e2e2e2' },
        },
        {
            headerName: 'Özellik',
            field: 'Ozellik',
            width: 90,
            cellRenderer: 'list_ozellik',
            initialPinned: 'right',
            editable: false,
            filter: false,
            cellStyle: { 'border-right': '1px solid #e2e2e2' },
        },
        {
            headerName: 'İşlemler',
            field: 'Islemler',
            width: 108,
            cellRenderer: 'list_menu',
            initialPinned: 'right',
            editable: false,
            filter: false,
            type: 'rightAligned',
        },
    ],
    defaultColDef: {
        editable: false,
        sortable: true,
        resizable: true,
        checkboxSelection: isFirstColumn,
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
        list_siparis: list_siparis,
        list_ozellik: list_ozellik,
        list_menu: list_menu,
    },
    loadingCellRenderer: 'customLoadingCellRenderer',
    loadingCellRendererParams: {
        loadingMessage: 'Lütfen Bekleyiniz',
    },
};

// GRID DEFAULT FUNCS

function isFirstColumn(params) {
    var displayedColumns = params.columnApi.getAllDisplayedColumns();
    var thisIsFirstColumn = displayedColumns[0] === params.column;
    return thisIsFirstColumn;
}

// GRID SELECTED FUNCS

function onSelectionChanged() {
    var selectedRows = gridOptions.api.getSelectedRows();
    if (selectedRows.length) {
        selectedRows.forEach(function (selectedRow, index) {
            // process
        });
    }
    else {
        // process
    }
}

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

function grid_kdv(params) {
    if (params.value !== undefined) {

        var rowIndex = params.rowIndex;
        var eSelect = document.createElement("select");
        eSelect.setAttribute('class', 'custom-select custom-select-sm tx-12');
        eSelect.setAttribute('style', 'padding:0 40px 0 10px; width: 100%;');
        eSelect.setAttribute('name', params.colDef.field);
        eSelect.setAttribute('id', params.colDef.field + "_" + rowIndex);

        var selectbox_text = ["Dahil", "%0", "%8", "%18"];
        var selectbox_val = ["-1", "0", "8", "18"];

        for (var i = 0; i < selectbox_text.length; i++) {
            var eOption = document.createElement("option");
            eOption.text = selectbox_text[i];
            eOption.value = selectbox_val[i];
            eSelect.appendChild(eOption);
        }

        return eSelect;

    }
}

// GRID STARTING

function list_siparis() { }
list_siparis.prototype.init = function (params) {
    var htmlcode = "";
    var gd_div = document.createElement('div');
        gd_div.style.cssText = "width: 100%; display: block;";

    if (params.value !== "") {
        htmlcode = '<div class="btn btn-xs bg-success tx-white pd-x-10 pd-y-4" data-tooltip title="#' + params.value + ' nolu siparişten listeye eklendi.">S</div>';
    } else {
        htmlcode = '<div class="btn btn-xs bg-secondary tx-white pd-x-10 pd-y-4" data-tooltip title="Barkod okutarak listeye eklendi.">B</div>';
    }

    this.eGui = gd_div;
    this.eGui.innerHTML = '<div class="d-flex">' + htmlcode + '</div>'
};
list_siparis.prototype.getGui = function () {
    return this.eGui;
}
list_siparis.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
list_siparis.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

function list_ozellik() { }
list_ozellik.prototype.init = function (params) {
    var htmlcode = "";
    var gd_div = document.createElement('div');
    gd_div.style.cssText = "width: 100%; display: block;";
    if (params.value === "0") {
        htmlcode = "<button type='button' class='btn btn-xs btn-block btn-light rounded pd-x-8 pd-y-4'>Normal</button>";
    } else if (params.value === "1") {
        htmlcode = "<button type='button' class='btn btn-xs btn-block btn-warning rounded pd-x-8 pd-y-4'>Seri No</button>";
    } else if (params.value === "2") {
        htmlcode = "<button type='button' class='btn btn-xs btn-block btn-info rounded pd-x-8 pd-y-4'>Lot</button>";
    }
    this.eGui = gd_div;
    this.eGui.innerHTML = '<div class="d-flex">' + htmlcode + '</div>'
};
list_ozellik.prototype.getGui = function () {
    return this.eGui;
}
list_ozellik.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
list_ozellik.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

function list_menu() { }
list_menu.prototype.init = function (params) {
    var htmlcode = "";
    var gd_div = document.createElement('div');
    gd_div.style.cssText = "width: 100%; display: block;";

    if (params.value === "1") {
        htmlcode = '<button type="button" class="btn btn-xs btn-outline-primary pd-x-8 pd-y-4" data-toggle="modal" href="#modal_listitem_edit1"><i class="far fa-pen mg-r-6"></i>Düzenle</button>';
    } else if (params.value === "2") {
        htmlcode = '<button type="button" class="btn btn-xs btn-outline-primary pd-x-8 pd-y-4" data-toggle="modal" href="#modal_listitem_edit2"><i class="far fa-pen mg-r-6"></i>Düzenle</button>';
    } else if (params.value === "3") {
        htmlcode = '<button type="button" class="btn btn-xs btn-outline-primary pd-x-8 pd-y-4" data-toggle="modal" href="#modal_listitem_edit3"><i class="far fa-pen mg-r-6"></i>Düzenle</button>';
    }

    this.eGui = gd_div;
    this.eGui.innerHTML = '<div class="d-inline-flex">' + htmlcode + '</div>'
};
list_menu.prototype.getGui = function () {
    return this.eGui;
}
list_menu.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
list_menu.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

document.addEventListener('DOMContentLoaded', function () {
    agGrid.LicenseManager.setLicenseKey("For_Trialing_ag-Grid_Only-Not_For_Real_Development_Or_Production_Projects-Valid_Until-1_May_2021_[v2]_MTYxOTgyMzYwMDAwMA==a717ffda041154ad580159495341d1fd");
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
    gridOptions.api.setRowData(rowData);
});