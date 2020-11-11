sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("ns.Project1.controller.View1", {
			onInit: function () {
                var sServiceUrl = "/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json";
                var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl);
                // @ts-ignore
                this.getView().setModel(oModel);
                //crm model
                 var oCRMModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
                 // @ts-ignore
                 this.getView().byId("crmcontainer").setModel(oCRMModel, "oCRMModel");

			}
		});
	});
