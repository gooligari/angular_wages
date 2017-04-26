/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import BigNumberModule from './';
import BigNumberController from './bigNumber.controller';
import BigNumberComponent from './bigNumber.component';
import BigNumberTemplate from './bigNumber.web.html';

describe('BigNumber', () => {
  let $rootScope; // eslint-disable-line no-unused-vars
  let makeController;

  beforeEach(window.module(BigNumberModule.name));

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new BigNumberController();
  }));

  it('has the name bigNumber', () => {
    const controller = makeController();
    expect(controller).to.have.property('name');
  });

  describe('Template', () => {
    it('has value in template', () => {
      expect(BigNumberTemplate).to.match(/\s?vm\.value\s?/g);
    });

    it('has title in template', () => {
      expect(BigNumberTemplate).to.match(/\s?vm\.title\s?/g);
    });

    it('has unit in template', () => {
      expect(BigNumberTemplate).to.match(/\s?vm\.unit\s?/g);
    });
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => { // erase if removing this.name from the controller
      const controller = makeController();
      expect(controller).to.have.property('name');
    });

    it('has default values initialized', () => {
      const controller = makeController();
      expect(controller.title).to.not.be.undefined; // eslint-disable-line no-unused-expressions
      expect(controller.value).to.not.be.undefined; // eslint-disable-line no-unused-expressions
      expect(controller.unit).to.not.be.undefined; // eslint-disable-line no-unused-expressions
    });

    it('bigNumber value should be set as integer', () => {
      const controller = makeController();
      controller.value = 80;
      expect(controller.value).to.equal(80);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = BigNumberComponent;

    it('includes the intended template', () => {
      expect(component.template()).to.equal(BigNumberTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BigNumberController);
    });
  });
});
