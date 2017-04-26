
// const logo = require('./send.svg'); // eslint-disable-line no-unused-vars

class ButtonController {
  constructor() {
    // set the default values for the component
    this.name = 'button';
    this.decimals = 2;
    // this.logo = logo;
  }

  getClass(type) {
    switch (type) {
      case 'default':
        return ['btn-default']
      case 'primary':
        return ['btn-primary']
      case 'success':
        return ['btn-success']
        case 'info':
        return ['btn-info']
    }
  }
}

export default ButtonController;
