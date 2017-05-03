/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import LoginModule from './';
import LoginController from './login.controller';
import LoginComponent from './login.component';
import LoginTemplate from './login.web.html';

describe('Login', () => {
  let $rootScope; // eslint-disable-line no-unused-vars
  let makeController;

  beforeEach(window.module(LoginModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new LoginController();
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      const controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(LoginTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
    const component = LoginComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(LoginTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(LoginController);
    });
  });
});
