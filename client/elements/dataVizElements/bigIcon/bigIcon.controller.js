/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


class BigIconController {
  constructor() {
    'ngInject';

    this.name = 'bigIcon';
    this.coloroff = this.coloroff || '#101420';
    this.coloron = this.coloron || '#0ac410';
    this.state = this.state || false;
    this.size = this.size || '128px';

    this.height = `${_.split(this.size, 'px', 1) - 20}px`;
    this.displayState();
  }

  displayState() {
    if (this.state) {
      this.stateDisplay = 'ON';
    } else {
      this.stateDisplay = 'OFF';
    }
  }

  stateColor(data) {
    if (data) {
      return this.coloron;
    }
    return this.coloroff;
  }
}

export default BigIconController;
