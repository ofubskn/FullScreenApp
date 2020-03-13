sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("FullScreenApp.controller.View1", {

		onInit: function () {
			this._oView = this.getView(); // privite (bu cont. özgü değişken)

			var oViewModel = new JSONModel({
				PoNumber: "",
				Lifnr: "",
				Waers: "",
				Burks: ""
			});

			this._oView.setModel(oViewModel, "viewModel"); //tırnak içinde atadığımız değişken var
			this._oTable = this._oView.byId("table0");

		},

		onAddPurchase: function () {

			var oModel = this._oView.getModel(),
				sPath = "/POStructureSet",
				oData = {},
				sParameters = {};

			oData.Ponumber = this._oView.getModel("viewModel").getProperty("/PoNumber");
			oData.Lifnr = this._oView.getModel("viewModel").getProperty("/Lifnr");
			oData.Waers = this._oView.getModel("viewModel").getProperty("/Waers");
			oData.Bukrs = this._oView.getModel("viewModel").getProperty("/Bukrs");

			sParameters.success = function (oData2, oResponse) {
				debugger;

				var oBinding = this._oTable.getBinding("items");
				oBinding.filter([]);
			}.bind(this);
			sParameters.error = function (oError) {
				debugger;

			};

			oModel.create(sPath, oData, sParameters);
			// oModel.create(sPath, oData, sParameters);

		}

	});

});