// DATA

var rowData = [
    {
        Kod: 'ZY-L-001',
        Adi: 'Traktör Lastiği',
        AlisFiyati: 2000,
        SatisFiyati: 2000,
        Islemler: '2',
    },
    {
        Kod: 'TÖF-99',
        Adi: 'Traktör Ön Farı',
        AlisFiyati: 2000,
        SatisFiyati: 2000,
        Islemler: '3',
    },
    {
        Kod: 'RÖMK-99',
        Adi: 'Römork',
        AlisFiyati: 2000,
        SatisFiyati: 2000,
        Islemler: '1',
    },
    {
        Kod: 'SİL-0174',
        Adi: 'Traktör Sileceği',
        AlisFiyati: 2000,
        SatisFiyati: 2000,
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
            headerName: 'Alış Fiyat',
            field: 'AlisFiyati',
            maxWidth: 150,
            type: 'numberColumn, rightAligned',
            valueFormatter: formatCurrency1,
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: 'Satış Fiyatı',
            field: 'SatisFiyati',
            maxWidth: 150,
            type: 'numberColumn, rightAligned',
            valueFormatter: formatCurrency1, 
            cellStyle: { 'border-right': '1px solid #e2e2e2' }
        },
        {
            headerName: '',
            field: 'Islemler',
            width: 60,
            cellRenderer: 'list_menu',
            initialPinned: 'right',
            editable: false,
            filter: false,
            type: 'rightAligned',
        },
    ],
    defaultColDef: {
        editable: true,
        sortable: false,
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
            $("#grid_noselected").addClass("d-none");
            $("#grid_bulkactions_count").html("<strong>" + selectedRows.length + "</strong>" + "&nbsp;adet seçili");
            $("#grid_bulkactions_count").removeClass("d-none");
            $("#grid_bulkactions_cancel").removeClass("d-none");
        });
    }
    else {
        $("#grid_noselected").removeClass("d-none");
        $("#grid_bulkactions_count").addClass("d-none");
        $("#grid_bulkactions_cancel").addClass("d-none");
    }
}

$("#grid_bulkactions_cancel").on("click", function () {
    gridOptions.api.deselectAll();
    $("#grid_noselected").removeClass("d-none");
    $("#grid_bulkactions_count").addClass("d-none");
    $("#grid_bulkactions_cancel").addClass("d-none");
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

// GRID STARTING

function list_menu() { }
list_menu.prototype.init = function (params) {
    var htmlcode = "";
    var gd_div = document.createElement('div');
    gd_div.style.cssText = "width: 100%; display: block;";

    htmlcode = '<button type="button" class="btn btn-sm btn-outline-secondary pd-x-8 pd-y-4" data-toggle="modal" href="#modal_deletecheck"><i class="far fa-trash-alt"></i></button>';

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