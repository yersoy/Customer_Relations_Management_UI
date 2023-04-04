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
        Ozellik: '1',
        Islemler: 'list_menu',
    },
    {
        Kod: 'TÖF-99',
        Adi: 'Traktör Ön Farı',
        Depo: "Kocaeli",
        Miktar: 1,
        Fiyat: 950,
        KDV: "Dahil",
        ToplamFiyat: 950,
        Ozellik: '2',
        Islemler: 'list_menu',
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
            headerName: "Depo",
            field: "Depo",
            editable: false,
            filter: false,
            maxWidth: 152,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: 'Miktar',
            field: 'Miktar',
            width: 90,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: 'Fiyat',
            field: 'Fiyat',
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
            headerName: 'Özellik',
            field: 'Ozellik',
            width: 90,
            cellRenderer: 'list_tur',
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
        list_tur: list_tur,
        list_menu: list_menu,
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

function list_tur() { }
list_tur.prototype.init = function (params) {
    var htmlcode = "";
    var gd_div = document.createElement('div');
        gd_div.style.cssText = "width: 100%; display: block;";
    if (params.value === "0") {
        htmlcode = "<button type='button' class='btn btn-sm btn-block btn-light rounded pd-x-8 pd-y-4'>Normal</button>";
    } else if (params.value === "1") {
        htmlcode = "<button type='button' class='btn btn-sm btn-block btn-warning rounded pd-x-8 pd-y-4'>Seri No</button>";
    } else if (params.value === "2") {
        htmlcode = "<button type='button' class='btn btn-sm btn-block btn-info rounded pd-x-8 pd-y-4'>Lot</button>";
    }
    this.eGui = gd_div;
    this.eGui.innerHTML = '<div class="d-flex">' + htmlcode + '</div>'
};
list_tur.prototype.getGui = function () {
    return this.eGui;
}
list_tur.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
list_tur.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

function list_menu() { }
list_menu.prototype.init = function (params) {
    var gd_div = document.createElement('div');
        gd_div.style.cssText = "width: 100%; display: block;";
    this.eGui = gd_div;        
    this.eGui.innerHTML = '<div class="d-inline-flex"><button type="button" class="btn btn-sm btn-primary pd-x-8 pd-y-4" data-toggle="modal" href="#modal_addbarcode"><i class="far fa-pen mg-r-6"></i>Düzenle</button></div>'
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