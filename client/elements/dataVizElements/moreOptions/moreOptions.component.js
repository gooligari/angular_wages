
import controller from './moreOptions.controller';
import webTemplate from './moreOptions.web.html';
import mobileTemplate from './moreOptions.mobile.html';

const moreOptionsComponent = {
  restrict: 'E',
  bindings: { options: '<' },
  template() {
    if (window.ionic) {
      return mobileTemplate;
    }
    return webTemplate;
  },
  controller,
  controllerAs: 'vm',
};

export default moreOptionsComponent;