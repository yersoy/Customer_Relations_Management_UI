var rowData = [
    {
        CariTur: '1',
        CariAdi: 'Daf Yönetim Sistemleri Ve Enerji A.Ş.',
        CariDurum: 'Alacak',
        CariOVade: '30',
        OrtVade: '62',
        SonOdemeGun: '1',
        OdemeKalitesi: 'Sorunlu',
        BorcLimiti: '80',
        GecikmeTutar: '-4200',
        BakiyeTutar: '8500',
        Islemler: 'menu',
    },
    {
        CariTur: '1',
        CariAdi: '{New}Burak Altun',
        CariDurum: 'Alacak',
        CariOVade: '30',
        OrtVade: '30',
        SonOdemeGun: '30',
        OdemeKalitesi: 'Normal',
        BorcLimiti: '28',
        GecikmeTutar: '-0',
        BakiyeTutar: '8500',
        Islemler: 'menu',
    }, {
        CariTur: '2',
        CariAdi: 'Microsoft A.Ş.',
        CariDurum: 'Alacak',
        CariOVade: '30',
        OrtVade: '30',
        SonOdemeGun: '22',
        OdemeKalitesi: 'Dikkat',
        BorcLimiti: '40',
        GecikmeTutar: '-0',
        BakiyeTutar: '8500',
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
        { headerName: '', field: '', maxWidth: 70, filter: false },
        {
            headerName: 'Tip',
            field: 'CariTur',
            maxWidth: 75,
            cellRenderer: 'liste_caritur',
        },
        {
            headerName: 'Cari Adı',
            field: 'CariAdi',
            minWidth: 400,
            flex: 1,
            cellRenderer: 'liste_cariozellikler',
        },
        {
            headerName: 'Durum',
            field: 'CariDurum',
            cellRenderer: 'liste_durum',
        },
        {
            headerName: 'Ödeme Vadesi',
            field: 'CariOVade',
            type: 'numberColumn, rightAligned',
            valueFormatter: dayFormatter,
        },
        {
            headerName: 'Ort. Vade',
            field: 'OrtVade',
            type: 'numberColumn, rightAligned',
            valueFormatter: dayFormatter,
        },
        {
            headerName: 'Son Ödeme',
            field: 'SonOdemeGun',
            type: 'numberColumn, rightAligned',
            valueFormatter: dayFormatter,
            cellStyle: { color: 'black' }
        },
        {
            headerName: 'Ödeme Kalitesi',
            field: 'OdemeKalitesi',
            width: 150,
            cellRenderer: 'liste_odemekalitesi',
        },
        {
            headerName: 'Borç Limiti',
            field: 'BorcLimiti',
            type: 'numberColumn',
            width: 150,
            cellRenderer: 'liste_borclimit',
        },
        {
            headerName: 'Gecikmiş Borç',
            field: 'GecikmeTutar',
            width: 150,
            type: 'numberColumn, rightAligned',
            valueFormatter: currencyFormatter,
            cellRenderer: 'liste_gecikmisborc',
            initialPinned: 'right',
        },
        {
            headerName: 'Bakiye',
            field: 'BakiyeTutar',
            width: 150,
            type: 'numberColumn, rightAligned',
            valueFormatter: currencyFormatter,
            cellStyle: { color: '#10b759', 'fontWeight': 'bold' },
            initialPinned: 'right',
        },
        {
            headerName: 'İşlemler',
            field: 'Islemler',
            width: 158,
            cellRenderer: 'liste_islemmenu',
            initialPinned: 'right',
            filter: false,
            type: 'rightAligned',
        },
    ],
    // default ColDef, gets applied to every column
    defaultColDef: {
        // set the default column width
        width: 140,
        // make every column editable
        editable: false,
        // make every column use 'text' filter by default
        filter: 'agTextColumnFilter',
        // enable floating filters by default
        floatingFilter: true,
        // make columns resizable
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
        liste_caritur: liste_caritur,
        liste_cariozellikler: liste_cariozellikler,
        liste_durum: liste_durum,
        liste_odemekalitesi: liste_odemekalitesi,
        liste_borclimit: liste_borclimit,
        liste_gecikmisborc: liste_gecikmisborc,
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

//brk

function liste_durum() { }
liste_durum.prototype.init = function (params) {
    this.eGui = document.createElement('div');
    var gender = "";
    if (params.value === "Alacak") {
        gender = '<span class="pos-absolute wd-10 ht-10 rounded-circle t-10 r-10" style="background-color: #10b759;"></span>';
        this.eGui.innerHTML = params.value + ' ' + gender;
    }
    else { this.eGui.innerHTML = params.value; }
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

//rdu

function liste_cariozellikler() { }
liste_cariozellikler.prototype.init = function (params) {
    this.eGui = document.createElement('div');
    var newvalue1 = params.value;
    var newvalue2 = "";
    var liste_cariozellikler = "";

    if (newvalue1.indexOf('{New}') === 0) {
        liste_cariozellikler = liste_cariozellikler + '<span class="badge badge-light">Yeni</span>';
    }

    newvalue2 = newvalue1.replace('{New}', '');
    this.eGui.innerHTML = '<div class="mg-y-10 lh-1">' +
        '<div class="d-block tx-medium">' + newvalue2 + '</div>' +
        '<div class="d-block mg-t-6">' + liste_cariozellikler + '</div>' +
        '</div>';

};
liste_cariozellikler.prototype.getGui = function () {
    return this.eGui;
}
liste_cariozellikler.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_cariozellikler.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

function liste_caritur() { }
liste_caritur.prototype.init = function (params) {
    this.eGui = document.createElement('div');
    if (params.value === "1") {
        this.eGui.innerHTML = '<div class="avatar avatar-xs"><span class="avatar-initial rounded bg-success bg-gray-700">M</span></div>';
    } else if (params.value === "2") {
        this.eGui.innerHTML = '<div class="avatar avatar-xs"><span class="avatar-initial rounded bg-gray-700">T</span></div>';
    } else {
        this.eGui.innerHTML = params.value;
    }
};
liste_caritur.prototype.getGui = function () {
    return this.eGui;
}
liste_caritur.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_caritur.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

function liste_borclimit() { }
liste_borclimit.prototype.init = function (params) {
    var newvalue = ""
    this.eGui = document.createElement('div');
    if ((params.value >= 0) && (params.value <= 30)) {
        newvalue = '<div class="progress wd-100 ht-20 bd bd-gray-300"><div class="progress-bar bg-success" style="width:' + params.value + '%" role="progressbar">%' + params.value + '</div></div>';
    } else if ((params.value > 30) && (params.value <= 50)) {
        newvalue = '<div class="progress wd-100 ht-20 bd bd-gray-300"><div class="progress-bar bg-warning" style="width:' + params.value + '%" role="progressbar">%' + params.value + '</div></div>';
    } else if (params.value > 50) {
        newvalue = '<div class="progress wd-100 ht-20 bd bd-gray-300"><div class="progress-bar bg-danger" style="width:' + params.value + '%" role="progressbar">%' + params.value + '</div></div>';
    } else {
        newvalue = params.value;
    }

    this.eGui.innerHTML = newvalue;
};
liste_borclimit.prototype.getGui = function () {
    return this.eGui;
}
liste_borclimit.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_borclimit.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

function liste_gecikmisborc() { }
liste_gecikmisborc.prototype.init = function (params) {
    this.eGui = document.createElement('div');
    if (params.value < 0) {
        this.eGui.innerHTML = '<span class="tx-semibold tx-danger">₺ ' + formatNumber(params.value) + '</span>';
    } else {
        this.eGui.innerHTML = '<span class="tx-color-04">₺ ' + formatNumber(params.value) + '</span>';
    }
};
liste_gecikmisborc.prototype.getGui = function () {
    return this.eGui;
}
liste_gecikmisborc.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_gecikmisborc.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

function liste_odemekalitesi() { }
liste_odemekalitesi.prototype.init = function (params) {
    this.eGui = document.createElement('div');
    if (params.value === "Normal") {
        this.eGui.innerHTML = '<span class="d-flex align-items-center tx-bold tx-success"><i class="far fa-grin-beam tx-normal mg-r-6"></i>Normal</span>';
    } else if (params.value === "Sorunlu") {
        this.eGui.innerHTML = '<span class="d-flex align-items-center tx-bold tx-danger"><i class="far fa-frown-open tx-normal mg-r-6"></i>Sorunlu</span>';
    } else if (params.value === "Dikkat") {
        this.eGui.innerHTML = '<span class="d-flex align-items-center tx-bold tx-warning"><i class="far fa-meh tx-normal mg-r-6"></i>Dikkat</span>';
    } else {
        this.eGui.innerHTML = params.value;
    }
};
liste_odemekalitesi.prototype.getGui = function () {
    return this.eGui;
}
liste_odemekalitesi.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_odemekalitesi.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

function liste_islemmenu() { }
liste_islemmenu.prototype.init = function (params) {
    this.eGui = document.createElement('div');
    var liste_islemmenu_html = '' +
    '<div class="d-inline-flex">' +
    '   <button type="button" data-toggle="modal" href="#modal_ozet" class="btn btn-sm btn-secondary pd-x-8 pd-y-4 mg-r-6"><i class="fal fa-info-circle tx-16 mg-r-6"></i>Özet</button>' +
    '   <button type="button" class="btn btn-sm btn-primary   pd-x-8 pd-y-4" data-tooltip title="Yeni"><i class="fal fa-plus tx-16"></i></button>' +
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


