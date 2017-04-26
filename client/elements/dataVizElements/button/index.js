
import buttonCardComponent from './button.component';

const buttonCardModule = angular.module('button', ['ngMaterial'])
  .component('buttonCard', buttonCardComponent);

export default buttonCardModule;
