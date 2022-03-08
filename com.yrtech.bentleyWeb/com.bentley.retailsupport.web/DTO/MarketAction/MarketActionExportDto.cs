﻿using com.yrtech.bentley.DAL;
using System;
using System.Collections.Generic;

namespace com.yrtech.InventoryAPI.DTO
{
    [Serializable]
    public class MarketActionExportDto
    {
        public int MarketActionId { get; set; }
        public Nullable<int> ShopId { get; set; }
        public string ShopCode { get; set; }
        public string ShopName { get; set; }
        public string ShopNameEn { get; set; }
        public string ActionName { get; set; }
        public string ActionCode { get; set; }
        public Nullable<int> EventTypeId { get; set; }
        public string EventTypeName { get; set; }
        public string EventTypeNameEn { get; set; }
        public string MarketActionStatusCode { get; set; }
        public string MarketActionStatusName { get; set; }
        public string MarketActionStatusNameEn { get; set; }
        public string MarketActionTargetModelCode { get; set; }
        public string MarketActionTargetModelName { get; set; }
        public string MarketActionTargetModelNameEn { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public string ActionPlace { get; set; }
        public Nullable<bool> ExpenseAccount { get; set; }
       public MarketActionBefore21 MarketActionBefore21{ get; set; }

       public MarketActionAfter7  MarketActionAfter7 { get; set; }
        public decimal? ActualExpenseSum { get; set; }
        public MarketActionLeadsCountDto LeadsCount { get; set; }



    }
}