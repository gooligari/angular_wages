/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import BigIconModule from './';
import BigIconController from './bigIcon.controller';
import BigIconComponent from './bigIcon.component';
import BigIconTemplate from './bigIcon.web.html';

describe.only('BigIcon', () => {
  let $rootScope;  // eslint-disable-line no-unused-vars
  let makeController;

  beforeEach(window.module(BigIconModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new BigIconController();
  }));

  describe('Module', () => {
    it('has the name bigIcon', () => {
      const controller = makeController();
      expect(controller).to.have.property('name');
    });
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => { // erase if removing this.name from the controller
      const controller = makeController();
      expect(controller).to.have.property('name');
    });

    it('has default values initialized', () => {
      const controller = makeController();
      /* eslint-disable  no-unused-expressions */
      expect(controller.state).to.not.be.undefined;
      expect(controller.colloroff).to.not.be.undefined;
      expect(controller.coloron).to.not.be.undefined;
      expect(controller.state).to.not.be.undefined;
      expect(controller.opacityoff).to.not.be.undefined;
      expect(controller.opacityon).to.not.be.undefined;
      /* eslint-enable  no-unused-expressions */
    });

    it('color() function returns color defined for On state, when state is set to "on"', () => {
      const controller = makeController();
      controller.state = 'on';
      expect(controller.color).to.be.equal(controller.coloron);
    });

    it('opacity() function returns opacity defined for On state, when state is set to "on"', () => {
      const controller = makeController();
      controller.state = 'on';
      expect(controller.opacity).to.be.equal(controller.opacityon);
    });

    it('opacity() function returns opacity defined for Off state, when state is set to "off"', () => {
      const controller = makeController();
      controller.state = 'off';
      expect(controller.opacity).to.be.equal(controller.opacityoff);
    });

    it('color() function returns color defined for Off state, when state is set to "off"', () => {
      const controller = makeController();
      controller.state = 'off';
      expect(controller.color).to.be.equal(controller.coloroff);
    });

    it('color() function returns color defined for On state, when state is set to "1"', () => {
      const controller = makeController();
      controller.state = '1';
      expect(controller.color).to.be.equal(controller.coloron);
    });

    it('color() function returns color defined for Off state, when state is set to "0"', () => {
      const controller = makeController();
      controller.state = 'off';
      expect(controller.color).to.be.equal(controller.coloroff);
    });

    it('color() function returns default value for invalid state', () => {
      const controller = makeController();
      controller.state = 'invalid';
      expect(controller.color).to.be.equal(controller.coloroff);
    });
  });

  describe('Template', () => {
    it('has color in template', () => {
      expect(BigIconTemplate).to.match(/\s?vm\.color\s?/g);
    });

    it('has icon in template', () => {
      expect(BigIconTemplate).to.match(/\s?vm\.icon\s?/g);
    });

    it('has opacity in template', () => {
      expect(BigIconTemplate).to.match(/\s?vm\.opacity\s?/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
    const component = BigIconComponent;

    it('includes the intended web template', () => {
      expect(component.template()).to.equal(BigIconTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BigIconController);
    });
  });
});
