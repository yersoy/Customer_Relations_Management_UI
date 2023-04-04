var rowData = [{
        UrunResmi: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHvYsyO4-e5JXbGfY5kat9q3sW7Ee_dLkOlx7s_Lftylg1qqHrYkkt7w53oUron5CGaBd7TYe20Hnkfv6QnT1ieyoyvt2ukjXMziD6Q4bKfujXyd3cx1mh&usqp=CAE',
        UrunKodu: '#144',
        UrunAdi: 'Traktör Sinyal Kolu',
        UrunKategorisi: 'Yedekparça / İç Aksamlar',
        UrunAlisTL: "87",
        UrunSatisTL: "199",
        UrunStok: "3180",
        UrunSiparisGelecek: "18",
        UrunSiparisGidecek: "9",
        UrunRezerv: "5",
        //UrunSEO: "true",
        //UrunVitrin: "true",
        //UrunAciklama: "false",
        UrunAktif: "812",
        UrunServis: "14",
        UrunSiparis: "7",
        UrunFatura: "3",
        UrunDurum: 'Satışa Kapalı',
        Islemler: 'menu',
    },
    {
        UrunResmi: 'https://mcdn01.gittigidiyor.net/68309/tn50/683098639_tn50_0.jpg?1621687',
        UrunKodu: '#857',
        UrunAdi: 'Kontak Anahtarı',
        UrunKategorisi: 'Yedekparça / İç Aksamlar',
        UrunAlisTL: "48",
        UrunSatisTL: "125",
        UrunStok: "6558",
        UrunSiparisGelecek: "18",
        UrunSiparisGidecek: "9",
        UrunRezerv: "5",
        //UrunSEO: "true",
        //UrunVitrin: "true",
        //UrunAciklama: "false",
        UrunAktif: "657",
        UrunServis: "14",
        UrunSiparis: "7",
        UrunFatura: "3",
        UrunDurum: 'Kritik Stok',
        Islemler: 'menu',
    },
    {
        UrunResmi: 'https://mcdn01.gittigidiyor.net/64775/tn50/647759412_tn50_0.jpg?1621687',
        UrunKodu: '#310',
        UrunAdi: 'Hidrolik Orta Kol',
        UrunKategorisi: 'Yedekparça / Motor',
        UrunAlisTL: "509",
        UrunSatisTL: "615",
        UrunStok: "9001",
        UrunSiparisGelecek: "18",
        UrunSiparisGidecek: "9",
        UrunRezerv: "5",
        //UrunSEO: "true",
        //UrunVitrin: "true",
        //UrunAciklama: "false",
        UrunAktif: "147",
        UrunServis: "14",
        UrunSiparis: "7",
        UrunFatura: "3",
        UrunDurum: 'Stok Yok',
        Islemler: 'menu',
    },
    {
        UrunResmi: 'http://tr.godsendbattery-fr.com/uploads/201712731/nmc-battery-pack-for-electric-trackless42530235294.jpg',
        UrunKodu: '#514',
        UrunAdi: 'Ana Gövde Pil Aksamı',
        UrunKategorisi: 'Yedekparça / Motor',
        UrunAlisTL: "175",
        UrunSatisTL: "282",
        UrunStok: "328",
        UrunSiparisGelecek: "18",
        UrunSiparisGidecek: "9",
        UrunRezerv: "5",
        //UrunSEO: "true",
        //UrunVitrin: "true",
        //UrunAciklama: "false",
        UrunAktif: "33",
        UrunServis: "14",
        UrunSiparis: "7",
        UrunFatura: "3",
        UrunDurum: 'Kritik Stok',
        Islemler: 'menu',
    },
    {
        UrunResmi: 'https://www.mordagdesign.com/galeri/resimler/06ac9241f56c493281fe1f7655c53f76.jpg',
        UrunKodu: '#2',
        UrunAdi: 'ZY Traktör Model 1',
        UrunKategorisi: 'Traktörler / Elektrikli',
        UrunAlisTL: "18650",
        UrunSatisTL: "27500",
        UrunStok: "4519",
        UrunSiparisGelecek: "18",
        UrunSiparisGidecek: "9",
        UrunRezerv: "5",
        //UrunSEO: "true",
        //UrunVitrin: "true",
        //UrunAciklama: "false",
        UrunAktif: "12",
        UrunServis: "14",
        UrunSiparis: "7",
        UrunFatura: "1",
        UrunDurum: 'Normal',
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
            headerName: 'Fotoğraf',
            field: 'UrunResmi',
            filter: false,
            maxWidth: 100,
            cellRenderer: 'liste_urunresim',
        },
        {
            headerName: 'Kodu',
            field: 'UrunKodu',
        },
        {
            headerName: 'Ürün Adı',
            field: 'UrunAdi',
            minWidth: 400,
            flex: 1,
            cellRenderer: 'liste_urunlink',
        },
        {
            headerName: 'Kategori',
            field: 'UrunKategorisi',
            width: 'auto',
        },
        {
            headerName: 'Fiyat',
            children: [{
                    headerName: 'Alış',
                    field: 'UrunAlisTL',
                    type: 'numberColumn, rightAligned',
                    valueFormatter: currencyFormatter,
                    cellStyle: { color: 'black', 'fontWeight': 'bold' }
                },
                {
                    headerName: 'Satış',
                    field: 'UrunSatisTL',
                    type: 'numberColumn, rightAligned',
                    valueFormatter: currencyFormatter,
                    cellStyle: { color: 'black', 'fontWeight': 'bold' }
                },
            ]
        },
        {
            headerName: 'Stok',
            children: [
                { headerName: 'Stok', field: 'UrunStok', columnGroupShow: 'open,closed', type: 'numberColumn', valueFormatter: formatNumber2, cellRenderer: 'liste_urunstok', },
                { headerName: 'Sipariş Gelecek', field: 'UrunSiparisGelecek', columnGroupShow: 'open', type: 'numberColumn', valueFormatter: formatNumber2, },
                { headerName: 'Sipariş Gidecek', field: 'UrunSiparisGidecek', columnGroupShow: 'open', type: 'numberColumn', valueFormatter: formatNumber2, },
                { headerName: 'Rezerv', field: 'UrunRezerv', columnGroupShow: 'open', type: 'numberColumn', valueFormatter: formatNumber2, },
            ]
        },
        //{
        //    headerName: 'E-ticaret',
        //    children: [
        //        { headerName: 'SEO', field: 'UrunSEO', columnGroupShow: 'open,closed', cellRenderer: 'liste_uruneticaret', },
        //        { headerName: 'Vitrin', field: 'UrunVitrin', columnGroupShow: 'open', cellRenderer: 'liste_uruneticaret', },
        //        { headerName: 'Açıklama', field: 'UrunAciklama', columnGroupShow: 'open', cellRenderer: 'liste_uruneticaret', },
        //    ]
        //},
        {
            headerName: 'Aktif',
            children: [
                { headerName: 'Toplam', field: 'UrunAktif', type: 'numberColumn', valueFormatter: formatNumber2, columnGroupShow: 'closed' },
                { headerName: 'Servis', field: 'UrunServis', type: 'numberColumn', valueFormatter: formatNumber2, columnGroupShow: 'open' },
                { headerName: 'Sipariş', field: 'UrunSiparis', type: 'numberColumn', valueFormatter: formatNumber2, columnGroupShow: 'open' },
                { headerName: 'Fatura', field: 'UrunFatura', type: 'numberColumn', valueFormatter: formatNumber2, columnGroupShow: 'open' },
            ]
        },
        {
            headerName: 'Durum',
            field: 'UrunDurum',
            initialPinned: 'right',
            cellRenderer: 'liste_durum',
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
        liste_urunresim: liste_urunresim,
        liste_urunlink: liste_urunlink,
        liste_uruneticaret: liste_uruneticaret,
        liste_urunstok: liste_urunstok,
        liste_durum: liste_durum,
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

function liste_urunresim() {}
liste_urunresim.prototype.init = function(params) {
    this.eGui = document.createElement('div');
    this.eGui.innerHTML = '<img src="' + params.value + '" class="wd-50 mg-y-10">';
};
liste_urunresim.prototype.getGui = function() {
    return this.eGui;
}
liste_urunresim.prototype.destroy = function() {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_urunresim.prototype.btnClickedHandler = function(event) {
    this.params.clicked(this.params.value);
}

function liste_uruneticaret() {}
liste_uruneticaret.prototype.init = function(params) {
    this.eGui = document.createElement('div');
    if (params.value === "true") {
        this.eGui.innerHTML = '<div class="avatar avatar-xs"><span class="avatar-initial rounded-pill bg-success-light bd bd-success text-center"><i class="fa fa-check tx-success valign-middle"></i></span></div>';
    } else if (params.value === "false") {
        this.eGui.innerHTML = '<div class="avatar avatar-xs"><span class="avatar-initial rounded-pill bg-warning-light bd bd-danger text-center"><i class="fa fa-circle tx-danger valign-middle"></i></span></div>';
    }
};
liste_uruneticaret.prototype.getGui = function() {
    return this.eGui;
}
liste_uruneticaret.prototype.destroy = function() {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_uruneticaret.prototype.btnClickedHandler = function(event) {
    this.params.clicked(this.params.value);
}

function liste_urunlink() {}
liste_urunlink.prototype.init = function(params) {
    this.eGui = document.createElement('div');
    this.eGui.innerHTML = '<a href="urunler-yeni.html" class="tx-dark tx-semibold">' + params.value + '</a>';
};
liste_urunlink.prototype.getGui = function() {
    return this.eGui;
}
liste_urunlink.prototype.destroy = function() {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_urunlink.prototype.btnClickedHandler = function(event) {
    this.params.clicked(this.params.value);
}

function liste_urunstok() {}
liste_urunstok.prototype.init = function(params) {
    this.eGui = document.createElement('div');
    this.eGui.innerHTML = '<a href="#modal_stockchecker" data-toggle="modal" class="tx-dark">' + formatNumber(params.value) + '</a>';
};
liste_urunstok.prototype.getGui = function() {
    return this.eGui;
}
liste_urunstok.prototype.destroy = function() {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_urunstok.prototype.btnClickedHandler = function(event) {
    this.params.clicked(this.params.value);
}

function liste_durum() {}
liste_durum.prototype.init = function(params) {
    //debugger;
    this.eGui = document.createElement('div');
    var gender = "";
    if (params.value === "Normal") {
        gender = '<span class="pos-absolute wd-10 ht-10 rounded-circle t-10 r-10" style="background-color: limegreen;"></span>';
        this.eGui.innerHTML = params.value + ' ' + gender;
    } else if (params.value === "Kritik Stok") {
        gender = '<span class="pos-absolute wd-10 ht-10 rounded-circle t-10 r-10" style="background-color: goldenrod;"></span>';
        this.eGui.innerHTML = params.value + ' ' + gender;

    } else if (params.value === "Stok Yok") {
        gender = '<span class="pos-absolute wd-10 ht-10 rounded-circle t-10 r-10" style="background-color: red;"></span>';
        this.eGui.innerHTML = params.value + ' ' + gender;

    } else if (params.value === "Satışa Kapalı") {
        gender = '<span class="pos-absolute wd-10 ht-10 rounded-circle t-10 r-10" style="background-color: grey;"></span>';
        this.eGui.innerHTML = params.value + ' ' + gender;

    } else { this.eGui.innerHTML = params.value; }
};
liste_durum.prototype.getGui = function() {
    return this.eGui;
}
liste_durum.prototype.destroy = function() {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
liste_durum.prototype.btnClickedHandler = function(event) {
    this.params.clicked(this.params.value);
}


function liste_islemmenu() {}
liste_islemmenu.prototype.init = function(params) {
    this.eGui = document.createElement('div');
    var liste_islemmenu_html = '' +
        '<div class="d-inline-flex">' +
        '   <a href="urunler-yeni.html" class="btn btn-sm btn-primary pd-x-8 pd-y-4"><i class="fal fa-info-circle tx-16 mg-r-6"></i>Detay</button>' +
        '</div>';
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

function formatNumber2(params) {
    return formatNumber(params.value);
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