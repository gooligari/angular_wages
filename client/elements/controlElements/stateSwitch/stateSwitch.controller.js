/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


class StateSwitchController {
  constructor() {
    'ngInject';

    // get ID so we can use id+button_name labels for the inputs and not conflict
    this.id = Math.random();
  }
}

export default StateSwitchController;
