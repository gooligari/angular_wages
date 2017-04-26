/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/



import dataVizElements from './dataVizElements';
import listingItems from './listingItems';
import uiElements from './uiElements';

const elements = angular.module('elements', [

  dataVizElements.name,
  listingItems.name,
  uiElements.name,
]);

export default elements;
