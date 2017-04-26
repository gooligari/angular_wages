/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import ButtonModule from './';
import ButtonController from './button.controller';
import ButtonComponent from './button.component';
import ButtonTemplate from './button.web.html';

describe('Button', () => {
  let $rootScope; // eslint-disable-line no-unused-vars
  let makeController;

  beforeEach(window.module(ButtonModule.name));

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new ButtonController();
  }));

  it('has the name button', () => {
    const controller = makeController();
    expect(controller).to.have.property('name');
  });

  describe('Template', () => {
    it('has value in template', () => {
      expect(ButtonTemplate).to.match(/\s?vm\.text\s?/g);
    });

    it('has title in template', () => {
      expect(ButtonTemplate).to.match(/\s?vm\.type\s?/g);
    });

    it('has unit in template', () => {
      expect(ButtonTemplate).to.match(/\s?vm\.logo\s?/g);
    });
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => { // erase if removing this.name from the controller
      const controller = makeController();
      expect(controller).to.have.property('name');
    });

    it('has default values initialized', () => {
      /* eslint-disable no-unused-expressions*/
      const controller = makeController();
      expect(controller.text).to.not.be.undefined;
      expect(controller.type).to.not.be.undefined;
      expect(controller.logo).to.not.be.undefined;
      /* eslint-enable*/
    });

    it('button value should be set as integer', () => {
      const controller = makeController();
      controller.value = 80;
      expect(controller.value).to.equal(80);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = ButtonComponent;

    it('includes the intended template', () => {
      expect(component.template()).to.equal(ButtonTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ButtonController);
    });
  });
});
