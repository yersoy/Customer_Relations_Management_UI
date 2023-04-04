var rowData = [
    {
        Opt: '1',
        Kod: 'RT01',
        UrunAdi: 'TEST 1',
        Aciklama: '',
        Miktar: 1,
        BirimID: 1,
        Fiyat: 40.88,
        PBirimID: 1,
        Kdv: 18,
        SatirToplami: 0,
        BoStock: 1,
        BoSerialNo: 0,
        BoPriceHistory: 1,
    },
    {
        Opt: '2',
        Kod: 'RT02',
        UrunAdi: 'TEST 2',
        Aciklama: 'Bu bir test ürünüdür',
        Miktar: 1,
        BirimID: 1,
        Fiyat: 40.88,
        PBirimID: 1,
        Kdv: 18,
        SatirToplami: 0,
        BoStock: 0,
        BoSerialNo: 1,
        BoPriceHistory: 1,
    },
];

var gridOptions = {
    columnDefs: [
        { headerName: '', field: '', maxWidth: 50 },
        { headerName: '', field: 'Opt', maxWidth: 70, rowDrag: true },
        { field: 'Kod', filter: true, maxWidth: 150 },
        {
            headerName: 'Ürün Adı',
            field: 'UrunAdi',
            filter: true,
            cellRenderer: 'urunkolunuolustur'
        },
        {
            headerName: 'A', field: 'Aciklama', maxWidth: 100,
            cellRenderer: 'btnCellRenderer',
            cellRendererParams:
            {
                clicked: function (field) {
                    alert(`${field}`);
                }
            },
        },
        {
            field: 'Miktar',
            maxWidth: 100,
            type: 'rightAligned',
            cellRenderer: 'stockalert'
        },
        {
            headerName: "Birim",
            field: "BirimID",
            maxWidth: 100,
            editable: false,
            cellRenderer: CustomCombobox1
        },
        {
            field: 'Fiyat',
            maxWidth: 150,
            cellRenderer: 'priceHistory',
            valueFormatter: currencyFormatterWithoutCurrency,
        },
        {
            headerName: "P.Birim",
            field: "PBirimID",
            maxWidth: 100,
            editable: false,
            cellRenderer: CustomCombobox
        },

        { field: 'Kdv', maxWidth: 90, },
        {
            headerName: 'Satır Toplamı',
            field: 'SatirToplami',
            maxWidth: 150,
            type: 'rightAligned',
            valueGetter: ABValueGetter,
            valueFormatter: currencyFormatter,
            valueSetter: numberValueSetter,
        },
    ],
    defaultColDef:
    {
        flex: 1,
        minWidth: 110,
        editable: true,
        sortable: true,
        resizable: true,
        headerCheckboxSelection: isFirstColumn,
        checkboxSelection: isFirstColumn,

    },
    suppressRowClickSelection: true,
    rowSelection: 'multiple',
    onSelectionChanged: onSelectionChanged,
    rowData: null,
    rowDragManaged: true,
    animateRows: true,
    debug: true,
    //columnDefs: columnDefs,
    components:
    {
        btnCellRenderer: BtnCellRenderer,
        urunkolunuolustur: btnurunseri,
        stockalert: btnStockAlert,
        priceHistory: btnPriceHistory,
        //birimEkleme:cmbBirim,
        customLoadingCellRenderer: CustomLoadingCellRenderer,
    },
    loadingCellRenderer: 'customLoadingCellRenderer',
    loadingCellRendererParams:
    {
        loadingMessage: 'Lütfen Bekleyiniz',
    },
    // pinnedTopRowData: getPinnedTopData(),
    // pinnedBottomRowData: getPinnedBottomData(),
    onRowEditingStarted: function (event) {
        console.log('never called - not doing row editing');
    },
    onRowEditingStopped: function (event) {
        console.log('never called - not doing row editing');
    },
    onCellEditingStarted: function (event) {
        console.log(event.data.Opt);
    },
    onCellEditingStopped: function (event) {
        console.log("Degişen Satır Id si=" + event.data.Opt)
        console.log("Degişen Field Adı=" + event.columnDefs.field)
        console.log("Field içindeki deger=" + event.data.Miktar);

        console.log('cellEditingStopped');
    },
};

function getPinnedTopData() {
    return [
        {

            Kod: '##',
            UrunAdi: '##',
            Aciklama: '##',

        },
    ];
}

function getPinnedBottomData() {
    return [
        {
            Kod: '##',
            UrunAdi: '##',
            Aciklama: '##',
        },
    ];
}
var ABValueGetter = function (params) {
    return (params.data.Miktar * params.data.Fiyat) * (1 + params.data.Kdv / 100);
};
function formatNumber(number) {
    // this puts commas into the number eg 1000 goes to 1,000,
    // i pulled this from stack overflow, i have no idea how it works
    return parseFloat(number).toFixed(2)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
function currencyFormatter(params) {
    return "₺ " + formatNumber(params.value);
}
function currencyFormatterWithoutCurrency(params) {
    return formatNumber(params.value);
}
function numberValueSetter(params) {
    if (isNaN(parseFloat(params.newValue)) || !isFinite(params.newValue)) {
        return false; // don't set invalid numbers!
    }

    params.data.price = params.newValue;

    return true;
}

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
    $("#grid_noselected").removeClass("d-block").addClass("d-none");
    $("#grid_bulkactions").removeClass("d-flex").addClass("d-none");
    $("#grid_addwithcode").removeClass("d-none").addClass("d-flex");
});
$("#grid_addwithcode_cancel").on("click", function () {
    $("#grid_noselected").removeClass("d-flex").addClass("d-flex");
    $("#grid_bulkactions").removeClass("d-flex").addClass("d-none");
    $("#grid_addwithcode").removeClass("d-flex").addClass("d-none");
});

function CustomerSelected() {
    //debugger;
    document.getElementById("dvEmptyCustomer").style.display = "none";
    document.getElementById("dvCustomerSelected").style.display = "block";
    document.getElementById("dvOfferEditEmpty").style.display = "block";
}

var newCount = 1;

function createNewRowData() {
    newCount++;
    var newData = {
        Opt: newCount,
        Kod: '',
        UrunAdi: '',
        Aciklama: '',
        Miktar: 0,
        BirimID: 1,
        Fiyat:
            0,
        PBirimID: 1,
        Kdv: '',
        SatirToplami: '',
    };

    return newData;
}
//Satır Ekleme
function addItems(addIndex) {
    var newItems = [createNewRowData()];
    var res = gridOptions.api.applyTransaction({
        add: newItems,
        addIndex: addIndex,
    });
    // gridOptions.api.setFocusedCell(newCount, 'firstName', pinned);
    onBtStartEditing()
}
//Kolon ayarları kayıt
function saveState() {
    window.colState = gridOptions.columnApi.getColumnState();
    console.log('column state saved');
}
function restoreState() {
    if (!window.colState) {
        console.log('no columns state to restore by, you must save state first');
        return;
    }
    gridOptions.columnApi.applyColumnState({
        state: window.colState,
        applyOrder: true,
    });
    console.log('column state restored');
}
function resetState() {
    gridOptions.columnApi.resetColumnState();
    console.log('column state reset');
}
//Kolon ayarları son
function onBtStopEditing() {
    gridOptions.api.stopEditing();
}
function isFirstColumn(params) {
    var displayedColumns = params.columnApi.getAllDisplayedColumns();
    var thisIsFirstColumn = displayedColumns[0] === params.column;
    return thisIsFirstColumn;
}
function onQuickFilterChanged() {
    gridOptions.api.setQuickFilter(document.getElementById('quickFilter').value);
}
function onBtStartEditing(key, char, pinned) {
    gridOptions.api.setFocusedCell(newCount - 1, 'Ürün adı', pinned);

    // gridOptions.api.startEditingCell({
    //   rowIndex: newCount,
    //   colKey: 'lastName',
    //   // set to 'top', 'bottom' or undefined
    //   rowPinned: pinned,
    //   keyPress: key,
    //   charPress: char,
    // });
}

//brk
function btnurunseri() { }
btnurunseri.prototype.init = function (params) {
    //debugger;
    this.eGui = document.createElement('div');
    if (params.data.BoSerialNo == 1) {
        var gender = '<a href="#modal_serialnumbers" data-toggle="modal" class="tx-primary mg-l-5"><i class="fas fa-qrcode" data-toggle="tooltip" data-placement="top" title="Seri numarası seçimi"></i></a>';
        this.eGui.innerHTML = params.value + ' ' + gender;
    }
    else {
        this.eGui.innerHTML = params.value;
    }
};
btnurunseri.prototype.getGui = function () {
    return this.eGui;
}
btnurunseri.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
btnurunseri.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

//brk
function btnPriceHistory() { }
btnPriceHistory.prototype.init = function (params) {
    //debugger;
    this.eGui = document.createElement('div');
    if (params.data.BoPriceHistory == 1) {
        var gender = '<a href="#modal_pricehistory" data-toggle="modal" class="tx-primary mg-l-5 pos-absolute-f r-5"><i class="fas fa-tags" data-toggle="tooltip" data-placement="top" title="Fiyat geçmişi"></i></a>';
        this.eGui.innerHTML = params.value + ' ' + gender;
    }
    else {
        this.eGui.innerHTML = params.value;
    }
};
btnPriceHistory.prototype.getGui = function () {
    return this.eGui;
}
btnPriceHistory.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
btnPriceHistory.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

//brk
function btnStockAlert() { }
btnStockAlert.prototype.init = function (params) {
    //debugger;
    this.eGui = document.createElement('div');
    if (params.data.BoStock === 0) {
        var gender = '<a href="#modal_stockchecker" data-toggle="modal" class="tx-primary mg-l-5"><i class="fas fa-exclamation-triangle" data-toggle="tooltip" data-placement="top" title="Stok yetersiz"></i></a>';
        this.eGui.innerHTML = params.value + ' ' + gender;
    }
    else {
        this.eGui.innerHTML = params.value;
    }
};
btnStockAlert.prototype.getGui = function () {
    return this.eGui;
}
btnStockAlert.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
btnStockAlert.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}
//
//Birim Ekleme
// function cmbBirim(){}

// cmbBirim.prototype.init = function(params) {
// debugger;
// this.eGui = document.createElement('div');
// if (params.value !== "" || params.value !== undefined || params.value !== null) {
// var gender = CustomCombobox1(params)
// this.eGui.innerHTML =  params.value + ' ' + gender;
// }
// };
// cmbBirim.prototype.getGui=function(){
// return this.eGui;
// }
// cmbBirim.prototype.destroy = function() {
// this.eGui.removeEventListener('click', this.btnClickedHandler);
// }

// cmbBirim.prototype.btnClickedHandler = function(event) {
// this.params.clicked(this.params.value);
// }
//

//Buton ekleme

function BtnCellRenderer() { }
BtnCellRenderer.prototype.init = function (params) {
    this.params = params;

    this.eGui = document.createElement('div');
    if (this.params.value === "") {
        this.eGui.innerHTML = '<span href="#modal_aciklama" data-toggle="modal" class="cursor-pointer d-flex justify-content-center wd-20" data-tooltip title="Açıklama"><i class="far fa-comment-alt-slash tx-secondary"></i></span>';
    } else {
        this.eGui.innerHTML = '<span href="#modal_aciklama" data-toggle="modal" class="cursor-pointer d-flex justify-content-center wd-20" data-tooltip title="Açıklama"><i class="fas fa-comment-alt tx-primary"></i></span>';
    }

    //this.btnClickedHandler = this.btnClickedHandler.bind(this);
    //this.eGui.addEventListener('click', this.btnClickedHandler);
}
BtnCellRenderer.prototype.getGui = function () {
    return this.eGui;
}
BtnCellRenderer.prototype.destroy = function () {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}
BtnCellRenderer.prototype.btnClickedHandler = function (event) {
    this.params.clicked(this.params.value);
}

function getCharCodeFromEvent(event) {
    event = event || window.event;
    return typeof event.which === 'undefined' ? event.keyCode : event.which;
}
function isCharNumeric(charStr) {
    return !!/\d/.test(charStr);
}
function isKeyPressedNumeric(event) {
    var charCode = getCharCodeFromEvent(event);
    var charStr = String.fromCharCode(charCode);
    return isCharNumeric(charStr);
}
function onBtNextCell() {
    gridOptions.api.tabToNextCell();
}
function onBtPreviousCell() {
    gridOptions.api.tabToPreviousCell();
}
function onBtWhich() {
    var cellDefs = gridOptions.api.getEditingCells();
    if (cellDefs.length > 0) {
        var cellDef = cellDefs[0];
        console.log(
            'editing cell is: row = ' +
            cellDef.rowIndex +
            ', col = ' +
            cellDef.column.getId() +
            ', floating = ' +
            cellDef.rowPinned
        );
    } else {
        console.log('no cells are editing');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    agGrid.LicenseManager.setLicenseKey("For_Trialing_ag-Grid_Only-Not_For_Real_Development_Or_Production_Projects-Valid_Until-1_May_2021_[v2]_MTYxOTgyMzYwMDAwMA==a717ffda041154ad580159495341d1fd");
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);


    gridOptions.api.setRowData(rowData);

});

//Combobox ekleme
function CustomCombobox(params) {

    //Find RowIndex   
    var rowIndex = params.rowIndex;
    //FindColoumn Name  
    var Column = params.eGridCell.attributes.colId;
    //FindGridData   
    var WeldGridData = gridOptions.rowData;
    //create select element using javascript  

    var eSelect = document.createElement("select");
    //Set attributes   
    eSelect.setAttribute('class', 'custom-select form-control');
    eSelect.setAttribute('style', 'padding:0px;width: 64px;');
    eSelect.setAttribute('name', params.colDef.field);
    eSelect.setAttribute('id', params.colDef.field + "_" + rowIndex);
    //get the value of the select option  
    //var value = params.data.InCountID;  
    //create the default option of the select element  

    var eOption = document.createElement("option");
    // eOption.text = "Select";  
    // eOption.value = "";  
    eSelect.appendChild(eOption);
    if (params.colDef.field == "PBirimID") {
        var eOptionVal = document.createElement("option");
        //Statical set data in grid ComboBox  
        eOptionVal.text = "TL";
        eOptionVal.value = 1;
        eSelect.appendChild(eOptionVal);
        var eOption = document.createElement("option");
        eOption.text = "$";
        eOption.value = "2";
        eSelect.appendChild(eOption);
    }
    return eSelect;
}
function CustomCombobox1(params) {
    //debugger
    //Find RowIndex   
    var rowIndex = params.rowIndex;
    //FindColoumn Name  
    var Column = params.eGridCell.attributes.colId;
    //FindGridData   
    var WeldGridData = gridOptions.rowData;
    //create select element using javascript  

    var eSelect = document.createElement("select");
    //Set attributes   
    eSelect.setAttribute('class', 'custom-select form-control');
    eSelect.setAttribute('style', 'padding:0px;width: 64px;');
    eSelect.setAttribute('name', params.colDef.field);
    eSelect.setAttribute('id', params.colDef.field + "_" + rowIndex);
    //get the value of the select option  
    //var value = params.data.InCountID;  
    //create the default option of the select element  

    var eOption = document.createElement("option");
    // eOption.text = "Select";  
    // eOption.value = "";  
    eSelect.appendChild(eOption);
    if (params.colDef.field == "BirimID") {
        var eOptionVal = document.createElement("option");
        //Statical set data in grid ComboBox  
        eOptionVal.text = "Adet";
        eOptionVal.value = 1;
        eSelect.appendChild(eOptionVal);
        var eOption = document.createElement("option");
        eOption.text = "KG";
        eOption.value = "2";
        eSelect.appendChild(eOption);
    }
    return eSelect;
}