/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import dataTableComponent from './dataTable.component';

const dataTableModule = angular.module('tableData', [])
  .component('exoTable', dataTableComponent);

export default dataTableModule;
