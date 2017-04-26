/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/

class OperatingModeController {
  constructor() {
    this.name = 'operatingMode';
  }

  displayState(data) { // eslint-disable-line class-methods-use-this
    if (data) {
      return 'ON';
    }
    return 'OFF';
  }

  stateColor(data) { // eslint-disable-line class-methods-use-this
    if (data) {
      return '#26CB26';
    }
    return ' ';
  }

}

export default OperatingModeController;
