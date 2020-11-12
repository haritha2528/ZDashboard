sap.ui.define([
        "sap/ui/core/mvc/Controller",
        'ns/Project1/util/Formatter'
       
        
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, Formatter) {
		"use strict";

		return Controller.extend("ns.Project1.controller.View1", {
        Formatter: Formatter ,
            
			onInit: function () {
                var sServiceUrl = "/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/";
                var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl);
                // @ts-ignore
                this.getView().setModel(oModel);
                //crm model
                 var oCRMModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
                 // @ts-ignore
                 this.getView().byId("crmcontainer").setModel(oCRMModel, "oCRMModel");
// ecc model
var oECCModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
// @ts-ignore
this.getView().byId("ecccontainer").setModel(oECCModel, "oECCModel");
// BIW
var oBIWModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
// @ts-ignore
this.getView().byId("biwcontainer").setModel(oBIWModel, "oBIWModel");
// PLM
var oPLMModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
// @ts-ignore
this.getView().byId("plmcontainer").setModel(oPLMModel, "oPLMModel");
// SRM
var oSRMModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
// @ts-ignore
this.getView().byId("srmcontainer").setModel(oSRMModel, "oSRMModel");
// HRM
var oHRMModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
// @ts-ignore
this.getView().byId("hrmcontainer").setModel(oHRMModel, "oHRMModel");



            },
            	onOpenAppDialog: function (oEvent) {
				// @ts-ignore
				// @ts-ignore
				var IvSystem;
				//	var InpDate ="";
				//	var 	InpDate =this.getView().byId("CurrentDate").getValue();
				//	   var oModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/ZPI_DASHBOARD_SRV/PI_DSHBRDSet(IvSystem='ECC',IvDate='"+InpDate+"')?$expand=EtResultQueueSet,EtResultSystemSet,EtResultAppSet&$format=json");
				//   oModel.setSizeLimit(mSize);

				// @ts-ignore
				var oView = this.getView();
				var oDialog = oView.byId("ADialog");
				//  oDialog.setModel(oModelFetch, "tableModel");
				// create dialog lazily
				if (!oDialog) {
					// create dialog via fragment factory
					// @ts-ignore
					oDialog = sap.ui.xmlfragment(oView.getId(), "ns.Project1.view.AppDialog", this);
					oView.addDependent(oDialog);
				}

				oDialog.open();
				// @ts-ignore
				var oModel = this.getView().byId("crmcontainer").getModel("oCRMModel");
				// @ts-ignore
				oModel.refresh();
				// @ts-ignore
				this.getView().setModel(oModel, "oModel");
			},

			onCloseAppDialog: function () {
				// @ts-ignore
				var oView = this.getView();
				var oDialog = oView.byId("ADialog");

				oDialog.close();

			},
		});
	});
