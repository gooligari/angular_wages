/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './thresholdSlider.controller';

import './thresholdSlider.scss';

let template;
if (window.ionic) {
  template = require('./thresholdSlider.mobile.html');
  require('./thresholdSlider.mobile.scss');
} else {
  template = require('./thresholdSlider.web.html');
  require('./thresholdSlider.web.scss');
}

const thresholdSliderComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm',
};

export default thresholdSliderComponent;
