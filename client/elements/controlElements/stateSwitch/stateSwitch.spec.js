/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import SwitchModule from './';
import SwitchController from './stateSwitch.controller';
import SwitchComponent from './stateSwitch.component';
import SwitchTemplate from './stateSwitch.web.html';

describe('Switch', () => {
  let $rootScope; // eslint-disable-line no-unused-vars
  let makeController;

  beforeEach(window.module(SwitchModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new SwitchController();
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => {
      const controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    it('has name in template [REMOVE]', () => {
      expect(SwitchTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    const component = SwitchComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SwitchTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(SwitchController);
    });
  });
});
