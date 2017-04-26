/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import ActivityListItemModule from './';
import ActivityListItemController from './activityListItem.controller';
import ActivityListItemComponent from './activityListItem.component';
import ActivityListWebItemTemplate from './activityListItem.web.html';

describe('ActivityListItem', () => {
  let $rootScope; // eslint-disable-line no-unused-vars
  let makeController;

  beforeEach(window.module(ActivityListItemModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new ActivityListItemController();
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => { // erase if removing this.name from the controller
      const controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Web Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}

  });

  describe('Component', () => {
      // component/directive specs
    const component = ActivityListItemComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ActivityListWebItemTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ActivityListItemController);
    });
  });
});
