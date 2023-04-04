var rowData = [
    {
        ServisNo: "SE011617",
        SasiNo: "668715336",
        Bildirim: "05.06.2021",
        ArizaTuru: 1,
        ServisTuru: 1,
        CariAdi: 'Ali Osman Yıldırım',
        bayii: 1,
        Fatura: "Bekliyor",
        ServisDurumu: "Parça Bekleniyor",
        Tutar: "1950",
        Islemler: 'menu',
    },
    {
        ServisNo: "SE011616",
        SasiNo: "589926045",
        Bildirim: "01.06.2021",
        ArizaTuru: 2,
        ServisTuru: 2,
        CariAdi: 'Mehmet Yılmaz',
        bayii: 2,
        Fatura: "Bekliyor",
        ServisDurumu: "Servis Tamamlandı",
        Tutar: "763",
        Islemler: 'menu',
    },
];

var gridOptions = {
    statusBar: {
        statusPanels: [
            { statusPanel: 'agTotalAndFilteredRowCountComponent', key: 'totalAndFilter', align: 'left' },
            { statusPanel: 'agSelectedRowCountComponent', align: 'left' },
            { statusPanel: 'agAggregationComponent', align: 'right' }

        ],
        statusPanelParams: {
            aggFuncs: ['sum'],
        },
    },
    columnDefs: [
        {
            headerName: '',
            field: '',
            maxWidth: 67,
            filter: false,
            initialPinned: 'left',
        },
        {
            headerName: 'İş Emri No',
            field: 'ServisNo',
        },
        {
            headerName: 'Şasi No',
            field: 'SasiNo',
        },
        {
            headerName: 'Bildirim',
            field: 'Bildirim',
            type: ['dateColumn', 'nonEditableColumn'],
        },
        {
            headerName: 'Arıza Türü',
            field: 'ArizaTuru',
            width: 250,
            cellRenderer: 'liste_arizatur',
        },
        {
            headerName: 'İş Emri Türü',
            field: 'ServisTuru',
            width: 250,
            cellRenderer: 'liste_tur',
        },
        {
            headerName: 'Müşteri Adı',
            field: 'CariAdi',
            minWidth: 400,
            flex: 1,
            cellRenderer: 'liste_servislink',
        },
        {
            headerName: 'Bayii',
            field: 'bayii',
            width: 300,
            cellRenderer: 'liste_bayii',
        },
        {
            headerName: 'Fatura',
            field: 'Fatura',
            width: 200,
            cellRenderer: 'liste_fatura',
        },
        {
            headerName: 'Durum',
            field: 'ServisDurumu',
            width: 200,
            cellRenderer: 'liste_durum',
            initialPinned: 'right',
        },
        {
            headerName: 'Tutar',
            field: 'Tutar',
            type: 'numberColumn, rightAligned',
            initialPinned: 'right',
            valueFormatter: currencyFormatter,
            cellStyle: { color: 'black', 'fontWeight': 'bold' },
        },
        {
            headerName: 'İşlemler',
            field: 'Islemler',
            width: 125,
            cellRenderer: 'liste_islemmenu',
            initialPinned: 'right',
            filter: false,
            type: 'rightAligned',
        },
    ],    
    defaultColDef: {
        width: 140,
        editable: false,
        filter: 'agTextColumnFilter',
        floatingFilter: true,
        resizable: true,
        autoHeight: true,
        suppressSizeToFit: true,
        headerCheckboxSelection: isFirstColumn,
        checkboxSelection: isFirstColumn,
    },
    suppressRowClickSelection: true,
    rowSelection: 'multiple',
    onSelectionChanged: onSelectionChanged,
    rowDragManaged: true,
    animateRows: true,
    debug: true,
    pagination: true,
    paginationPageSize: 25,
    suppressAggFuncInHeader: true,
    paginationNumberFormatter: function (params) {
        return '[' + params.value.toLocaleString() + ']';
    },
    components: {
        customLoadingCellRenderer: CustomLoadingCellRenderer,
        liste_servislink: liste_servislink,
        liste_tur: liste_tur,
        liste_arizatur: liste_arizatur,
        liste_bayii: liste_bayii,
        liste_durum: liste_durum,
        liste_fatura: liste_fatura,
        liste_islemmenu: liste_islemmenu,
    },
    loadingCellRenderer: 'customLoadingCellRenderer',
    loadingCellRendererParams: {
        loadingMessage: 'One moment please...',
    },
    defaultColGroupDef: {
        marryChildren: true,
    },
    columnTypes: {
        numberColumn: { width: 130, filter: 'agNumberColumnFilter' },
        nonEditableColumn: { editable: false },
        dateColumn: {
            // specify we want to use the date filter
            filter: 'agDateColumnFilter',
            // add extra parameters for the date filter
            filterParams: {
                // provide comparator function
                comparator: function (filterLocalDateAtMidnight, cellValue) {
                    // In the example application, dates are stored as dd/mm/yyyy
                    // We create a Date object for comparison against the filter date
                    var dateParts = cellValue.split('.');
                    var day = Number(dateParts[0]);
                    var month = Number(dateParts[1]) - 1;
                    var year = Number(dateParts[2]);
                    var cellDate = new Date(year, month, day);
                    // Now that both parameters are Date objects, we can compare
                    if (cellDate < filterLocalDateAtMidnight) {
                        return -1;
                    } else if (cellDate > filterLocalDateAtMidnight) {
                        return 1;
                    } else {
                        return 0;
                    }
                },
            },
        },
    },
    rowData: null,
};

//rdu


function liste_servislink() { }
liste_servislink.prototype.init = function (params) {
    this.eGui = document.createElement('div');
    this.eGui.innerHTML = '<a href="servisler-yeni.html" class="tx-dark tx-semibold">' + params.value + '</a>';
};
liste_servislink.prototype.getGui = function () {
    return this.eGui;
}
liste_servislink.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_servislink.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

function liste_tur() { }
liste_tur.prototype.init = function (params) {
    this.eGui = document.createElement('div');
    if (params.value === 1) {
        this.eGui.innerHTML = 'Satış Öncesi Teknik Bakım';
    } else if (params.value === 2) {
        this.eGui.innerHTML = 'Garantili Bakım';
    } else {
        this.eGui.innerHTML = params.value;
    }
};
liste_tur.prototype.getGui = function () {
    return this.eGui;
}
liste_tur.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_tur.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

function liste_arizatur() { }
liste_arizatur.prototype.init = function (params) {
    this.eGui = document.createElement('div');
    if (params.value === 1) {
        this.eGui.innerHTML = 'Bakım';
    } else if (params.value === 2) {
        this.eGui.innerHTML = 'Besleme Sistemi';
    } else {
        this.eGui.innerHTML = params.value;
    }
};
liste_arizatur.prototype.getGui = function () {
    return this.eGui;
}
liste_arizatur.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_arizatur.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

function liste_bayii() { }
liste_bayii.prototype.init = function (params) {
    this.eGui = document.createElement('div');
    var bayii = "";
    if (params.value === 1) {
        bayii = '<div class="media align-items-center mg-y-10">' +
               '    <div class="avatar avatar-sm mg-r-10"><span class="avatar-initial rounded tx-12-f lh-0" style="background-color: deeppink;">BA</span></div>' +
               '    <div>' +
               '        <h6 class="tx-14 tx-inverse tx-semibold mg-b-2">Kadıoğlu Tarım Ltd.</h6>'+
               '        <span class="d-block tx-12 text-muted lh-normal">Battalgazi / Malatya</span>' +
               '    </div>' +
               '</div>';
    } else if (params.value === 2) {
        bayii = '<div class="media align-items-center mg-y-10">' +
            '    <div class="avatar avatar-sm mg-r-10"><span class="avatar-initial rounded tx-12-f lh-0" style="background-color: deeppink;">BA</span></div>' +
            '    <div>' +
            '        <h6 class="tx-14 tx-inverse tx-semibold mg-b-2">Erkunt Traktör A.Ş.</h6>' +
            '        <span class="d-block tx-12 text-muted lh-normal">Etimesgut / Ankara</span>' +
            '    </div>' +
            '</div>';
    } else if (params.value === 3) {
        bayii = 'x';
    } else {
        bayii = 'Tanımsız';
    }
    this.eGui.innerHTML = bayii;
};
liste_bayii.prototype.getGui = function () {
    return this.eGui;
}
liste_bayii.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_bayii.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

function liste_durum() { }
liste_durum.prototype.init = function (params) {
    this.eGui = document.createElement('div');
    var colourcircle = "";
    if (params.value === "Parça Bekleniyor") {
        colourcircle = '<span class="pos-absolute wd-10 ht-10 rounded-circle t-10 r-10" style="background-color: #ffc107;"></span>';
    } else if (params.value === "Servis Tamamlandı") {
        colourcircle = '<span class="pos-absolute wd-10 ht-10 rounded-circle t-10 r-10" style="background-color: limegreen;"></span>';
    } else if (params.value === "Revize") {
        colourcircle = '<span class="pos-absolute wd-10 ht-10 rounded-circle t-10 r-10" style="background-color: goldenrod;"></span>';
    } else {
        colourcircle = 'Tanımsız';
    }
    this.eGui.innerHTML = params.value + ' ' + colourcircle;
};
liste_durum.prototype.getGui = function () {
    return this.eGui;
}
liste_durum.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_durum.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

function liste_fatura() { }
liste_fatura.prototype.init = function (params) {
    this.eGui = document.createElement('div');
    var colourcircle = "";
    if (params.value === "Bekliyor") {
        colourcircle = '<span class="pos-absolute wd-10 ht-10 rounded-circle t-10 r-10" style="background-color: grey;"></span>';
    } else {
        colourcircle = 'Tanımsız';
    }
    this.eGui.innerHTML = params.value + ' ' + colourcircle;
};
liste_fatura.prototype.getGui = function () {
    return this.eGui;
}
liste_fatura.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_fatura.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

function liste_islemmenu() { }
liste_islemmenu.prototype.init = function (params) {
    this.eGui = document.createElement('div');
    var liste_islemmenu_html = '' +
        '<div class="d-inline-flex">' +
        '   <a href="servisler-yeni.html" class="btn btn-sm btn-primary pd-x-8 pd-y-4"><i class="fal fa-info-circle tx-16 mg-r-6"></i>Detay</button>' +
        '</div>';
    this.eGui.innerHTML = liste_islemmenu_html
};
liste_islemmenu.prototype.getGui = function () {
    return this.eGui;
}
liste_islemmenu.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_islemmenu.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

function onSelectionChanged() {
    var selectedRows = gridOptions.api.getSelectedRows();
    if (selectedRows.length) {
        selectedRows.forEach(function (selectedRow, index) {
            $("#ValRecords").css("display", "flex");
            $("#ValRecords").html("<strong>" + selectedRows.length + "</strong>" + "&nbsp;adet seçili");
            $("#btnBulkActions").css("display", "block");
            $("#btnCancel").css("display", "block");
            $("#btnNew").css("display", "none");
            $("#btnExports").css("display", "none");
        });
    }
    else {
        $("#ValRecords").css("display", "none");
        $("#btnBulkActions").css("display", "none");
        $("#btnCancel").css("display", "none");
        $("#btnNew").css("display", "block");
        $("#btnExports").css("display", "block");
    }
}
function OnCancel() {
    gridOptions.api.deselectAll();
    $("#ValRecords").css("display", "none");
    $("#btnBulkActions").css("display", "none");
    $("#btnCancel").css("display", "none");
    $("#btnNew").css("display", "block");
    $("#btnExports").css("display", "block");
}

//Kolon ayarları son

function rowGroupCallback(params) {
    return params.node.key;
}
function getIndentClass(params) {
    var indent = 0;
    var node = params.node;
    while (node && node.parent) {
        indent++;
        node = node.parent;
    }
    return ['indent-' + indent];
}
function onBtnExportDataAsExcel() {
    gridOptions.api.exportDataAsExcel({
        processRowGroupCallback: rowGroupCallback,
    });
}
function onRemoveSelected() {
    var selectedData = gridOptions.api.getSelectedRows();
    var res = gridOptions.api.applyTransaction({ remove: selectedData });
    printResult(res);
}
function printResult(res) {
    console.log('---------------------------------------');

    if (res.remove) {
        res.remove.forEach(function (rowNode) {
            console.log('Removed Row Node', rowNode);
        });
    }

}
function onFirstDataRendered(event) { //dip toplam
    event.api.addCellRange({
        columns: ['TutarTL', 'Tutar'],
    });
}
function formatNumber(number) {
    return parseFloat(number).toFixed(0)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
function currencyFormatter(params) {
    return "₺ " + formatNumber(params.value);
}
function dayFormatter(params) {
    return params.value + ' Gün';
}
function onBtStopEditing() {
    gridOptions.api.stopEditing();
}
function isFirstColumn(params) {
    var displayedColumns = params.columnApi.getAllDisplayedColumns();
    var thisIsFirstColumn = displayedColumns[0] === params.column;
    return thisIsFirstColumn;
}
function onPageSizeChanged(newPageSize) {
    var value = document.getElementById('page-size').value;
    gridOptions.api.paginationSetPageSize(Number(value));
}
function sizeToFit() {
    gridOptions.api.sizeColumnsToFit();
}

// setup the grid after the page has finished loading

document.addEventListener('DOMContentLoaded', function () {
    agGrid.LicenseManager.setLicenseKey("For_Trialing_ag-Grid_Only-Not_For_Real_Development_Or_Production_Projects-Valid_Until-1_May_2021_[v2]_MTYxOTgyMzYwMDAwMA==a717ffda041154ad580159495341d1fd");
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
    gridOptions.api.setRowData(rowData);
    gridOptions.api.paginationGoToPage(4);
});