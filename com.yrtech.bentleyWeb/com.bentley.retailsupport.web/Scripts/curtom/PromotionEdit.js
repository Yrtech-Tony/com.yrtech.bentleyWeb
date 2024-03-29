﻿
function InitActivityFlowTable() {

    //活动流程
    $('#ActivityFlowTable').bootstrapTable({
        pagination: true,
        striped: true, //是否显示行间隔色
        sortable: true,
        sortName: 'ActivityDateTime',
        sortOrder: 'asc',
        columns: [
            {
                title: $('#B_ActivityDateTimeStart').val(),
                field: 'ActivityDateTimeStart',
                valign: "left",
                align: "left",
                sortable: true,
                editable: {
                    type: 'datetime',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "ActivityDateTimeStart", value: value };
                        var html = '<a href="javascript:void(0)" data-name="ActivityDateTimeStart" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="ActivityDateTimeStart" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }
            },

            {
                title: $('#B_ActivityDateTimeEnd').val(),
                field: 'ActivityDateTimeEnd',
                valign: "left",
                align: "left",
                sortable: true,
                editable: {
                    type: 'datetime',
                    title: '',
                    validate: function (v) {

                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "ActivityDateTimeEnd", value: value };
                        var html = '<a href="javascript:void(0)" data-name="ActivityDateTimeEnd" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="ActivityDateTimeEnd" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }
            },

            {
                title: $('#TContent').val(),
                field: 'Contents',
                valign: "left",
                align: "left",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "Contents", value: value };
                        var html = '<a href="javascript:void(0)" data-name="Contents" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="Contents" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }

            },
            {
                title: $('#B_Responsible').val(),
                field: 'Responsible',
                valign: "left",
                align: "left",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "Item", value: value };
                        var html = '<a href="javascript:void(0)" data-name="Responsible" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="Responsible" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#TEdit').val(),
                field: 'Edit',
                valign: "middle",
                align: "center",
                formatter: function (value, row, index) {
                    var e = "<label onclick='DeleteActivityFlowRow(" + row.SeqNO + ")'><i class='icon-pencil icon-white'></i>" + (isZH() ? '删除' : 'Delete') + "</label>";
                    return e;
                }
            }
        ],
        onClickCell: function (field, value, row, $element) {
            return false;

        },
        onClickRow: function (row, $element) {
            curRow = row;
        },
        onEditableSave: function (field, row, oldValue, $el) {
            checkTime(row,'ActivityFlowTable');
        }
    });
}

function checkTime(_item,_id) {
    var StrActivityFlow = $('#'+_id).bootstrapTable('getData');
    let _flowVeri = true;
    for (let _key in _item) {
        if (_key == "ActivityDateTimeStart" && !_item[_key]) {
            _flowVeri = false;
            return;
        }
        if (_key == "ActivityDateTimeEnd" && !_item[_key]) {
            _flowVeri = false;
            return;
        }
    }
    //验证结束时间大于开始时间
    if (_item["ActivityDateTimeStart"] && _item["ActivityDateTimeEnd"]) {
        let _startDate = new Date(_item["ActivityDateTimeStart"]);
        let _endDate = new Date(_item["ActivityDateTimeEnd"]);
        if (_startDate.getTime() >= _endDate.getTime()) {
            layer.open({
                title: '错误提示',
                type: 0,
                content: '活动开始时间不能大于活动结束时间！'
            });
            _item["ActivityDateTimeEnd"] = '';
            _flowDateVeri = false;
        }
    }
    if (!_flowVeri) {
        return false;
    }
    StrActivityFlow.forEach(function (item) {
        if (item.SeqNO == _item.SeqNO) {
            item = _item;
        }
    });
    $('#' + _id).bootstrapTable("load", StrActivityFlow);
}

function InitActivityFlowTableProcess() {

    //活动流程
    $('#ActivityFlowTableProcess').bootstrapTable({
        pagination: true,
        striped: true, //是否显示行间隔色
        sortable: true,
        sortName: 'ActivityDateTime',
        sortOrder: 'asc',
        columns: [
            {
                title: $('#B_ActivityDateTimeStart').val(),
                field: 'ActivityDateTimeStart',
                valign: "left",
                align: "left",
                sortable: true,
                editable: {
                    type: 'datetime',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "ActivityDateTimeStart", value: value };
                        var html = '<a href="javascript:void(0)" data-name="ActivityDateTimeStart" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="ActivityDateTimeStart" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }
            },

            {
                title: $('#B_ActivityDateTimeEnd').val(),
                field: 'ActivityDateTimeEnd',
                valign: "left",
                align: "left",
                sortable: true,
                editable: {
                    type: 'datetime',
                    title: '',
                    validate: function (v) {

                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "ActivityDateTimeEnd", value: value };
                        var html = '<a href="javascript:void(0)" data-name="ActivityDateTimeEnd" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="ActivityDateTimeEnd" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#B_Process').val(),
                field: 'Process',
                valign: "left",
                align: "left",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "Item", value: value };
                        var html = '<a href="javascript:void(0)" data-name="Process" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="Process" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#TEdit').val(),
                field: 'Edit',
                valign: "middle",
                align: "center",
                formatter: function (value, row, index) {
                    var e = "<label onclick='DeleteActivityFlowRowProcess(" + row.SeqNO + ")'><i class='icon-pencil icon-white'></i>" + (isZH() ? '删除' : 'Delete') + "</label>";
                    return e;
                }
            }
        ],
        onClickCell: function (field, value, row, $element) {
            return false;

        },
        onClickRow: function (row, $element) {
            curRow = row;
        },
        onEditableSave: function (field, row, oldValue, $el) {
            checkTime(row,'ActivityFlowTableProcess');
        }
    });
}

function InitActivityFlowTableNew(_type) {
    var _columns = [
        {
            title: $('#B_CoopFundCode').val(),
            field: 'CoopFundCode',
            width: "300px",
            valign: "middle",
            align: "center",
            sortable: false,
            align: 'left',
            editable: {
                type: 'select',
                title: '',
                source: hdData,
                validate: function (v) {
                    if (!v) return isZH() ? '费用类型不能为空' : 'The Item cannot be empty';
                },
                noeditFormatter: function (value, row, index) {
                    value = isZH() ? row.CoopFundCode : row.CoopFundCode;
                    for (let i = 0; i < hdData.length; i++) {
                        if (row.CoopFundCode == hdData[i].value) {
                            value = hdData[i].text;
                        }
                    }
                    var html = '<a href="javascript:void(0)" data-name="CoopFundCode" data-pk="undefined" data-value="" class="editable editable-click">' + value + '</a>';
                    if (!value) {
                        html = '<a href="javascript:void(0)" data-name="CoopFundCode" data-pk="undefined" data-value="" class="editable editable-click">NULL</a>';
                    }
                    return html;
                }
            }
        },
        {
            title: $('#B_CoopFundAmt').val(),
            field: 'CoopFundAmt',
            valign: "left",
            align: "left",
            editable: {
                type: 'text',
                title: '',
                validate: function (v) {
                },
                noeditFormatter: function (value, row, index) {
                    var result = { filed: "CoopFundAmt", value: value };
                    var html = '<a href="javascript:void(0)" data-name="CoopFundAmt" data-pk="undefined" data-value="" class="editable editable-click editable-empty">￥' + convertMoneyD(result.value) + '</a>';
                    if (!result.value) {
                        html = '<a href="javascript:void(0)" data-name="CoopFundAmt" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                    }
                    return html;
                }
            }

        },
        {
            title: $('#B_CoopFundDMFChk').val(),
            field: 'CoopFund_DMFChk',
            valign: "middle",
            align: "center",
            sortable: false,
            align: 'left',
            editable: {
                type: 'select',
                title: '',
                source: hdDataCoop,
                validate: function (v) {
                    if (!v) return isZH() ? '是否报销不能为空' : 'The Item cannot be empty';
                },
                noeditFormatter: function (value, row, index) {
                    value = isZH() ? row.CoopFund_DMFChk : row.CoopFund_DMFChk;
                    for (let i = 0; i < hdDataCoop.length; i++) {
                        if (row.CoopFund_DMFChk + "" == hdDataCoop[i].value) {
                            value = hdDataCoop[i].text;
                        }
                    }
                    var html = '<a href="javascript:void(0)" data-name="CoopFund_DMFChk" data-pk="undefined" data-value="" class="editable editable-click">' + value + '</a>';
                    if (!value) {
                        html = '<a href="javascript:void(0)" data-name="CoopFund_DMFChk" data-pk="undefined" data-value="" class="editable editable-click">NULL</a>';
                    }
                    return html;
                }
            }
        },
        {
            title: $('#B_CoopFundDesc').val(),
            field: 'CoopFundDesc',
            valign: "left",
            align: "left",
            editable: {
                type: 'text',
                title: '',
                validate: function (v) {
                },
                noeditFormatter: function (value, row, index) {
                    var result = { filed: "CoopFundDesc", value: value };
                    var html = '<a href="javascript:void(0)" data-name="CoopFundDesc" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                    if (!result.value) {
                        html = '<a href="javascript:void(0)" data-name="CoopFundDesc" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                    }
                    return html;
                }
            }

        },
        {
            title: $('#B_CoopFundTypeDesc').val(),
            field: 'CoopFundTypeDesc',
            valign: "left",
            align: "left",
            editable: {
                type: 'text',
                title: '',
                validate: function (v) {
                },
                noeditFormatter: function (value, row, index) {
                    var result = { filed: "CoopFundTypeDesc", value: value };
                    return '<div style="min-width:100px">' + result.value + '</div>';
                }
            }

        },
        {
            title: $('#TEdit').val(),
            field: 'Edit',
            valign: "middle",
            align: "center",
            formatter: function (value, row, index) {
                var e = "<label onclick='DeleteActivityFlowRowNew(" + row.SeqNO + ")'><i class='icon-pencil icon-white'></i>" + (isZH() ? '删除' : 'Delete') + "</label>";
                return e;
            }
        }
    ];
    if (_type == 2) {
        _columns = [
            {
                title: $('#B_CoopFundCode').val(),
                field: 'CoopFundCode',
                width: "300px",
                valign: "middle",
                align: "center",
                sortable: false,
                align: 'left',
                editable: {
                    type: 'select',
                    title: '',
                    source: hdData,
                    validate: function (v) {
                        if (!v) return isZH() ? '费用类型不能为空' : 'The Item cannot be empty';
                    },
                    noeditFormatter: function (value, row, index) {
                        value = isZH() ? row.CoopFundCode : row.CoopFundCode;
                        for (let i = 0; i < hdData.length; i++) {
                            if (row.CoopFundCode == hdData[i].value) {
                                value = hdData[i].text;
                            }
                        }
                        var html = '<a href="javascript:void(0)" data-name="CoopFundCode" data-pk="undefined" data-value="" class="editable editable-click">' + value + '</a>';
                        if (!value) {
                            html = '<a href="javascript:void(0)" data-name="CoopFundCode" data-pk="undefined" data-value="" class="editable editable-click">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#B_CoopFundAmt').val(),
                field: 'CoopFundAmt',
                valign: "left",
                align: "left",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                        v = $.trim(v);
                        var vil = isZH() ? '金额不能为空，且必须是数字' : 'The actual cost cannot be null, and only numbers accepted';
                        if (!v) {
                            return vil;
                        }
                        if (!/^(-?\d+)(\.\d+)?$/.test(v)) {
                            return vil;
                        }
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "CoopFundAmt", value: value };
                        var html = '<a href="javascript:void(0)" data-name="CoopFundAmt" data-pk="undefined" data-value="" class="editable editable-click editable-empty">￥' + convertMoneyD(result.value) + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="CoopFundAmt" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }

            },
            {
                title: $('#B_CoopFundAmtBudget').val(),
                field: 'CoopFundAmt_Budget',
                valign: "left",
                align: "left",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "CoopFundAmt_Budget", value: value };
                        return '<div style="min-width:100px">￥' + convertMoneyD(result.value) + '</div>';
                    }
                }

            },
            {
                title: $('#B_CoopFundDMFChk').val(),
                field: 'CoopFund_DMFChk',
                valign: "middle",
                align: "center",
                sortable: false,
                align: 'left',
                editable: {
                    type: 'select',
                    title: '',
                    source: hdDataCoop,
                    validate: function (v) {
                        if (!v) return isZH() ? '是否报销不能为空' : 'The Item cannot be empty';
                    },
                    noeditFormatter: function (value, row, index) {
                        value = isZH() ? row.CoopFund_DMFChk : row.CoopFund_DMFChk;
                        for (let i = 0; i < hdDataCoop.length; i++) {
                            if (row.CoopFund_DMFChk + "" == hdDataCoop[i].value) {
                                value = hdDataCoop[i].text;
                            }
                        }
                        var html = '<a href="javascript:void(0)" data-name="CoopFund_DMFChk" data-pk="undefined" data-value="" class="editable editable-click">' + value + '</a>';
                        if (!value) {
                            html = '<a href="javascript:void(0)" data-name="CoopFund_DMFChk" data-pk="undefined" data-value="" class="editable editable-click">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#B_CoopFundDesc').val(),
                field: 'CoopFundDesc',
                valign: "left",
                align: "left",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "CoopFundDesc", value: value };
                        var html = '<a href="javascript:void(0)" data-name="CoopFundDesc" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="CoopFundDesc" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }

            },
            {
                title: $('#B_CoopFundTypeDesc').val(),
                field: 'CoopFundTypeDesc',
                valign: "left",
                align: "left",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "CoopFundTypeDesc", value: value };
                        return '<div style="min-width:100px">' + result.value + '</div>';
                    }
                }

            },
            {
                title: $('#TEdit').val(),
                field: 'Edit',
                valign: "middle",
                align: "center",
                formatter: function (value, row, index) {
                    var e = "<label onclick='DeleteActivityFlowRowNew(" + row.SeqNO + ")'><i class='icon-pencil icon-white'></i>" + (isZH() ? '删除' : 'Delete') + "</label>";
                    return e;
                }
            }
        ];
    }
    //市场基金
    $('#ActivityFlowTableNew').bootstrapTable({
        pagination: true,
        striped: true, //是否显示行间隔色
        sortable: true,
        sortName: 'CoopFundCode',
        sortOrder: 'asc',
        columns: _columns,
        onClickCell: function (field, value, row, $element) {
            return false;

        },
        onClickRow: function (row, $element) {
            curRow = row;
        },
        onEditableSave: function (field, row, oldValue, $el) {
            saveCoopFund(row);
        }
    });
}

function InitActivityFlowTableOnline(_type) {
    var _columns = [
        {
            title: $('#B_CoopFundCode').val(),
            field: 'CoopFundCode',
            width: "300px",
            valign: "middle",
            align: "center",
            sortable: false,
            align: 'left',
            editable: {
                type: 'select',
                title: '',
                source: hdData,
                validate: function (v) {
                    if (!v) return isZH() ? '费用类型不能为空' : 'The Item cannot be empty';
                },
                noeditFormatter: function (value, row, index) {
                    value = isZH() ? row.CoopFundCode : row.CoopFundCode;
                    for (let i = 0; i < hdData.length; i++) {
                        if (row.CoopFundCode == hdData[i].value) {
                            value = hdData[i].text;
                        }
                    }
                    var html = '<a href="javascript:void(0)" data-name="CoopFundCode" data-pk="undefined" data-value="" class="editable editable-click">' + value + '</a>';
                    if (!value) {
                        html = '<a href="javascript:void(0)" data-name="CoopFundCode" data-pk="undefined" data-value="" class="editable editable-click">NULL</a>';
                    }
                    return html;
                }
            }
        },
        {
            title: $('#B_CoopFundAmt').val(),
            field: 'CoopFundAmt',
            valign: "left",
            align: "left",
            editable: {
                type: 'text',
                title: '',
                validate: function (v) {
                    v = $.trim(v);
                    var vil = isZH() ? '金额不能为空，且必须是数字' : 'The actual cost cannot be null, and only numbers accepted';
                    if (!v) {
                        return vil;
                    }
                    if (!/^(-?\d+)(\.\d+)?$/.test(v)) {
                        return vil;
                    }
                },
                noeditFormatter: function (value, row, index) {
                    var result = { filed: "CoopFundAmt", value: value };
                    var html = '<a href="javascript:void(0)" data-name="CoopFundAmt" data-pk="undefined" data-value="" class="editable editable-click editable-empty">￥' + convertMoneyD(result.value) + '</a>';
                    if (!result.value) {
                        html = '<a href="javascript:void(0)" data-name="CoopFundAmt" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                    }
                    return html;
                }
            }

        },
        {
            title: $('#B_CoopFundDMFChk').val(),
            field: 'CoopFund_DMFChk',
            valign: "middle",
            align: "center",
            sortable: false,
            align: 'left',
            editable: {
                type: 'select',
                title: '',
                source: hdDataCoop,
                validate: function (v) {
                    if (!v) return isZH() ? '是否报销不能为空' : 'The Item cannot be empty';
                },
                noeditFormatter: function (value, row, index) {
                    value = isZH() ? row.CoopFund_DMFChk : row.CoopFund_DMFChk;
                    for (let i = 0; i < hdDataCoop.length; i++) {
                        if (row.CoopFund_DMFChk + "" == hdDataCoop[i].value) {
                            value = hdDataCoop[i].text;
                        }
                    }
                    var html = '<a href="javascript:void(0)" data-name="CoopFund_DMFChk" data-pk="undefined" data-value="" class="editable editable-click">' + value + '</a>';
                    if (!value) {
                        html = '<a href="javascript:void(0)" data-name="CoopFund_DMFChk" data-pk="undefined" data-value="" class="editable editable-click">NULL</a>';
                    }
                    return html;
                }
            }
        },
        {
            title: $('#B_StartDate').val(),
            field: 'StartDate',
            valign: "left",
            align: "left",
            editable: {
                type: 'date',
                title: '',
                noeditFormatter: function (value, row, index) {
                    var result = { filed: "StartDate", value: value };
                    var html = '<a href="javascript:void(0)" data-name="StartDate" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + farmatDate(new Date(result.value)) + '</a>';
                    if (!result.value) {
                        html = '<a href="javascript:void(0)" data-name="StartDate" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                    }
                    return html;
                }
            }

        },
        {
            title: $('#B_EndDate').val(),
            field: 'EndDate',
            valign: "left",
            align: "left",
            editable: {
                type: 'date',
                title: '',
                noeditFormatter: function (value, row, index) {
                    var result = { filed: "EndDate", value: value };
                    var html = '<a href="javascript:void(0)" data-name="EndDate" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + farmatDate(new Date(result.value)) + '</a>';
                    if (!result.value) {
                        html = '<a href="javascript:void(0)" data-name="EndDate" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                    }
                    return html;
                }
            }

        },
        {
            title: $('#B_TotalDays').val(),
            field: 'TotalDays',
            valign: "left",
            align: "left",
            editable: {
                type: 'text',
                title: '',
                validate: function (v) {
                },
                noeditFormatter: function (value, row, index) {
                    var result = { filed: "TotalDays", value: value };
                    return '<div style="min-width:100px">' + result.value + '</div>';
                }
            }

        },
        {
            title: $('#B_AmtPerDay').val(),
            field: 'AmtPerDay',
            valign: "left",
            align: "left",
            editable: {
                type: 'text',
                title: '',
                validate: function (v) {
                },
                noeditFormatter: function (value, row, index) {
                    var result = { filed: "AmtPerDay", value: value };
                    let _value = result.value;
                    _value = isNaN(parseFloat(_value)) ? _value : parseFloat(_value).toFixed(2);
                    return '<div style="min-width:100px">￥' + convertMoneyD(_value) + '</div>';
                }
            }

        },
        {
            title: $('#B_CoopFundDesc').val(),
            field: 'CoopFundDesc',
            valign: "left",
            align: "left",
            editable: {
                type: 'text',
                title: '',
                validate: function (v) {
                },
                noeditFormatter: function (value, row, index) {
                    var result = { filed: "CoopFundDesc", value: value };
                    var html = '<a href="javascript:void(0)" data-name="CoopFundDesc" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                    if (!result.value) {
                        html = '<a href="javascript:void(0)" data-name="CoopFundDesc" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                    }
                    return html;
                }
            }

        },
        {
            title: $('#B_CoopFundTypeDesc').val(),
            field: 'CoopFundTypeDesc',
            valign: "left",
            align: "left",
            editable: {
                type: 'text',
                title: '',
                validate: function (v) {
                },
                noeditFormatter: function (value, row, index) {
                    var result = { filed: "CoopFundTypeDesc", value: value };
                    return '<div style="min-width:100px">' + result.value + '</div>';
                }
            }

        },
        {
            title: $('#TEdit').val(),
            field: 'Edit',
            valign: "middle",
            align: "center",
            formatter: function (value, row, index) {
                var e = "<label onclick='DeleteActivityFlowRowOnline(" + row.SeqNO + ")'><i class='icon-pencil icon-white'></i>" + (isZH() ? '删除' : 'Delete') + "</label>";
                return e;
            }
        }
    ];
    if (_type == 2) {
        _columns = [
            {
                title: $('#B_CoopFundCode').val(),
                field: 'CoopFundCode',
                width: "300px",
                valign: "middle",
                align: "center",
                sortable: false,
                align: 'left',
                editable: {
                    type: 'select',
                    title: '',
                    source: hdData,
                    validate: function (v) {
                        if (!v) return isZH() ? '费用类型不能为空' : 'The Item cannot be empty';
                    },
                    noeditFormatter: function (value, row, index) {
                        value = isZH() ? row.CoopFundCode : row.CoopFundCode;
                        for (let i = 0; i < hdData.length; i++) {
                            if (row.CoopFundCode == hdData[i].value) {
                                value = hdData[i].text;
                            }
                        }
                        var html = '<a href="javascript:void(0)" data-name="CoopFundCode" data-pk="undefined" data-value="" class="editable editable-click">' + value + '</a>';
                        if (!value) {
                            html = '<a href="javascript:void(0)" data-name="CoopFundCode" data-pk="undefined" data-value="" class="editable editable-click">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#B_CoopFundAmt').val(),
                field: 'CoopFundAmt',
                valign: "left",
                align: "left",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                        v = $.trim(v);
                        var vil = isZH() ? '金额不能为空，且必须是数字' : 'The actual cost cannot be null, and only numbers accepted';
                        if (!v) {
                            return vil;
                        }
                        if (!/^(-?\d+)(\.\d+)?$/.test(v)) {
                            return vil;
                        }
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "CoopFundAmt", value: value };
                        var html = '<a href="javascript:void(0)" data-name="CoopFundAmt" data-pk="undefined" data-value="" class="editable editable-click editable-empty">￥' + convertMoneyD(result.value) + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="CoopFundAmt" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }

            },
            {
                title: $('#B_CoopFundAmtBudget').val(),
                field: 'CoopFundAmt_Budget',
                valign: "left",
                align: "left",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "CoopFundAmt_Budget", value: value };
                        return '<div style="min-width:100px">￥' + convertMoneyD(result.value) + '</div>';
                    }
                }

            },
            {
                title: $('#B_CoopFundDMFChk').val(),
                field: 'CoopFund_DMFChk',
                valign: "middle",
                align: "center",
                sortable: false,
                align: 'left',
                editable: {
                    type: 'select',
                    title: '',
                    source: hdDataCoop,
                    validate: function (v) {
                        if (!v) return isZH() ? '是否报销不能为空' : 'The Item cannot be empty';
                    },
                    noeditFormatter: function (value, row, index) {
                        value = isZH() ? row.CoopFund_DMFChk : row.CoopFund_DMFChk;
                        for (let i = 0; i < hdDataCoop.length; i++) {
                            if (row.CoopFund_DMFChk + "" == hdDataCoop[i].value) {
                                value = hdDataCoop[i].text;
                            }
                        }
                        var html = '<a href="javascript:void(0)" data-name="CoopFund_DMFChk" data-pk="undefined" data-value="" class="editable editable-click">' + value + '</a>';
                        if (!value) {
                            html = '<a href="javascript:void(0)" data-name="CoopFund_DMFChk" data-pk="undefined" data-value="" class="editable editable-click">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#B_StartDate').val(),
                field: 'StartDate',
                valign: "left",
                align: "left",
                editable: {
                    type: 'date',
                    title: '',
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "StartDate", value: value };
                        var html = '<a href="javascript:void(0)" data-name="StartDate" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + farmatDate(new Date(result.value)) + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="StartDate" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }

            },
            {
                title: $('#B_EndDate').val(),
                field: 'EndDate',
                valign: "left",
                align: "left",
                editable: {
                    type: 'date',
                    title: '',
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "EndDate", value: value };
                        var html = '<a href="javascript:void(0)" data-name="EndDate" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + farmatDate(new Date(result.value)) + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="EndDate" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }

            },
            {
                title: $('#B_TotalDays').val(),
                field: 'TotalDays',
                valign: "left",
                align: "left",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "TotalDays", value: value };
                        return '<div style="min-width:100px">' + result.value + '</div>';
                    }
                }

            },
            {
                title: $('#B_AmtPerDay').val(),
                field: 'AmtPerDay',
                valign: "left",
                align: "left",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "AmtPerDay", value: value };
                        let _value = result.value;
                        _value = isNaN(parseFloat(_value)) ? _value : parseFloat(_value).toFixed(2);
                        return '<div style="min-width:100px">￥' + convertMoneyD(_value) + '</div>';
                    }
                }

            },
            {
                title: $('#B_CoopFundDesc').val(),
                field: 'CoopFundDesc',
                valign: "left",
                align: "left",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "CoopFundDesc", value: value };
                        var html = '<a href="javascript:void(0)" data-name="CoopFundDesc" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="CoopFundDesc" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }

            },
            {
                title: $('#B_CoopFundTypeDesc').val(),
                field: 'CoopFundTypeDesc',
                valign: "left",
                align: "left",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "CoopFundTypeDesc", value: value };
                        return '<div style="min-width:100px">' + result.value + '</div>';
                    }
                }

            },
            {
                title: $('#TEdit').val(),
                field: 'Edit',
                valign: "middle",
                align: "center",
                formatter: function (value, row, index) {
                    var e = "<label onclick='DeleteActivityFlowRowOnline(" + row.SeqNO + ")'><i class='icon-pencil icon-white'></i>" + (isZH() ? '删除' : 'Delete') + "</label>";
                    return e;
                }
            }
        ]
    }
    //市场基金线上
    $('#ActivityFlowTableOnline').bootstrapTable({
        pagination: true,
        striped: true, //是否显示行间隔色
        sortable: true,
        sortName: 'CoopFundCode',
        sortOrder: 'asc',
        columns: _columns,
        onClickCell: function (field, value, row, $element) {
            return false;

        },
        onClickRow: function (row, $element) {
            curRow = row;
        },
        onEditableSave: function (field, row, oldValue, $el) {
            saveCoopFund(row);
        }
    });
}

//交车仪式
function InitActivityFlowTableCar() {
    $('#ActivityFlowTableCar').bootstrapTable({
        pagination: true,
        striped: true, //是否显示行间隔色
        sortable: true,
        sortName: 'CoopFundCode',
        sortOrder: 'asc',
        columns: [
            {
                title: $('#B_HandOverDate').val(),
                field: 'HandOverDate',
                valign: "left",
                align: "left",
                sortable: true,
                editable: {
                    type: 'date',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "HandOverDate", value: value };
                        var html = '<a href="javascript:void(0)" data-name="HandOverDate" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="HandOverDate" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#B_Model').val(),
                field: 'Model',
                valign: "middle",
                align: "center",
                sortable: false,
                align: 'left',
                editable: {
                    type: 'select',
                    title: '',
                    source: carType,
                    validate: function (v) {
                        if (!v) return isZH() ? '车型不能为空' : 'The Item cannot be empty';
                    },
                    noeditFormatter: function (value, row, index) {
                        value = isZH() ? row.Model : row.Model;
                        for (let i = 0; i < carType.length; i++) {
                            if (row.Model == carType[i].value) {
                                value = carType[i].text;
                            }
                        }
                        var html = '<a href="javascript:void(0)" data-name="Model" data-pk="undefined" data-value="" class="editable editable-click">' + value + '</a>';
                        if (!value) {
                            html = '<a href="javascript:void(0)" data-name="Model" data-pk="undefined" data-value="" class="editable editable-click">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#B_MainProcess').val(),
                field: 'MainProcess',
                valign: "left",
                align: "left",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "MainProcess", value: value };
                        var html = '<a href="javascript:void(0)" data-name="MainProcess" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="MainProcess" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }

            },
            {
                title: $('#TEdit').val(),
                field: 'Edit',
                valign: "middle",
                align: "center",
                formatter: function (value, row, index) {
                    var e = "<label onclick='DeleteActivityFlowRowCar(" + row.SeqNO + ")'><i class='icon-pencil icon-white'></i>" + (isZH() ? '删除' : 'Delete') + "</label>";
                    return e;
                }
            }
        ],
        onClickCell: function (field, value, row, $element) {
            return false;

        },
        onClickRow: function (row, $element) {
            curRow = row;
        },
        onEditableSave: function (field, row, oldValue, $el) {

        }
    });
}

var maxActivityFlowSeqNO = 0;
function AddActivityFlowTable() {
    var $table = $('#ActivityFlowTable');
    var index = $table.bootstrapTable('getData').length;//尾添加行
    $table.bootstrapTable('insertRow', {
        index: index,
        row: {
            SeqNO: ++maxActivityFlowSeqNO,
            ActivityDateTimeStart: '',
            ActivityDateTimeEnd: '',
            Responsible: '',
            Contents: ''
        }
    });
}

var maxActivityFlowSeqNOProcess = 0;
function AddActivityFlowTableProcess() {
    var $table = $('#ActivityFlowTableProcess');
    var index = $table.bootstrapTable('getData').length;//尾添加行
    $table.bootstrapTable('insertRow', {
        index: index,
        row: {
            SeqNO: ++maxActivityFlowSeqNOProcess,
            ActivityDateTimeStart: '',
            ActivityDateTimeEnd: '',
            Responsible: '',
            Contents: ''
        }
    });
}

var maxActivityFlowSeqNOCar = 0;
function AddActivityFlowTableCar() {
    var $table = $('#ActivityFlowTableCar');
    var index = $table.bootstrapTable('getData').length;//尾添加行
    $table.bootstrapTable('insertRow', {
        index: index,
        row: {
            SeqNO: ++maxActivityFlowSeqNOCar,
            HandOverDate: '',
            Model: '',
            MainProcess: ''
        }
    });
}

var maxActivityFlowSeqNONew = 0;
function AddActivityFlowTableNew(_type) {
    let _CoopFundSumAmt = $("#CoopFundSumAmt").val();
    if (!_CoopFundSumAmt) {
        layer.open({
            title: '错误提示',
            type: 0,
            content: '请填写市场基金金额总计！'
        });
        return false;
    }
    var _row = {
        SeqNO: ++maxActivityFlowSeqNONew,
        CoopFundCode: '',
        CoopFundAmt: '',
        CoopFund_DMFChk: '',
        CoopFundDesc: '',
        CoopFundTypeDesc: '',
        Remark: ''
    };
    if (_type == 2) {
        _row = {
            SeqNO: ++maxActivityFlowSeqNONew,
            CoopFundCode: '',
            CoopFundAmt: '',
            CoopFundAmt_Budget: '',
            CoopFund_DMFChk: '',
            CoopFundDesc: '',
            CoopFundTypeDesc: '',
            Remark: ''
        };
    }
    var $table = $('#ActivityFlowTableNew');
    var index = $table.bootstrapTable('getData').length;//尾添加行
    $table.bootstrapTable('insertRow', {
        index: index,
        row: _row
    });
}

var maxActivityFlowSeqNOOnline = 0;
function AddActivityFlowTableOnline(_type) {
    let _CoopFundSumAmt = $("#CoopFundSumAmt").val();
    if (!_CoopFundSumAmt) {
        layer.open({
            title: '错误提示',
            type: 0,
            content: '请填写市场基金金额总计！'
        });
        return false;
    }
    var _row = {
        SeqNO: ++maxActivityFlowSeqNOOnline,
        CoopFundCode: '',
        CoopFundAmt: '',
        CoopFund_DMFChk: '',
        StartDate: '',
        EndDate: '',
        TotalDays: '',
        AmtPerDay: '',
        CoopFundDesc: '',
        CoopFundTypeDesc: '',
        Remark: ''
    }
    if (_type == 2) {
        _row = {
            SeqNO: ++maxActivityFlowSeqNOOnline,
            CoopFundCode: '',
            CoopFundAmt: '',
            CoopFundAmt_Budget: '',
            CoopFund_DMFChk: '',
            StartDate: '',
            EndDate: '',
            TotalDays: '',
            AmtPerDay: '',
            CoopFundDesc: '',
            CoopFundTypeDesc: '',
            Remark: ''
        }
    }
    var $table = $('#ActivityFlowTableOnline');
    var index = $table.bootstrapTable('getData').length;//尾添加行
    $table.bootstrapTable('insertRow', {
        index: index,
        row: _row
    });
}

function DeleteActivityFlowRow(id) {
    var $table = $('#ActivityFlowTable');
    $table.bootstrapTable('remove', {
        field: 'SeqNO',
        values: [id]
    });
}

function DeleteActivityFlowRowProcess(id) {
    var $table = $('#ActivityFlowTableProcess');
    $table.bootstrapTable('remove', {
        field: 'SeqNO',
        values: [id]
    });
}

function DeleteActivityFlowRowCar(id) {
    var $table = $('#ActivityFlowTableCar');
    $table.bootstrapTable('remove', {
        field: 'SeqNO',
        values: [id]
    });
}

function DeleteActivityFlowRowNew(id) {
    var $table = $('#ActivityFlowTableNew');
    $table.bootstrapTable('remove', {
        field: 'SeqNO',
        values: [id]
    });
}

function DeleteActivityFlowRowOnline(id) {
    var $table = $('#ActivityFlowTableOnline');
    $table.bootstrapTable('remove', {
        field: 'SeqNO',
        values: [id]
    });
}

function deletetr(tdobject) {
    var td = $(tdobject);
    td.parents("tr").remove();
}
function deletetrNoData(tableName) {
    var obj = '#' + tableName + ' .no-records-found';
    var tr = $(obj)[0];
    if (tr != undefined) {
        tr.remove()
    }
}

function InitDisplayModelsTable() {
    //展示车型
    $('#DisplayModelsTable').bootstrapTable({
        pagination: true,
        striped: true, //是否显示行间隔色
        columns: [
            {
                title: $('#TDisplayModel').val(),
                field: 'DisplayModelColor',
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "DisplayModelColor", value: value };
                        var html = '<a href="javascript:void(0)" data-name="DisplayModelColor" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="DisplayModelColor" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#TProvider').val(),
                field: 'Provider',
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "Provider", value: value };
                        var html = '<a href="javascript:void(0)" data-name="Provider" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="Provider" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#TEdit').val(),
                field: 'Edit',
                valign: "middle",
                align: "center",
                formatter: function (value, row, index) {
                    var e = "<label onclick='DeleteDisplayModelsRow(" + row.SeqNO + ")'><i class='icon-pencil icon-white'></i>" + (isZH() ? '删除' : 'Delete') + "</label>";
                    return e;
                }
            }
        ],
        onClickCell: function (field, value, row, $element) {
            return false;

        },
        onClickRow: function (row, $element) {
            curRow = row;
        },
        onEditableSave: function (field, row, oldValue, $el) {

        }
    });
}

var maxDisplayModelsSeqNO = 0;
function AddDisplayModelsTable() {
    var $table = $('#DisplayModelsTable');
    var index = $table.bootstrapTable('getData').length;//尾添加行
    $table.bootstrapTable('insertRow', {
        index: index,
        row: {
            SeqNO: maxDisplayModelsSeqNO++,
            DisplayModelColor: '',
            Provider: ''
        }
    });
}
function DeleteDisplayModelsRow(id) {
    var $table = $('#DisplayModelsTable');
    $table.bootstrapTable('remove', {
        field: 'SeqNO',
        values: [id]
    });
}

function InitTestDriverTable() {
    //试驾车辆
    $('#TestDriveTable').bootstrapTable({
        pagination: true,
        columns: [
            {
                title: $('#TDisplayModel').val(),
                field: 'DisplayModelColor',
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "DisplayModelColor", value: value };
                        var html = '<a href="javascript:void(0)" data-name="DisplayModelColor" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="DisplayModelColor" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#TProvider').val(),
                field: 'Provider',
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "Provider", value: value };
                        var html = '<a href="javascript:void(0)" data-name="Provider" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="Provider" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }
            }, {
                title: $('#TEdit').val(),
                field: 'Edit',
                valign: "middle",
                align: "center",
                formatter: function (value, row, index) {
                    var e = "<label onclick='DeleteTestDriveRow(" + row.SeqNO + ")'><i class='icon-pencil icon-white'></i>" + (isZH() ? '删除' : 'Delete') + "</label>";
                    return e;
                }
            }],
        onClickCell: function (field, value, row, $element) {
            return false;

        },
        onClickRow: function (row, $element) {
            curRow = row;
        },
        onEditableSave: function (field, row, oldValue, $el) {

        }
    });
}

var maxTestDriveSeqNO = 0;
function AddTestDriveTable() {
    var $table = $('#TestDriveTable');
    var index = $table.bootstrapTable('getData').length;//尾添加行
    $table.bootstrapTable('insertRow', {
        index: index,
        row: {
            SeqNO: ++maxTestDriveSeqNO,
            DisplayModelColor: '',
            Provider: ''
        }
    });
}
function DeleteTestDriveRow(id) {
    var $table = $('#TestDriveTable');
    $table.bootstrapTable('remove', {
        field: 'SeqNO',
        values: [id]
    });
}

function InitActivityBudgetTable() {
    //活动预算详情
    $('#ActivityBudgetTable').bootstrapTable({
        pagination: true,
        columns: [
            {
                title: $('#ExpenseItem').val(),
                field: 'ItemName',
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "ItemName", value: value };
                        var html = '<a href="javascript:void(0)" data-name="ItemName" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="ItemName" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#TDESC').val(),
                field: 'Descs',
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "Descs", value: value };
                        var html = '<a href="javascript:void(0)" data-name="Descs" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="Descs" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }

                }
            }
            ,
            {
                title: $('#UnitPrice').val(),
                field: 'UnitPrice',
                valign: "middle",
                align: "center",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                        v = $.trim(v);
                        if (!v) {
                            return isZH() ? '单价不能为空，且必须是数字' : 'The unit price cannot be null and only numbers accepted';
                        }
                        if (!/^(-?\d+)(\.\d+)?$/.test(v)) {
                            return isZH() ? '单价不能为空，且必须是数字' : 'The unit price cannot be null and only numbers accepted';
                        }
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "UnitPrice", value: value };
                        var html = '<a href="javascript:void(0)" data-name="UnitPrice" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + dealNumber(result.value) + '</a>';
                        if (!result.value || result.value == undefined) {
                            html = '<a href="javascript:void(0)" data-name="UnitPrice" data-pk="undefined" data-value="" class="editable editable-click editable-empty">0</a>';
                        }
                        return html;
                    }
                }

            },
            {
                title: $('#TQuantity').val(),
                field: 'Counts',
                valign: "middle",
                align: "center",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                        v = $.trim(v);
                        if (!v) {
                            return isZH() ? '数量不能为空，且必须是整数' : 'Quantities cannot be empty and only numbers accepted';
                        }
                        if (!/^\+?[1-9]\d*$/.test(v)) {
                            return isZH() ? '数量不能为空，且必须是整数' : 'Quantities cannot be empty and  only numbers accepted';
                        }
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "Counts", value: value };
                        var html = '<a href="javascript:void(0)" data-name="Counts" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="Counts" data-pk="undefined" data-value="" class="editable editable-click editable-empty">0</a>';
                        }
                        return html;
                    }
                }
            }
            ,
            {
                title: $('#TotalAmount').val(),
                field: 'Total',
                valign: "middle",
                align: "center",
                formatter: function (value, row, index) {
                    return dealNumber(value);
                }
            },
            {
                title: $('#TEdit').val(),
                field: 'Edit',
                valign: "middle",
                align: "center",
                formatter: function (value, row, index) {
                    var e = "<label onclick='DeleteActivityBudgetRow(" + row.SeqNO + ")'><i class='icon-pencil icon-white'></i>" + (isZH() ? "删除" : "Delete") + "</label>";
                    return e;
                }
            }
        ],
        onClickCell: function (field, value, row, $element) {
            return false;

        },
        onClickRow: function (row, $element) {
            curRow = row;
        },
        onEditableSave: function (field, row, oldValue, $el) {
            $('#ActivityBudgetTable').bootstrapTable('resetView');//重置Table大小
        }
    });
}

var maxActivityBudgetSeqNO = 0;
function AddActivityBudgetTable() {
    var $table = $('#ActivityBudgetTable');
    var index = $table.bootstrapTable('getData').length;//尾添加行
    $table.bootstrapTable('insertRow', {
        index: index,
        row: {
            SeqNO: ++maxActivityBudgetSeqNO,
            ItemName: '',
            Descs: '',
            UnitPrice: 0,
            Counts: 0
        }
    });
    $("#ActivityBudgetSum").html("");
}
function DeleteActivityBudgetRow(id) {
    var $table = $('#ActivityBudgetTable');
    $table.bootstrapTable('remove', {
        field: 'SeqNO',
        values: [id]
    });
    $("#ActivityBudgetSum").html("");
}

function ShowPlan() {
    if ($('#activityplan')[0].style.display == 'none') {
        $('#activityplan')[0].style.display = 'block';
    }
    else {
        $('#activityplan')[0].style.display = 'none';
    }
}

function ShowSolution() {
    if ($('#ultimatesolution')[0].style.display == 'none') {
        $('#ultimatesolution')[0].style.display = 'block';
    }
    else {
        $('#ultimatesolution')[0].style.display = 'none';
    }
}

function ShowReport() {
    if ($('#activityreport')[0].style.display == 'none') {
        $('#activityreport')[0].style.display = 'block';
    }
    else {
        $('#activityreport')[0].style.display = 'none';
    }
}

function InitActualActivityProcess() {
    //初始化表格
    $('#ActivityFlow2Table').bootstrapTable({
        pagination: true,
        striped: true, //是否显示行间隔色
        sortable: true,
        sortName: 'ActivityDateTime',
        sortOrder: 'asc',
        columns: [
            {
                title: $('#TTime').val(),
                field: 'ActivityDateTime',
                valign: "left",
                align: "left",
                sortable: true,
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "ActivityDateTime", value: value };
                        var html = '<a href="javascript:void(0)" data-name="ActivityDateTime" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="ActivityDateTime" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#TProcess').val(),
                field: 'Item',
                valign: "left",
                align: "left",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "Item", value: value };
                        var html = '<a href="javascript:void(0)" data-name="Item" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="Item" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#TContent').val(),
                field: 'Contents',
                valign: "left",
                align: "left",
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "Contents", value: value };
                        var html = '<a href="javascript:void(0)" data-name="Contents" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="Contents" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#TComments').val(),
                valign: "left",
                align: "left",
                field: 'Remark',
                editable: {
                    type: 'text',
                    title: '',
                    validate: function (v) {
                    },
                    noeditFormatter: function (value, row, index) {
                        var result = { filed: "Remark", value: value };
                        var html = '<a href="javascript:void(0)" data-name="Remark" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                        if (!result.value) {
                            html = '<a href="javascript:void(0)" data-name="Remark" data-pk="undefined" data-value="" class="editable editable-click editable-empty">NULL</a>';
                        }
                        return html;
                    }
                }
            },
            {
                title: $('#TEdit').val(),
                field: 'Edit',
                valign: "middle",
                align: "center",
                formatter: function (value, row, index) {
                    var e = "<label onclick='DeleteInitActualActivity(" + row.SeqNO + ")'><i class='icon-pencil icon-white'></i>" + (isZH() ? '删除' : 'Delete') + "</label>";
                    return e;
                }
            }
        ],
        onClickCell: function (field, value, row, $element) {
            return false;

        },
        onClickRow: function (row, $element) {
            curRow = row;
        },
        onEditableSave: function (field, row, oldValue, $el) {

        }

    });

}

var maxActualActivitySeqNo = 0;
function AddInitActualActivity() {
    var $table = $('#ActivityFlow2Table');
    var index = $table.bootstrapTable('getData').length;
    $table.bootstrapTable('insertRow', {
        index: index,
        row: {
            SeqNO: maxActualActivitySeqNo++,
            ActivityDateTime: '',
            Item: '',
            Contents: '',
            Remark: ''
        }
    });
}

function DeleteInitActualActivity(id) {
    var $table = $('#ActivityFlow2Table');
    $table.bootstrapTable('remove', {
        field: 'SeqNO',
        values: [id]
    });
}

//活动实际费用清单
function InitActualCost() {
    //初始化表格
    $('#ActualCostTable').bootstrapTable({
        pagination: true,
        striped: true, //是否显示行间隔色
        columns:
            [
                {
                    title: $('#ExpenseItem').val(),
                    field: 'Item',
                    editable: {
                        type: 'text',
                        title: '',
                        validate: function (v) {
                        },
                        noeditFormatter: function (value, row, index) {
                            var result = { filed: "Item", value: value };
                            var html = '<a href="javascript:void(0)" data-name="Item" data-pk="undefined" data-value="" class="editable editable-click">' + result.value + '</a>';
                            if (result.value == "" || result.value == null) {
                                html = '<a href="javascript:void(0)" data-name="Item" data-pk="undefined" data-value="" class="editable editable-click">NULL</a>';
                            }
                            return html;
                        }
                    }
                },
                {
                    title: $('#TDESC').val(),
                    field: 'Descs',
                    editable: {
                        type: 'text',
                        title: '',
                        validate: function (v) {
                        },
                        noeditFormatter: function (value, row, index) {
                            var result = { filed: "Descs", value: value };
                            var html = '<a href="javascript:void(0)" data-name="Descs" data-pk="undefined" data-value="" class="editable editable-click">' + result.value + '</a>';
                            if (result.value == "" || result.value == null) {
                                html = '<a href="javascript:void(0)" data-name="Descs" data-pk="undefined" data-value="" class="editable editable-click">NULL</a>';
                            }
                            return html;
                        }
                    }
                },
                {
                    title: $('#UnitPrice').val(),
                    field: 'UnitPrice',
                    valign: "middle",
                    align: "center",
                    editable: {
                        type: 'text',
                        title: '',
                        validate: function (v) {
                            v = $.trim(v);
                            if (!v) {
                                return isZH() ? '单价不能为空，且必须是数字' : 'The unit price cannot be null and only numbers accepted';
                            }
                            if (!/^(-?\d+)(\.\d+)?$/.test(v)) {
                                return isZH() ? '单价不能为空，且必须是数字' : 'The unit price cannot be null and only numbers accepted';
                            }
                        },
                        noeditFormatter: function (value, row, index) {
                            var result = { filed: "UnitPrice", value: value };
                            var html = '<a href="javascript:void(0)" data-name="UnitPrice" data-pk="undefined" data-value="" class="editable editable-click">' + dealNumber(result.value) + '</a>';
                            if (result.value == undefined) {
                                html = '<a href="javascript:void(0)" data-name="UnitPrice" data-pk="undefined" data-value="" class="editable editable-click">0</a>';
                            }
                            return html;
                        }
                    }
                },
                {
                    title: $('#TQuantity').val(),
                    field: 'Counts',
                    valign: "middle",
                    align: "center",
                    editable: {
                        type: 'text',
                        title: '',
                        validate: function (v) {
                            v = $.trim(v);
                            if (!v) {
                                return isZH() ? '数量不能为空，且必须是整数' : 'Quantities cannot be empty and only numbers accepted';
                            }
                            if (!/^\+?[1-9]\d*$/.test(v)) {
                                return isZH() ? '数量不能为空，且必须是整数' : 'Quantities cannot be empty and only numbers accepted';
                            }
                        },
                        noeditFormatter: function (value, row, index) {
                            var result = { filed: "Counts", value: value };
                            var html = '<a href="javascript:void(0)" data-name="Counts" data-pk="undefined" data-value="" class="editable editable-click editable-empty">' + result.value + '</a>';
                            if (!result.value) {
                                html = '<a href="javascript:void(0)" data-name="Counts" data-pk="undefined" data-value="" class="editable editable-click editable-empty">0</a>';
                            }
                            return html;
                        }
                    }
                },
                {
                    title: $('#TotalAmount').val(),
                    field: 'Total',
                    valign: "middle",
                    align: "center",
                    formatter: function (value, row, index) {
                        return dealNumber(value);
                    }
                },
                {
                    title: $('#TEdit').val(),
                    field: '',
                    formatter: function (value, row, index) {
                        return "<a href='javascript:;' onclick='DeleteActualCost(" + row.SeqNO + ")'><i class='icon-pencil icon-white'></i>" + (isZH() ? '删除' : 'Delete') + "</a>";;
                    }
                }
            ],
        onClickRow: function (row, $element) {
            curRow = row;
        },
        onEditableSave: function (field, row, oldValue) {
        }
    });

}

var maxActualCostSeqNo = 0;
function AddActualCost() {
    var $table = $('#ActualCostTable');
    var index = $table.bootstrapTable('getData').length;
    $table.bootstrapTable('insertRow', {
        index: index,
        row: {
            SeqNO: maxActualCostSeqNo++,
            Item: null,
            Descs: null,
            Description: null,
            UnitPrice: 0,
            Counts: 0,
            Total: 0
        }
    });
    $("#ExpenseTotalAmt").html("");
}

function DeleteActualCost(id) {
    var $table = $('#ActualCostTable');
    $table.bootstrapTable('remove', {
        field: 'SeqNO',
        values: [id]
    });
    $("#ExpenseTotalAmt").html("");
}

var dealNumber = function (money) {
    if (money && money != null) {
        money = String(money);
        var left = money.split('.')[0], right = money.split('.')[1];
        right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.00';
        var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
        return (Number(money) < 0 ? "-" : "") + temp.join(',').split('').reverse().join('') + right;
    } else if (money === 0) {   //注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
        return '0.00';
    } else {
        return "";
    }
};

function farmatDate(date) {
    let _year = date.getFullYear();  // 获取完整的年份(4位,1970)
    let _month = date.getMonth() + 1;  // 获取月份(0-11,0代表1月,用的时候记得加上1)
    let _day = date.getDate();  // 获取日(1-31)
    let _date = _year + "-" + _month + "-" + _day;
    return _date;
}

function subCluesToTheCost() {
    let _sumAmt = $("#TotalBudgetAmt").val();
    _sumAmt = replaceMoneyD(_sumAmt);
    let _cluesToTheCost = _sumAmt / $("#People_NewLeadsThisYearCount").val();
    if ($("#People_NewLeadsThisYearCount").val()) {
        _cluesToTheCost = _sumAmt / $("#People_NewLeadsThisYearCount").val();
        _cluesToTheCost = parseFloat(_cluesToTheCost);
    } else {
        _cluesToTheCost = '';
    }
    $("#CluesToTheCost").val(_cluesToTheCost ? convertMoneyD(_cluesToTheCost) : '');
}

function subCluesToTheCostReport() {
    let _sumAmt = $("#TotalBudgetAmt").val();
    _sumAmt = replaceMoneyD(_sumAmt);
    let _cluesToTheCost = _sumAmt / $("#People_NewLeadsThsYearCount").val();
    if ($("#People_NewLeadsThsYearCount").val()) {
        _cluesToTheCost = _sumAmt / $("#People_NewLeadsThsYearCount").val();
        _cluesToTheCost = parseFloat(_cluesToTheCost);
    } else {
        _cluesToTheCost = '';
    }
    $("#CluesToTheCost").val(_cluesToTheCost ? convertMoneyD(_cluesToTheCost) : '');
    subCluesToTheCostPLAN();
}

function subCluesToTheCostPLAN() {
    let _sumAmt = $("#TotalBudgetAmt_PLAN").val();
    _sumAmt = replaceMoneyD(_sumAmt);
    let _cluesToTheCost = _sumAmt / $("#People_NewLeadsThisYearCount_PLAN").val();
    if ($("#People_NewLeadsThisYearCount_PLAN").val()) {
        _cluesToTheCost = _sumAmt / $("#People_NewLeadsThisYearCount_PLAN").val();
        _cluesToTheCost = parseFloat(_cluesToTheCost);
    } else {
        _cluesToTheCost = '';
    }
    $("#CluesToTheCost_PLAN").val(_cluesToTheCost ? convertMoneyD(_cluesToTheCost) : '');
}

function bindInputChange() {
    $("#People_InvitationCarOwnerCount").on('input', function () {
        sumPlan();
    });
    $("#People_InvitationDepositorCount").on('input', function () {
        sumPlan();
    });
    $("#People_InvitationPotentialCount").on('input', function () {
        sumPlan();
    });
    $("#People_InvitationOtherCount").on('input', function () {
        sumPlan();
    });
    $("#People_NewLeadsThisYearCount").on('input', function () {
        subCluesToTheCost();
    });
}

function bindReportInputChange() {
    $("#People_ActualCarOwnerCount").on('input', function () {
        sumReport();
    });
    $("#People_ActualDepositorCount").on('input', function () {
        sumReport();
    });
    $("#People_ActualPotentialCount").on('input', function () {
        sumReport();
    });
    $("#People_OthersCount").on('input', function () {
        sumReport();
    });
    $("#People_NewLeadsThsYearCount").on('input', function () {
        subCluesToTheCostReport();
    });
}

function sumPlan() {
    let _People_InvitationCarOwnerCount = parseInt($("#People_InvitationCarOwnerCount").val());
    let _People_InvitationDepositorCount = parseInt($("#People_InvitationDepositorCount").val());
    let _People_InvitationPotentialCount = parseInt($("#People_InvitationPotentialCount").val());
    let _People_InvitationOtherCount = parseInt($("#People_InvitationOtherCount").val());
    let _sumCount = (_People_InvitationCarOwnerCount ? _People_InvitationCarOwnerCount : 0) + (_People_InvitationDepositorCount ? _People_InvitationDepositorCount : 0) + (_People_InvitationPotentialCount ? _People_InvitationPotentialCount : 0) + (_People_InvitationOtherCount ? _People_InvitationOtherCount : 0);
    $("#People_InvitationTotalCount").val(_sumCount);
}

function sumReport() {
    let _People_InvitationCarOwnerCount = parseInt($("#People_ActualCarOwnerCount").val());
    let _People_InvitationDepositorCount = parseInt($("#People_ActualDepositorCount").val());
    let _People_InvitationPotentialCount = parseInt($("#People_ActualPotentialCount").val());
    let _People_InvitationOtherCount = parseInt($("#People_OthersCount").val());
    let _sumCount = (_People_InvitationCarOwnerCount ? _People_InvitationCarOwnerCount : 0) + (_People_InvitationDepositorCount ? _People_InvitationDepositorCount : 0) + (_People_InvitationPotentialCount ? _People_InvitationPotentialCount : 0) + (_People_InvitationOtherCount ? _People_InvitationOtherCount : 0);
    $("#People_ActualArrivalCount").val(_sumCount);
}

function searchFourWeeks(id) {
    $.commonGet("MarketAction/MarketActionBefore4WeeksSearch", { marketActionId: id }, function (data) {
        if (data) {
            let _MarketActionBefore4Weeks = data.MarketActionBefore4Weeks;
            let _sumAmt = _MarketActionBefore4Weeks.TotalBudgetAmt;
            let _cluesToTheCost = _sumAmt / _MarketActionBefore4Weeks.People_NewLeadsThisYearCount;
            if (_MarketActionBefore4Weeks.People_NewLeadsThisYearCount) {
                _cluesToTheCost = _sumAmt / _MarketActionBefore4Weeks.People_NewLeadsThisYearCount;
                _cluesToTheCost = parseFloat(_cluesToTheCost);
            } else {
                _cluesToTheCost = '';
            }
            $("#People_ParticipantsCount_PLAN").val(_MarketActionBefore4Weeks.People_ParticipantsCount);
            $("#CluesToTheCost_PLAN").val(_cluesToTheCost ? convertMoneyD(_cluesToTheCost) : '');
            $("#People_NewLeadsThisYearCount_PLAN").val(_MarketActionBefore4Weeks.People_NewLeadsThisYearCount);
            $("#People_DCPIDCount_PLAN").val(_MarketActionBefore4Weeks.People_DCPIDCount);
            $("#TotalBudgetAmt_PLAN").val(convertMoneyD(_MarketActionBefore4Weeks.TotalBudgetAmt));
            $("#CoopFundSumAmt_PLAN").val(convertMoneyD(_MarketActionBefore4Weeks.CoopFundSumAmt));
        }
    });
}

function changeShopId() {
    checkPrice();
}

function checkPrice() {
    $.commonGet("MarketAction/MarketActionBudgetMaxSearch", { shopId: $("#shopId").val() }, function (data) {
        if (data) {
            $("#Before4WeeksBudgetMax").html("预算历史最大值:￥" + convertMoneyD(data.Before4WeeksBudgetMax));
            $("#Before4WeeksDMFSumMax").html("市场基金金额合计历史最大值:￥" + convertMoneyD(data.Before4WeeksDMFSumMax));
            $("#After7BudgetMax").html("预算历史最大值:￥" + convertMoneyD(data.After7BudgetMax));
            $("#After7DMFSumMax").html("市场基金金额合计历史最大值:￥" + convertMoneyD(data.After7DMFSumMax));
        }
    });
}

function initMoney() {
    if ($("#ActivityBudget")) {
        $("#ActivityBudget").val(convertMoneyD($("#ActivityBudget").val()));
    }
    if ($("#CoopFundSumAmt")) {
        $("#CoopFundSumAmt").val(convertMoneyD($("#CoopFundSumAmt").val()));
    }
    if ($("#TotalBudgetAmt")) {
        $("#TotalBudgetAmt").val(convertMoneyD($("#TotalBudgetAmt").val()));
    }
}

function replaceData(_data) {
    if (_data["CoopFundSumAmt"]) {
        _data["CoopFundSumAmt"] = replaceMoneyD(_data["CoopFundSumAmt"]);
    }
    if (_data["CoopFundSumAmt_PLAN"]) {
        _data["CoopFundSumAmt_PLAN"] = replaceMoneyD(_data["CoopFundSumAmt_PLAN"]);
    }
    if (_data["TotalBudgetAmt"]) {
        _data["TotalBudgetAmt"] = replaceMoneyD(_data["TotalBudgetAmt"]);
    }
    if (_data["TotalBudgetAmt_PLAN"]) {
        _data["TotalBudgetAmt_PLAN"] = replaceMoneyD(_data["TotalBudgetAmt_PLAN"]);
    }
    if (_data["CluesToTheCost"]) {
        _data["CluesToTheCost"] = replaceMoneyD(_data["CluesToTheCost"]);
    }
    if (_data["CluesToTheCost_PLAN"]) {
        _data["CluesToTheCost_PLAN"] = replaceMoneyD(_data["CluesToTheCost_PLAN"]);
    }
    return _data;
}

function BMCSendEmail() {
    var MarketActionBefore21 = $('#PromotionCreate2').serializeObject();
    MarketActionBefore21.MarketActionId = id;
    MarketActionBefore21.InUserId = $("#G_UserId").val();
    MarketActionBefore21.ModifyUserId = $("#G_UserId").val();
    var VisualDescriptionOld = $("#VisualDescriptionOld").val();
    var VisualDescription = $("#VisualDescription").val();
    var VisualStatus = $("#VisualStatus").val();
    var VisualStatusOld = $("#VisualStatusOld").val() || "1"; //如果是新创建时，值为""
    //1.给主视觉设计公司发送邮件 验证广告视频
    if (roleName != "BMC") {
        if ($("#ossImage-100").attr("data-flag") != 1) {
            PromotionEdit2(3, KeyVisionSendEmailToBMC); 
        } else {
            layer.open({
                title: '提示',
                type: 0,
                content: '未上传主视觉图片！'
            });
        }
        return;
    }

    //2.如果主视觉审核意见有修改时给经销商发邮件
    if (roleName == "BMC" && VisualDescription && VisualStatus) //有邮件地址并且内容被修改了
    {
        PromotionEdit2(3, KeyVisionSendEmailToShop);
    } else {
        layer.open({
            title: '提示',
            type: 0,
            content: '请填写主视觉相关信息！'
        });
    }
}

function KeyVisionSendEmailToBMC() {
    console.log("send KeyVisionSendEmailToBMC 主视觉设计公司 marketActionId=" + id)
    $.commonGet("MarketAction/KeyVisionSendEmailToBMC", { marketActionId: id, keyVisionPic: $("#ossImage-100").attr("data-osspath") }, function (data) {
        var msg = isZH() ? '提交成功！' : "Save successfully !";
        layer.alert(msg, {
            skin: 'layui-layer-molv', closeBtn: 0
        }, function (datas) {
            window.location.href = "/Marketing/Index";
        });
    });
}

function KeyVisionSendEmailToShop() {
    console.log("send KeyVisionSendEmailToShop 经销商 marketActionId=" + id)
    $.commonGet("MarketAction/KeyVisionSendEmailToShop", { marketActionId: id, keyVisionApprovalCode: $("#VisualStatus").val(), keyVisionApprovalDesc: $("#VisualDescription").val()}, function (data) {
        var msg = isZH() ? '提交成功！' : "Save successfully !";
        layer.alert(msg, {
            skin: 'layui-layer-molv', closeBtn: 0
        }, function (datas) {
            window.location.href = "/Marketing/Index";
        });
    });
}

//验证数字格式正则（包含小数）
function veriDecimals(_data) {
    if (_data && _data != 0) {
        _data = _data + "";
        _data = _data.trim();
        var reg = /^\d+(?=\.{0,1}\d+$|$)/;
        return reg.test(_data);
    }
    return true;
}

//小数相加
function calculationAdd(num1, num2) {
    var temp1, temp2, a;
    try {
        // 获取temp1小数点后的长度
        temp1 = num1.toString().split(".")[1].length;
    }
    catch (e) {
        temp1 = 0;
    }
    try {
        // 获取temp2小数点后的长度
        temp2 = num2.toString().split(".")[1].length;
    }
    catch (e) {
        temp2 = 0;
    }
    // Math.max(temp1, temp2) 为了获取temp1和temp2两个值中较大的一个
    // Math.pow(a,b) 表示 a 的 b 次方
    a = Math.pow(10, Math.max(temp1, temp2));

    // 计算的方式是先将所有的小数乘为整数，待加减运算执行完之后再除去对应的 a 的值，将其变为小数输出
    // 先判断执行的方式是否是加法，不是的话则执行减法运算
    return (num1 * a + num2 * a) / a;
}