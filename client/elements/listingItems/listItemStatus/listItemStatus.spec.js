/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import listItemStatusModule from './';
import ListItemStatusController from './listItemStatus.controller';
import listItemStatusComponent from './listItemStatus.component';
import listItemStatusWebTemplate from './listItemStatus.web.html';

describe('listItemStatus', () => {
  let $rootScope; // eslint-disable-line no-unused-vars
  let makeController;

  beforeEach(window.module(listItemStatusModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new ListItemStatusController();
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a "state" property with default value of "healthy"', () => {
      const controller = makeController();
      expect(controller).to.have.property('state');
      expect(controller.state).to.equal('healthy');
    });
  });

  describe('Web Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}

  });

  describe('Component', () => {
      // component/directive specs
    const component = listItemStatusComponent;

    it('includes the intended template', () => {
      expect(component.template()).to.equal(listItemStatusWebTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ListItemStatusController);
    });

    it('has a 1 way binding to status', () => {
      expect(component.bindings).to.have.property('status');
      expect(component.bindings.status).to.equal('<');
    });
  });
});
