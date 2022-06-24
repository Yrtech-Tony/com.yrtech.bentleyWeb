function SetValue() {
    if (window.localStorage.Empty != "true") {
        window.localStorage.pname = "";
        window.localStorage.pyear = "";
        window.localStorage.pmonth = "";
        window.localStorage.pstate = "";
        window.localStorage.pdealer = "";
        window.localStorage.ptype = "";
    }
    else {
        window.localStorage.Empty = "false";
    }
    $("#pname").val(window.localStorage.pname);
    $("#pyear").val(window.localStorage.pyear);
    $("#pmonth").val(window.localStorage.pmonth);
    $("#pstate").val(window.localStorage.pstate);
    $("#pdealer").val(window.localStorage.pdealer);
    $("#ptype").val(window.localStorage.ptype);
}
function EmptyValue() {
    window.localStorage.Empty = "true";
}

function EmptyValueHref(_value) {
    window.localStorage.Empty = "true";
    window.location.href = _value;
}

function HideFiledDealer() {
    var roleTypeCode = $('#G_RoleTypeCode').val();
    if (roleTypeCode == "SHOP") {
        $('#myMarketing').bootstrapTable('hideColumn', isZH() ? 'ShopName' : 'ShopNameEn');
    }
}

function NameQuery() {
    window.localStorage.pname = $("#pname").val();
    window.localStorage.pyear = $("#pyear").val();
    window.localStorage.pmonth = $("#pmonth").val();
    window.localStorage.pstate = $("#pstate").val();
    window.localStorage.pdealer = $("#pdealer").val();
    window.localStorage.ptype = $("#ptype").val();
    window.localStorage.pareaId = $("#areaId").val();
    loadMarketings(true);
}

var types = isZH() ? ['数字营销', '广告及宣传', '线上平台线索获取'] : ['Digital Marketing', 'Advertisement', 'Online Sales Leads Generation'];
function statusFormatter(value, row, index, field) {
    if (row.MarketActionStatusNameEn == "Canceled") {
        return '';
    }

    if (field == "Before3Days" || field == "TheDays") {
        if (isZH()) {
            if (types.indexOf(row.EventTypeName) >= 0) {
                return '';
            }
        } else {
            if (types.indexOf(row.EventTypeNameEn) >= 0) {
                return '';
            }
        }
    }
    var href = '/Marketing/' + field + "?id=" + row.MarketActionId;
    if ((field == "Before4Weeks" || field == "Before4WeeksCar" || field == "After7Days" || field == "After7DaysCar" || field == "Before4WeeksOnline" || field == "After7DaysOnline" || field == "After7DaysOffline") && row.EventModeId == 3) {
        return '';
    }
    if ((field == "Before4Weeks" || field == "Before4WeeksCar" || field == "After7Days" || field == "After7DaysCar" || field == "Before4WeeksOnline" || field == "After7DaysOnline" || field == "After7DaysOffline") && parseInt(value) >= 0) {
        var _value = parseInt(value);
        var _div = '<div class="progress progress-info" style="background:#ddd;margin-bottom:0px;cursor:pointer;position:relative;" onclick="EmptyValueHref(' + '\'' + href + '\'' + ');"><div class="progress-bar" role="progressbar" style = "width: ' + _value + '%;height:100%;background:#4bb1cf;" ></div ><span class="label" style="position:absolute;z-index:2;top:3px;right:0px;">' + _value + '%</span></div >';
        return _div;
    }
    if (value == "Commited") {
        var txt = $("#Pending").val();
        return '<a href="' + href + '" onclick="EmptyValue();" class="btn btn-primary btn-sm" style="background-color:#67bc51 !important;border-color:lightgrey !important;"><i class="icon-plus" style="padding-right:5px;"></i><span style="color: white;">' + txt + '</span></a>';
    } else if (value == "UnCommit") {
        var txt = $("#Draft").val();
        return '<a href="' + href + '" onclick="EmptyValue();" class="btn btn-primary btn-sm" style="background-color:#9ac1e6 !important;border-color:lightgrey !important;"><i class="icon-plus" style="padding-right:5px;"></i><span style="color: white;" >' + txt + '</span></a>';
    } else if (value == "UnCommitTime") {
        var txt = $("#Draft").val();
        return '<a href="' + href + '" onclick="EmptyValue();" class="btn btn-primary btn-sm" style="background-color:#9ac1e6 !important;border-color:lightgrey !important;"><i class="icon-plus" style="padding-right:5px;"></i><span style="color: white;" >' + txt + '</span></a>';
    } else if (value == "Approved") {
        var txt = $("#Audit_Approved").val();
        return '<a href="' + href + '" onclick="EmptyValue();" class="btn btn-primary btn-sm" style="background-color:#44474e !important;border-color:lightgrey !important;"><i class="icon-plus" style="padding-right:5px;"></i><span style="color: white;" >' + txt + '</span></a>';
    } else if (value == "WaitForChange") {
        var txt = $("#Audit_Modify").val();
        return '<a href="' + href + '" onclick="EmptyValue();" class="btn btn-primary btn-sm" style="background-color:#fff89a !important;border-color:lightgrey !important;"><i class="icon-plus" style="padding-right:5px;"></i><span style="color: white;" >' + txt + '</span></a>';
    }
}

function nameFormatter(value, row, index) {
    return ' <div style="min-width:180px;"><a href="/Marketing/Create?Id=' + row.MarketActionId + '" onclick="EmptyValue();">' + value + '</a></div>';
}

function dateFormatter(value, row, index) {
    if (value) {
        var date = value.substr(0, value.indexOf(' ')).replace(/-/g, '\/');
        return date;
    }
    return "";
}

function expenseAccountFormatter(value, row, index) {
    var chk = (value) ? 'checked' : '';
    return '<input class="check" type="checkbox" ' + chk + '/>';
}

function loadMarketings(refresh) {
    $.commonGet("MarketAction/MarketActionSearch", {
        actionName: $('#pname').val() || '',
        year: $('#pyear').val() || '',
        month: $('#pmonth').val() || '',
        marketActionStatusCode: $('#pstate').val() || '',
        shopId: $('#pdealer').val() || ' ',
        eventTypeId: $('#ptype').val() || ' ',
        userId: $("#G_UserId").val(),
        roleTypeCode: $("#G_RoleTypeCode").val(),
        areaId: $('#areaId').val() || ' ',
        expenseAccountChk: ''
    }, function (data) {
        if (data) {
            $('#myMarketing').bootstrapTable("load", data);
            $("#myMarketing").bootstrapTable("selectPage", parseInt(window.localStorage.pageNumberMarket) || 1);
        }
    });
}

function initTable() {
    var columns = [[{
        title: $("#NO").val(),
        field: '',
        align: 'center',
        valign: 'middle',
        formatter: function (value, row, index) {
            return index + 1;
        },
        rowspan: 2
    }, {
        title: $("#G_ReimbursementApplication").val(),
        field: 'ExpenseAccount',
        align: 'center',
        valign: 'middle',
        rowspan: 2,
        formatter: expenseAccountFormatter,
        events: {
            'change .check': function (e, value, row, index) {
                var chhecked = $(e.target).is(":checked");
                $.commonGet("MarketAction/MarketActionSearchById", { marketActionId: row.MarketActionId }, function (data) {
                    if (data && data.length > 0) {
                        data[0].ExpenseAccount = chhecked;
                        $.commonPost('MarketAction/MarketActionSave', data[0], function (res) {
                            //window.location.href = "/Marketing/Index";
                        })
                    }
                });
            }
        }
    }, {
        title: $("#G_Dealer").val(),
        field: isZH() ? 'ShopName' : 'ShopNameEn',
        width: "100px",
        align: 'center',
        valign: 'middle',
        sortable: true,
        rowspan: 2,
        formatter: function (value, row, index) {
            return '<div style="min-width:100px">' + value + '</div>';
        }
    }, {
        title: $("#G_Status").val(),
        field: 'MarketActionStatusCode',
        align: 'center',
        valign: 'middle',
        sortable: true,
        rowspan: 2,
        formatter: PSFromat
    }, {
        title: $("#G_ActivityName").val(),
        field: 'ActionName',
        align: 'center',
        valign: 'middle',
        sortable: true,
        rowspan: 2,
        formatter: nameFormatter
    }, {
        title: $("#G_EventType").val(),
        field: isZH() ? 'EventTypeName' : 'EventTypeNameEn',
        align: 'center',
        valign: 'middle',
        sortable: true,
        rowspan: 2
    }, {
        title: $("#G_EventModeName").val(),
        field: isZH() ? 'EventModeName' : 'EventModeNameEn',
        align: 'center',
        valign: 'middle',
        sortable: true,
        rowspan: 2
    }, {
        title: $("#G_StartDate").val(),
        field: 'StartDate',
        align: 'center',
        valign: 'middle',
        sortable: true,
        rowspan: 2,
        formatter: dateFormatter
    }, {
        title: $("#G_EndDate").val(),
        field: 'EndDate',
        align: 'center',
        valign: 'middle',
        sortable: true,
        rowspan: 2,
        formatter: dateFormatter
    }, {
        title: $("#G_FourWeeksBefore").val(),
        field: '',
        align: 'center',
        valign: 'middle'
    }, {
        title: $("#G_AfterDays7").val(),
        field: '',
        align: 'center',
        valign: 'middle'
        },
        {
            title: $("#G_AfterWeeks2").val(),
            field: '',
            align: 'center',
            valign: 'middle',
            colspan: 2
        }],
        [{
        title: $("#G_PlanStatus").val(),
        field: 'Before4Weeks',
        align: 'center',
        valign: 'middle',
            formatter: function (value, row, index) {
                if (row.EventModeId == 2) {
                    if (row.EventTypeId == 99) {
                        return statusFormatter(value, row, index, 'Before4WeeksCar');
                    }
                    return statusFormatter(value, row, index, 'Before4Weeks');
                } else {
                    return statusFormatter(value, row, index, 'Before4WeeksOnline');
                }
        }
    }, {
        title: $("#G_ClueReport").val(),
        field: 'After2Days',
        align: 'center',
        valign: 'middle',
        formatter: function (value, row, index) {
            return statusFormatter(value, row, index, 'After2Days');
        }
    }, {
        title: $("#G_EventReport").val(),
        field: 'After7Days',
        align: 'center',
        valign: 'middle',
            formatter: function (value, row, index) {
                if (row.EventModeId == 2) {
                    if (row.EventTypeId == 99) {
                        return statusFormatter(value, row, index, 'After7DaysCar');
                    }
                    return statusFormatter(value, row, index, 'After7DaysOffline');
                } else {
                    return statusFormatter(value, row, index, 'After7DaysOnline');
                }
        }
    }]];

    $("#myMarketing").bootstrapTable({
        columns: columns,
        pagination: true,
        striped: true, //是否显示行间隔色
        height: getClientHeight() - 280 + 80,
        showColumns: false, // 开启自定义列显示功能
        sortable: true,
        sortName: 'StartDate',
        sortOrder: 'desc',
        pageSize: 20,
        pageList: [5, 10, 20, 50],
        onPageChange: function (number, size) {
            window.localStorage.pageNumberMarket = number;
        }
    });
}

function refreshTable(data) {
    $("#myMarketing").bootstrapTable("load", {
        data: data
    });
}

function EnterPress(e) { //传入 event
    var e = e || window.event;
    if (e.keyCode == 13) { //13代表回车符
        NameQuery();
    }
}

function downloadByClueReportFile() {
    $.commonGet("MarketAction/MarketActionAllLeadsReportExport", {
        year: '',
        userId: $("#G_UserId").val(),
        roleTypeCode: $("#G_RoleTypeCode").val()
    }, function (data) {
        if (data) {
            window.location.href = host + "download/DownloadFile?filepath=" + data.FilePath;
        }
    })
}

function downloadFile() {
    $.commonGet("MarketAction/MarketActionExport", {
        actionName: $('#pname').val() || '',
        year: $('#pyear').val() || '',
        month: $('#pmonth').val() || '',
        marketActionStatusCode: $('#pstate').val() || '',
        shopId: $('#pdealer').val() || ' ',
        eventTypeId: $('#ptype').val() || ' ',
        userId: $("#G_UserId").val(),
        roleTypeCode: $("#G_RoleTypeCode").val(),
        expenseAccountChk: ''
    }, function (data) {
        if (data) {
            window.location.href = host + "download/DownloadFile?filepath=" + data.FilePath;
        }
    })
}

function PSFromat(value, row, index) {
    var displayValue = isZH() ? row.MarketActionStatusName : row.MarketActionStatusNameEn;
    switch (value) {
        case '1':
            return '<span style="color: green; border: 1px solid">' + displayValue + '</span>';
        case '2':
            return '<span style="color: red; ">' + displayValue + '</span>';
        case '3':
            return '<span style="color: green;">' + displayValue + '</span>';
        case '4':
            return '<span style="color:gray;">' + displayValue + '</span>';
        default:
            return '<span style="color: green; border: 1px solid">' + displayValue + '</span>';

    }
}
