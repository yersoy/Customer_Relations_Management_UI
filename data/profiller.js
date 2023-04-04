var rowData = [{
        CariTur: '1',
        CariAdi: 'Mehmet Özdemir',
        CariKonumIl: 'Tekirdağ',
        CariKonumIlce: 'Çorlu',
        CariTelefon: '0 (282) 000-00-00',
        Ilgili: 'Mehmet Özdemir',
        CariOzelllikler: '{MA}',
        CariBaglantilar: '{W}{L}',
        Islemler: 'menu',
    },
    {
        CariTur: '2',
        CariAdi: 'Ali Osman Yıldırım',
        CariKonumIl: 'Adana',
        CariKonumIlce: 'Çukurova',
        CariTelefon: '0 (322) 000-00-00',
        Ilgili: 'Ali Osman Yıldırım',
        CariOzelllikler: '{MU}',
        CariBaglantilar: '{W}{M}',
        Islemler: 'menu',
    },
    {
        CariTur: '4',
        CariAdi: 'Erkunt Traktör A.Ş.',
        CariKonumIl: 'İstanbul',
        CariKonumIlce: 'Polenezköy',
        CariTelefon: '0 (212) 000-00-00',
        Ilgili: 'Seda Ülger',
        CariOzelllikler: '{TE}',
        CariBaglantilar: '{M}{L}',
        Islemler: 'menu',
    },
    {
        CariTur: '5',
        CariAdi: 'Agri Tarım Makineleri Ltd. Şti.',
        CariKonumIl: 'Ankara',
        CariKonumIlce: 'Etimesgut',
        CariTelefon: '0 (262) 000-00-00',
        Ilgili: 'Recep Cihangir',
        CariOzelllikler: '{BM}{Buyukluk}',
        CariBaglantilar: '{M}{L}',
        Islemler: 'menu',
    },
    {
        CariTur: '6',
        CariAdi: 'Abdurrahman Kadıoğlu',
        CariKonumIl: 'Malatya',
        CariKonumIlce: 'Battalgazi',
        CariTelefon: '0 (422) 000-00-00',
        Ilgili: 'Abdurrahman Kadıoğlu',
        CariOzelllikler: '{BA}{Ankara}{Buyukluk}',
        CariBaglantilar: '{M}{L}',
        Islemler: 'menu',
    },
    {
        CariTur: '7',
        CariAdi: 'Ertuğrullar Tarım Makinaları A.Ş.',
        CariKonumIl: 'Antalya',
        CariKonumIlce: 'Alanya',
        CariTelefon: '0 (242) 000-00-00',
        Ilgili: 'Yavuz Alageyik',
        CariOzelllikler: '{RA}{Buyukluk}',
        CariBaglantilar: '{M}{L}',
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
    columnDefs: [{
            headerName: '',
            field: '',
            maxWidth: 70,
            filter: false,
            initialPinned: 'left',
        },
        {
            headerName: 'Tip',
            field: 'CariTur',
            maxWidth: 75,
            cellRenderer: 'liste_caritur',
        },
        {
            headerName: 'Firma/Şahıs Adı',
            field: 'CariAdi',
            minWidth: 400,
            flex: 1,
            cellRenderer: 'liste_carilink',
        },
        {
            headerName: 'Şehir',
            field: 'CariKonumIl',
        },
        {
            headerName: 'İlçe',
            field: 'CariKonumIlce',
        },
        {
            headerName: 'Telefon',
            field: 'CariTelefon',
            width: 180,
        },
        {
            headerName: 'İlgili Kişi',
            field: 'Ilgili',
            width: 250,
        },
        {
            headerName: 'Özellikler',
            field: 'CariOzelllikler',
            minWidth: 400,
            cellRenderer: 'liste_cariozellikler',
        },
        {
            headerName: 'Bağlantı',
            field: 'CariBaglantilar',
            width: 165,
            initialPinned: 'right',
            filter: false,
            type: 'rightAligned',
            cellRenderer: 'liste_caribaglantilar',
        },
        {
            headerName: '',
            field: 'Islemler',
            width: 130,
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
    paginationNumberFormatter: function(params) {
        return '[' + params.value.toLocaleString() + ']';
    },
    components: {
        customLoadingCellRenderer: CustomLoadingCellRenderer,
        liste_caritur: liste_caritur,
        liste_carilink: liste_carilink,
        liste_cariozellikler: liste_cariozellikler,
        liste_caribaglantilar: liste_caribaglantilar,
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
                comparator: function(filterLocalDateAtMidnight, cellValue) {
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

function liste_caritur() {}
liste_caritur.prototype.init = function(params) {
    this.eGui = document.createElement('div');
    if (params.value === "1") {
        this.eGui.innerHTML = '<div class="avatar avatar-xs"><span class="avatar-initial rounded bg-gray-700" style="background-color: lightgreen;">MA</span></div>';
    } else if (params.value === "2") {
        this.eGui.innerHTML = '<div class="avatar avatar-xs"><span class="avatar-initial rounded bg-gray-700" style="background-color: forestgreen;">MT</span></div>';
    } else if (params.value === "3") {
        this.eGui.innerHTML = '<div class="avatar avatar-xs"><span class="avatar-initial rounded bg-gray-700" style="background-color: lightgrey;">TA</span></div>';
    } else if (params.value === "4") {
        this.eGui.innerHTML = '<div class="avatar avatar-xs"><span class="avatar-initial rounded bg-gray-700" style="background-color: grey;">TD</span></div>';
    } else if (params.value === "5") {
        this.eGui.innerHTML = '<div class="avatar avatar-xs"><span class="avatar-initial rounded bg-gray-700" style="background-color: darkviolet;">BM</span></div>';
    } else if (params.value === "6") {
        this.eGui.innerHTML = '<div class="avatar avatar-xs"><span class="avatar-initial rounded bg-gray-700" style="background-color: deeppink;">BA</span></div>';
    } else if (params.value === "7") {
        this.eGui.innerHTML = '<div class="avatar avatar-xs"><span class="avatar-initial rounded bg-gray-700" style="background-color: #2196f3;">RA</span></div>';
    } else {
        this.eGui.innerHTML = params.value;
    }
};
liste_caritur.prototype.getGui = function() {
    return this.eGui;
}
liste_caritur.prototype.destroy = function() {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_caritur.prototype.btnClickedHandler = function(event) {
    this.params.clicked(this.params.value);
}

function liste_carilink() {}
liste_carilink.prototype.init = function(params) {
    this.eGui = document.createElement('div');
    this.eGui.innerHTML = '<a href="profiller-yeni.html" class="tx-dark tx-semibold">' + params.value + '</a>';
};
liste_carilink.prototype.getGui = function() {
    return this.eGui;
}
liste_carilink.prototype.destroy = function() {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_carilink.prototype.btnClickedHandler = function(event) {
    this.params.clicked(this.params.value);
}

function liste_cariozellikler() {}
liste_cariozellikler.prototype.init = function(params) {
    this.eGui = document.createElement('div');
    var newvalue1 = params.value;
    var newvalue2;
    var liste_cariozellikler = "";

    if (newvalue1.indexOf('{MA}') !== -1) { liste_cariozellikler += '<li class="list-inline-item mg-b-0-f"><a>Müşteri Adayı</a></li>'; }
    if (newvalue1.indexOf('{MU}') !== -1) { liste_cariozellikler += '<li class="list-inline-item mg-b-0-f"><a>Müşteri</a></li>'; }
    if (newvalue1.indexOf('{TA}') !== -1) { liste_cariozellikler += '<li class="list-inline-item mg-b-0-f"><a>Tedarikçi Adayı</a></li>'; }
    if (newvalue1.indexOf('{TE}') !== -1) { liste_cariozellikler += '<li class="list-inline-item mg-b-0-f"><a>Tedarikçi</a></li>'; }
    if (newvalue1.indexOf('{BM}') !== -1) { liste_cariozellikler += '<li class="list-inline-item mg-b-0-f"><a>Bölge Müdürlüğü</a></li>'; }
    if (newvalue1.indexOf('{BA}') !== -1) { liste_cariozellikler += '<li class="list-inline-item mg-b-0-f"><a>Bayii</a></li>'; }
    if (newvalue1.indexOf('{RA}') !== -1) { liste_cariozellikler += '<li class="list-inline-item mg-b-0-f"><a>Rakip</a></li>'; }

    if (newvalue1.indexOf('{Ankara}') !== -1) { liste_cariozellikler += '<li class="list-inline-item mg-b-0-f"><a>Ankara Bölge Müd.</a></li>'; }
    if (newvalue1.indexOf('{Adana}') !== -1) { liste_cariozellikler += '<li class="list-inline-item mg-b-0-f"><a>Adana Bölge Müd.</a></li>'; }

    if (newvalue1.indexOf('{Archive}') !== -1) { liste_cariozellikler += '<li class="list-inline-item mg-b-0-f"><a>Arşiv</a></li>'; }
    if (newvalue1.indexOf('{Sektor}') !== -1) { liste_cariozellikler += '<li class="list-inline-item mg-b-0-f"><a>Tarım Makinaleri</a></li>'; }
    if (newvalue1.indexOf('{Buyukluk}') !== -1) { liste_cariozellikler += '<li class="list-inline-item mg-b-0-f"><a>5-10 Çalışan</a></li>'; }

    newvalue2 = newvalue1.replace('{MA}', '').replace('{MU}', '').replace('{TA}', '').replace('{TE}', '').replace('{BM}', '').replace('{BA}', '').replace('{RA}', '').replace('{Archive}', '').replace('{Sektor}', '').replace('{Buyukluk}', '').replace('{Ankara}', '').replace('{Adana}', '');
    this.eGui.innerHTML = '<div class="mg-y-10 lh-1">' +
        '<div class="d-block tx-medium">' + newvalue2 + '</div>' +
        '<ul class="list-inline list-inline-skills mg-b-0 mg-t-10">' + liste_cariozellikler + '</div>' +
        '</div>';
};
liste_cariozellikler.prototype.getGui = function() {
    return this.eGui;
}
liste_cariozellikler.prototype.destroy = function() {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_cariozellikler.prototype.btnClickedHandler = function(event) {
    this.params.clicked(this.params.value);
}

function liste_caribaglantilar() {}
liste_caribaglantilar.prototype.init = function(params) {
    this.eGui = document.createElement('div');
    var fieldvalue = params.value;
    var iconlist = '';
    if (fieldvalue.indexOf('{W}') !== -1) {
        iconlist += '<button type="button" class="btn btn-sm btn-light pos-relative wd-35 pd-x-8 pd-y-4 mg-r-6" data-tooltip title="Web"><i class="far fa-globe tx-16"></i></button>';
    } else {
        iconlist += '<button type="button" class="btn btn-sm btn-light pos-relative bg-white wd-35 pd-x-8 pd-y-4 mg-r-6 op-4" data-tooltip title="Web"><i class="far fa-globe tx-16"></i><i class="far fa-slash tx-16 pos-absolute l-5 t-5 mg-l-2 mg-t-0-f"></i></button>';
    }
    if (fieldvalue.indexOf('{M}') !== -1) {
        iconlist += '<button type="button" class="btn btn-sm btn-light pos-relative wd-35 pd-x-8 pd-y-4 mg-r-6" data-tooltip title="E-mail"><i class="far fa-envelope tx-16"></i></button>';
    } else {
        iconlist += '<button type="button" class="btn btn-sm btn-light pos-relative bg-white wd-35 pd-x-8 pd-y-4 mg-r-6 op-4" data-tooltip title="E-mail"><i class="far fa-envelope tx-16"></i><i class="far fa-slash tx-16 pos-absolute l-5 t-5 mg-l-2 mg-t-0-f"></i></button>';
    }
    if (fieldvalue.indexOf('{L}') !== -1) {
        iconlist += '<button type="button" class="btn btn-sm btn-light pos-relative wd-35 pd-x-8 pd-y-4 mg-r-6" data-tooltip title="Harita Konumu"><i class="far fa-map-marker-alt tx-16"></i></button>';
    } else {
        iconlist += '<button type="button" class="btn btn-sm btn-light pos-relative bg-white wd-35 pd-x-8 pd-y-4 mg-r-6 op-4" data-tooltip title="Harita Konumu"><i class="far fa-map-marker-alt-slash tx-16"></i></button>';
    }
    this.eGui.innerHTML = '<div class="d-inline-flex">' + iconlist + '</div>';
};
liste_caribaglantilar.prototype.getGui = function() {
    return this.eGui;
}
liste_caribaglantilar.prototype.destroy = function() {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_caribaglantilar.prototype.btnClickedHandler = function(event) {
    this.params.clicked(this.params.value);
}

function liste_islemmenu() {}
liste_islemmenu.prototype.init = function(params) {
    this.eGui = document.createElement('div');
    this.eGui.className+="d-xl-inline-flex"
    var liste_islemmenu_html = 
       
        '   <a href="profiller-yeni.html" class="btn btn-sm btn-primary pd-x-8 pd-y-4 d-flex"><i class="fal fa-info-circle tx-16 mg-xl-r-6 mg-lg-0 mg-sm-0 mg-t-2-f  mg-md-0"></i><span class="d-xl-block d-lg-none d-md-none d-sm-none">Detay</span></button>';
      
    this.eGui.innerHTML = liste_islemmenu_html
};
liste_islemmenu.prototype.getGui = function() {
    return this.eGui;
}
liste_islemmenu.prototype.destroy = function() {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_islemmenu.prototype.btnClickedHandler = function(event) {
    this.params.clicked(this.params.value);
}

function onSelectionChanged() {
    var selectedRows = gridOptions.api.getSelectedRows();
    if (selectedRows.length) {
        selectedRows.forEach(function(selectedRow, index) {
            $("#ValRecords").css("display", "flex");
            $("#ValRecords").html("<strong>" + selectedRows.length + "</strong>" + "&nbsp;adet seçili");
            $("#btnBulkActions").css("display", "block");
            $("#btnCancel").css("display", "block");
            $("#btnNew").css("display", "none");
            $("#btnExports").css("display", "none");
        });
    } else {
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
        res.remove.forEach(function(rowNode) {
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

document.addEventListener('DOMContentLoaded', function() {
    agGrid.LicenseManager.setLicenseKey("For_Trialing_ag-Grid_Only-Not_For_Real_Development_Or_Production_Projects-Valid_Until-1_May_2021_[v2]_MTYxOTgyMzYwMDAwMA==a717ffda041154ad580159495341d1fd");
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
    gridOptions.api.setRowData(rowData);
    gridOptions.api.paginationGoToPage(4);

});