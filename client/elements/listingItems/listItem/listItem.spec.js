/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import listItemModule from './';
import ListItemController from './listItem.controller';
import listItemComponent from './listItem.component';
import listItemWebTemplate from './listItem.web.html';

describe.only('listItem', () => {
  let $rootScope; // eslint-disable-line no-unused-vars
  let makeController;

  beforeEach(window.module(listItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new ListItemController();
  }));

  describe('Module', () => {
    it('has the name listItem', () => {
      const controller = makeController();
      expect(controller).to.have.property('name');
    });
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    // it('has a device property', () => { // erase if removing this.name from the controller
    //  let controller = makeController();
    //  expect(controller).to.have.property('device');
    // });
  });

  describe('Web Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has title in template', () => {
      expect(listItemWebTemplate).to.match(/{{\s?vm\.item\.title\s?}}/g);
    });
    it('has subtitle in template', () => {
      expect(listItemWebTemplate).to.match(/{{\s?vm\.item\.subtitle\s?}}/g);
    });
    it('has description in template', () => {
      expect(listItemWebTemplate).to.match(/{{\s?vm\.item\.description\s?}}/g);
    });
    it('has onClick in template', () => {
      expect(listItemWebTemplate).to.match(/\s?vm\.item\.onClick\s?/g);
    });
    it('has moreOptions in template', () => {
      expect(listItemWebTemplate).to.match(/\s?vm\.item\.moreOptions\s?/g);
    });
    it('has sideText in template', () => {
      expect(listItemWebTemplate).to.match(/{{\s?vm\.item\.sideText\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
    const component = listItemComponent;

    it('includes the intended web template', () => {
      expect(component.template()).to.equal(listItemWebTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the correct controller', () => {
      expect(component.controller).to.equal(ListItemController);
    });
    it('has a 1 way binding to device', () => {
      expect(component.bindings).to.have.property('item');
      expect(component.bindings.item).to.equal('<');
    });
  });
});
